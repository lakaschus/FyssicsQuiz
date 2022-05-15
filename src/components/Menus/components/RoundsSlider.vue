<template>
<div>
    <h4>Rounds</h4>
  <n-slider :default-value="rounds" v-model:value="rounds" :step="1" :max="20" :format-tooltip="formatTooltip" /><span>{{rounds}} Rounds</span></div>
</template>

<script setup>
import { NSlider } from "naive-ui"
import { ref, watch } from "vue"

let rounds = ref(5)
const formatTooltip = (value) => `${value} Rounds`

const emit = defineEmits(["numberRounds"])
watch(
  rounds,
  (data) => {
  console.log("🚀 ~ file: RoundsSlider.vue ~ line 19 ~ data", data)
    emit("numberRounds", data)
  }
)

</script>
