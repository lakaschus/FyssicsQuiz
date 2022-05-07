<template>
  <n-grid :cols="4" class="text-left">
    <n-gi>
      <n-tree
        block-line
        cascade
        checkable
        :data="data"
        :default-expanded-keys="defaultExpandedKeys"
        :default-checked-keys="defaultCheckedKeys"
        @update:checked-keys="updateCheckedKeys"
      />
    </n-gi>
  </n-grid>
</template>
<script setup>
import { defineComponent, ref, watch } from "vue"
import {
  NSpace,
  NCheckbox,
  NCheckboxGroup,
  NGi,
  NGrid,
  NIcon,
  NTree,
} from "naive-ui"
import { CaretForwardOutline as CollapseIcon } from "@vicons/ionicons5"
import { useQuestionsStore } from "@/stores/questions"
import { repeat } from "seemly"
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
let updateCheckedKeys = (v) => {
  console.log("updateCheckedKeys", v)
}

function handleUpdateValue(value) {
  categories.value = value
}

function handleItemHeaderClick(data) {
  console.log(
    "🚀 ~ file: SelectCategories.vue ~ line 48 ~ handleItemHeaderClick ~ name, expanded",
    data
  )
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
