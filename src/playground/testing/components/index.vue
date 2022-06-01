<template lang="">
  <n-card>
    <n-tabs size="large" justify-content="space-evenly">
      <n-tab-pane name="GameSettings">
        <Game-Settings></Game-Settings>
      </n-tab-pane>
      <n-tab-pane name="GameCanvas">
        <Game-Canvas></Game-Canvas>
      </n-tab-pane>
      <n-tab-pane name="BlackBoard">
        <Black-Board></Black-Board>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>
<script>
import { NCard, NTabs, NTabPane } from "naive-ui"
import GameSettings from "../../../components/Menus/GameSettings.vue"
import GameCanvas from "../../../components/Game/GameCanvas.vue"
import BlackBoard from "../../../components/Game/BlackBoard.vue"

export default {
  components: {
    NCard,
    NTabs,
    NTabPane,
    GameCanvas,
    GameSettings,
    BlackBoard
  },
}
</script>
<style lang=""></style>
