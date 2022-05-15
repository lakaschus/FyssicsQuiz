<template>
  <n-grid cols="24" item-responsive responsive="screen">
    <n-gi content-style="padding: 12px;" span="7"> </n-gi>
    <n-gi content-style="padding: 12px;" span="2">
      <difficulty-slider
        @sliderRange="(range) => (gameSettings.difficulty = range)"
      ></difficulty-slider>
    </n-gi>
    <n-gi content-style="padding: 12px;" span="4">
      <select-categories
        @selectedCategories="
          (categories) => (gameSettings.categories = categories)
        "
      ></select-categories>
    </n-gi>
    <n-gi content-style="padding: 12px;" span="4">
      <rounds-slider
        @numberRounds="(rounds) => (gameSettings.rounds = rounds)"
      ></rounds-slider>
      <time-slider
        @duration="(duration) => (gameSettings.time = duration)"
      ></time-slider>
      <other-settings
        @jokerActive="(joker) => (gameSettings.joker = joker)"
      ></other-settings>
    </n-gi>
    <n-gi content-style="padding: 12px;" span="7"> </n-gi>
    <n-gi content-style="padding: 12px;" span="11"> </n-gi>
    <n-gi content-style="padding: 12px;" class="text-center" span="2">
      <start-game-button @startGame="startNewGame()"></start-game-button>
    </n-gi>
    <n-gi content-style="padding: 12px;" span="11"> </n-gi>
  </n-grid>
</template>

<script setup>
import { NGrid, NGi } from "naive-ui"
import DifficultySlider from "./components/DifficultySlider.vue"
import SelectCategories from "./components/SelectCategories.vue"
import TimeSlider from "./components/TimeSlider.vue"
import RoundsSlider from "./components/RoundsSlider.vue"
import StartGameButton from "./components/StartGameButton.vue"
import OtherSettings from "./components/OtherSettings.vue"

import { reactive, watch } from "vue"

const gameSettings = reactive({
  difficulty: [1, 10],
  categories: [],
  rounds: 5,
  time: 60,
  joker: false,
})

watch(
  gameSettings,
  (settings, oldSettings) => {
    console.log(
      "🚀 ~ file: GameSettings.vue ~ line 48 ~ watch ~ settings",
      settings
    )
  },
  { deep: true }
)

function startNewGame() {
  // Do something to start game
  console.log("Start Game with the following settings: ", gameSettings)
}
</script>
