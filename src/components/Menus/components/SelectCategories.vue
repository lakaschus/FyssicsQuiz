<template>
  <div class="text-left">
    <h4>Select Categories:</h4>
    <div class="h-60 max-h-60 overflow-auto">
      <n-tree
        block-line
        cascade
        checkable
        virtual-scroll
        style="height: 15rem"
        :data="data"
        :default-expanded-keys="defaultExpandedKeys"
        :default-checked-keys="defaultCheckedKeys"
        @update:checked-keys="updateCheckedKeys"
      />
    </div>
  </div>
</template>
<script setup>
import { defineComponent, ref, watch } from "vue"
import { NTree } from "naive-ui"
import { useQuestionsStore } from "@/stores/questions"
import { createCategoryTree } from "@/utils/questionHelpers/compileQuestions"

const categories = ref([])
const subCategories = ref([])
const specialCategories = ref([])
const allQuestions = useQuestionsStore().questions

console.log("keys: ", Object.keys(allQuestions))

let data = createCategoryTree(allQuestions)
console.log("🚀 ~ file: SelectCategories.vue ~ line 82 ~ data", data)
let defaultExpandedKeys = ref([""])
let defaultCheckedKeys = ref(Object.keys(allQuestions))
let updateCheckedKeys = (keys) => {
  console.log("updateCheckedKeys", keys)
  submitCheckedKeys(keys)
}

function handleUpdateValue(value) {
  categories.value = value
}

function submitCheckedKeys(keys) {
  const keysArray = []
  
  keys.forEach(element => {
    if (element.includes('Uncategorized (parent: ')) {
    keysArray.push(element.split('Uncategorized (parent: ').slice(-1)[0].slice(0, -1))
    
  } else {
    keysArray.push(element)
  }
  });
  const uniqueKeysArray = Array.from(new Set(keysArray))
  console.log("🚀 ~ file: SelectCategories.vue ~ line 46 ~ submitCheckedKeys ~ keysArray", uniqueKeysArray)
  return uniqueKeysArray
}

watch(
  categories,
  (newData) => {
    console.log(
      "🚀 ~ file: SelectCategories.vue ~ line 19 ~ watch ~ newData",
      newData
    )
  },
  { deep: true }
)
</script>
<style></style>
