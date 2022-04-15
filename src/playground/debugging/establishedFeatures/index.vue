<template lang="">
  <n-grid x-gap="12" :cols="4">
    <n-gi>
      <n-card title="Card" class="bg-green-200"> Card Content </n-card>
    </n-gi>
    <n-gi>
      <div class="bg-green-200" />
    </n-gi>
    <n-gi>
      <div class="bg-green-200" />
    </n-gi>
    <n-gi>
      <div class="bg-green-200" />
    </n-gi>
  </n-grid>
</template>
<script>
import { getAllDirectories } from "@/utils/os/getAllDirectories.js"
import { NGrid, NGi, NCard } from "naive-ui"
import { defineAsyncComponent } from "vue"

export default {
  components: {
    NGrid,
    NGi,
    NCard
  },
  data() {
    return {
      subdirectories: [],
      moduleImports: [],
    }
  },
  mounted() {
    const modules = import.meta.glob("./*.vue")
    this.subdirectories = getAllDirectories(modules)
  },
  methods: {
    nextComponents(name) {
      return defineAsyncComponent(() => import(`./${name}.vue`))
    },
  },
}
</script>
