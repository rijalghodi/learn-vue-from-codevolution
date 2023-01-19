<template>
  <div>
    <h2 @mouseover="add">You hover me {{ count }} times</h2>
  </div>
</template>

<script>
import CouterMixin from "./counter.js";
export default {
  name: "HoverCounter",
  mixins: [CouterMixin],
};
</script>

<style lang="scss" scoped></style>
