<template>
  <div class="popup">
    <p>I am Popup</p>
    <button @click="$emit('close', 'thank you for clicking!')">Close</button>
  </div>
</template>

<script>
export default {
  name: "PopupChild",
  emits: ["close"],
};
</script>

<style scoped>
.popup {
  width: 200px;
  padding: 10px;
  background-color: bisque;
}
</style>
