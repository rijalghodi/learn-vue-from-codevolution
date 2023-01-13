<template>
  <h1>Props Experiment</h1>
  <PropsExperiment name="Bruce" age="24" isMaried="true" />

  <h1>Props Validation</h1>
  <PropsValidation :title="'Pembunuhan Anak'" :likes="27" :published="true" />
  <PropsValidation :title="'Penangkapan Koruptor'" :likes="29" />
  <!-- Component EVent and Emit -->
  <ComponentEvent />

  <!-- Method vs Computed -->
  <ComputedDataExperiment />
</template>

<script>
import PropsExperiment from "@/components/props/PropsExperiment.vue";
import PropsValidation from "@/components/props/PropsValidation.vue";
import ComponentEvent from "@/components/component-events/ComponentEvent.vue";
import ComputedDataExperiment from "@/components/method-computed-watcher/ComputedDataExperiment.vue";

export default {
  name: "ScriptManipulations",
  data() {
    return {
      myName: "Jhon",
      myHero: "Lion Man",
    };
  },
  components: {
    PropsExperiment,
    PropsValidation,
    ComponentEvent,
    ComputedDataExperiment,
  },
};
</script>

<style lang="scss" scoped></style>
