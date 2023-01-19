<template>
  <div class="popup">
    <p>I am Popup</p>
    <p>
      To close me, my parent give me an emit function, called 'close', trigerred by clicking the
      close button. It will close me and send you a message in console
    </p>
    <button @click="$emit('close', 'thank you for clicking!')">Close</button>
  </div>
</template>

<script>
export default {
  name: "PopupChild",
  // Emits with validation
  // It means that the emit function must have message
  emits: {
    close: (message) => {
      if (!message) return false;
      else return true;
    },
  },
  // If you dont want validation of emit function, use this syntax:
  // emits: ["close"],
};
</script>

<style scoped>
.popup {
  width: 500px;
  padding: 10px;
  background-color: bisque;
}
</style>
