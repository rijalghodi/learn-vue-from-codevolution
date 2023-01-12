<template>
  <h1>v-once & v-pre</h1>
  <button v-on:click="condition = !condition">Change</button>
  <span v-once>{{ condition }} </span>
  <span v-pre>{{ condition }}</span>
</template>

<script>
export default {
  name: "BonusDirective",
  data() {
    return {
      condition: true,
    };
  },
};
</script>
