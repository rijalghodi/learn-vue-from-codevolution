<template>
  <div>
    <h2>Hi.. I am a child</h2>
  </div>
</template>

<script>
export default {
  name: "ChildLifeCycle",

  beforeCreate() {
    console.log("child beforeCreate");
  },
  created() {
    console.log("child created");
  },
  beforeMount() {
    console.log("child beforeMount");
  },
  mounted() {
    console.log("child mounted");
  },
  beforeUnmount() {
    console.log("child beforeUnount");
  },
  unmounted() {
    console.log("child unmounted");
  },
};
</script>

<style lang="scss" scoped></style>
