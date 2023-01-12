<template>
  <h1>Event Handlings</h1>
  <div>
    <button v-on:click="condition = !condition">Change</button>
    <button v-on:click="increment">+</button>
    <button v-on:click="count -= 1">-</button>
    <span>{{ condition }} {{ count }}</span>
  </div>
</template>

<script>
export default {
  name: "EventHandlings",
  data() {
    return {
      condition: true,
      count: 1,
    };
  },
  methods: {
    increment() {
      this.count += 1;
      console.log("plus");
    },
  },
};
</script>
