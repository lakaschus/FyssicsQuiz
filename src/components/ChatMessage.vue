<template>
  <div div :class="{ 'bg-blue-300 m-1 ml-auto rounded-md p-2': owner, 'bg-gray-300 m-1 mr-auto rounded-md p-2': !owner }">
    {{ message.text }}
    <br />

    <audio v-if="message.audioURL" :src="message.audioURL" controls></audio>
    <br />

    <span class="font-extralight text-xs">from UID {{ message.sender }}</span>
    <br />
    <span class="text-black from-neutral-100 text-xs">{{
      getDate(message.createdAt)
    }}</span>
  </div>
</template>

<script>
export default {
  props: ["message", "owner"],
  methods: {
    getDate(date) {
      const time = new Date(date * 1000)
      return time.toUTCString()
    },
  },
}
</script>
