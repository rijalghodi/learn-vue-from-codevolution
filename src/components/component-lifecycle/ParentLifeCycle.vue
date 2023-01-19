<template>
  <div>
    <h1>Component Lifecycle</h1>
    <button @click="showChild = !showChild">Toggle Child</button>
    <ChildLifeCycle v-if="showChild" />
  </div>
</template>

<script>
import ChildLifeCycle from "./ChildLifeCycle.vue";
export default {
  name: "ParentLifeCycle",

  data() {
    return {
      showChild: true,
    };
  },
  components: { ChildLifeCycle },

  beforeCreate() {
    console.log("parent beforeCreate");
  },
  created() {
    console.log("parent created");
  },
  beforeMount() {
    console.log("parent beforeMount");
  },
  mounted() {
    console.log("parent mounted");
  },
  beforeUpdate() {
    console.log("parent beforeUpdate");
  },
  updated() {
    console.log("child updated");
  },
  beforeUnmount() {
    console.log("parent beforeUnount");
  },
  unmounted() {
    console.log("parent unmounted");
  },
};
</script>

<style lang="scss" scoped></style>
