<template lang="">
  <div>
    {{ counter }}
  </div>
</template>
<script>
//import question from '@/questions/question1/question.vue'
import { useCounterStore } from '@/stores/counter'

export default {
  components: {
    // question
  },
  data() {
    return {
      counter: useCounterStore().counter
    }
  }
}
</script>
<style lang="">
  
</style>