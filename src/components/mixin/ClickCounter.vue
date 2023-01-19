<template>
  <div>
    <button @click="add">You click me {{ count }} times</button>
  </div>
</template>

<script>
import CouterMixin from "./counter.js";
export default {
  name: "ClickCounter",
  mixins: [CouterMixin],
};
</script>

<style lang="scss" scoped></style>
