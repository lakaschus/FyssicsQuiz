<template lang="">
  <component :is="component()"></component>
</template>
<script>
import {defineAsyncComponent} from "vue";


export default {
  name: "Question",
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
          return defineAsyncComponent(() => import(this.path))
      }
  }
}
</script>
<style lang=""></style>
