<template lang="">
  <n-card title="Playground">
    <n-tabs default-value="debugging" size="large" justify-content="space-evenly">
      <n-tab-pane name="debugging" tab="Debugging">
        <debugging />
      </n-tab-pane>
      <n-tab-pane name="testing" tab="Testing">
        <component :is="importTesting"></component>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
<script>
import { NCard, NTabs, NTabPane } from "naive-ui"
import Debugging from "./debugging/index.vue"
import Testing from "./testing/index.vue"
import { getAllDirectories } from "@/utils/os/getAllDirectories.js"
import {defineAsyncComponent} from "vue";


export default {
  components: {
    NCard,
    NTabs,
    NTabPane,
    Debugging,
    Testing,
  },
  mounted() {
    // https://vitejs.dev/guide/features.html#glob-import
    // 
    // for (const path in modules) {
    //   modules[path]().then((mod) => {
    //     console.log(path, mod)
    //   })
    // }
    const modules = import.meta.glob("./debugging/**/*.vue")
  },
  computed: {
    importTesting() {
      // https://stackoverflow.com/a/64570209/13219555
      return defineAsyncComponent(() => import('./testing/index.vue'))
    }
  },
  data () {
    return {
      component: 'testing'
    }
  }
}
</script>
<style lang=""></style>
