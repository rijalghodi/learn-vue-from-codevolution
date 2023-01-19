<template>
  <div>
    <h1>Mixin</h1>
    <ClickCounter />
    <HoverCounter />
  </div>
</template>

<script>
import ClickCounter from "./ClickCounter.vue";
import HoverCounter from "./HoverCounter.vue";
export default {
  name: "MixinExperiment",
  components: {
    ClickCounter,
    HoverCounter,
  },
};
</script>

<style lang="scss" scoped></style>
