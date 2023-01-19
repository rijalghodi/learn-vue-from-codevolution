<template>
  <div>
    <h1>Slot Experiment</h1>

    <h2>1. Common Slot</h2>
    <CardVue>Card 1</CardVue>
    <CardVue><h3>Card 2</h3></CardVue>
    <CardVue><img src="https://picsum.photos/id/0/170" /></CardVue>

    <h2>2. Advance Slot (with name)</h2>
    <AdvanceCard>
      <template v-slot:header> <h3>The Great Stuff</h3> </template>
      <!-- default adalah nama slot yang tidak ada -->
      <template v-slot:default><img src="https://picsum.photos/id/21/170" /></template>
      <template v-slot:footer> <button>Check Out</button> </template>
    </AdvanceCard>
  </div>
</template>

<script>
import CardVue from "./Card.vue";
import AdvanceCard from "./AdvanceCard.vue";
export default {
  name: "SlotExperiment",
  components: {
    CardVue,
    AdvanceCard,
  },
};
</script>

<style lang="scss" scoped></style>
