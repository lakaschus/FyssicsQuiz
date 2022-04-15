<template>
  <div>
    <slot name="user" :user="user"></slot>
  </div>
</template>

<script>
import { auth } from "../firebase/config";
import { ref } from "vue";

export default {
  setup() {
    const user = ref(null);
    const unsubscribe = auth.onAuthStateChanged(
      (firebaseUser) => (user.value = firebaseUser)
    );
    return {
      user,
      unsubscribe,
    };
  },

  destroyed() {
    this.unsubscribe();
  },
};
</script>
