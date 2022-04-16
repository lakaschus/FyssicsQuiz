<template lang="">
    <DynamicComponent path="./../../questions/__tests__/question1/question.vue" />
    <DynamicComponent path="./../../questions/NewtonsLawsOfMotion/question.vue" />
    <DynamicComponent path="./../../questions/NewtonsLawsOfMotion/answer.vue" />
</template>
<script>
import DynamicComponent from '@/components/Dynamics/DynamicComponent.vue'
export default {
    components: {
        DynamicComponent
    }
}
</script>
<style lang="">
    
</style>