<template lang="">
  <vue-mathjax :formula="formula" />
</template>
<script>
import { VueMathjax } from 'vue-mathjax-next';

export default {
    components: {
        VueMathjax
    },
  mounted() {
  },
  data() {
    return {
        formula: '$$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$'
    }
  },
}
</script>
<style lang=""></style>
