<template lang="">
  <n-card>
    <n-tabs
      :default-value="subdirectories[0]"
      size="large"
      justify-content="space-evenly"
    >
<n-tab-pane :name="name" :tab="name" v-for="name in subdirectories">
          <component :is="nextComponents(name)"></component>
        </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
<script>
import { getAllDirectories } from "@/utils/os/getAllDirectories.js"
import { NCard, NTabs, NTabPane } from "naive-ui"
import { defineAsyncComponent } from "vue"

export default {
  components: {
    NCard,
    NTabs,
    NTabPane,
  },
  data() {
    return {
      subdirectories: [],
      moduleImports: [],
    }
  },
  mounted() {
    const modules = import.meta.glob("./**/index.vue")
    this.subdirectories = getAllDirectories(modules)
  },
  methods: {
    nextComponents(name) {
      return defineAsyncComponent(() => import(`./${name}/index.vue`))
    },
  },
}
</script>
<style lang=""></style>
