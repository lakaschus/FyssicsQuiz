<template lang="">
  <component :is="component()"></component>
</template>
<script>
import {defineAsyncComponent} from "vue";


export default {
  name: "DynamicComponent",
  props: {
    path: {
      type: String,
      required: true,
      default: null
    },
  },
  mounted() {
      console.log("PATH", this.path)
      console.log("Component", this.component())
  },
  methods: {
      component() {
          return defineAsyncComponent(() => import(/* @vite-ignore */ this.path))
      }
  }
}
</script>
<style lang=""></style>
