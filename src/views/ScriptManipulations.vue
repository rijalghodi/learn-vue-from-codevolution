<template>
  <!-- Method vs Computed -->
  <ComputedDataExperiment />

  <h1>Props Experiment</h1>
  <PropsExperiment name="Bruce" age="24" isMaried="true" />

  <h1>Props Validation</h1>
  <PropsValidation :title="'Pembunuhan Anak'" :likes="27" :published="true" />
  <PropsValidation :title="'Penangkapan Koruptor'" :likes="29" />

  <ProvideAndInject />

  <!-- Component EVent and Emit -->
  <ComponentEvent />

  <WatcherExperiment />

  <ComponentVModel />

  <SlotExperiment />

  <MixinExperiment />
</template>

<script>
import PropsExperiment from "@/components/props/PropsExperiment.vue";
import PropsValidation from "@/components/props/PropsValidation.vue";
import ComponentEvent from "@/components/component-events/ComponentEvent.vue";
import ComputedDataExperiment from "@/components/method-vs-computed/ComputedDataExperiment.vue";
import ProvideAndInject from "@/components/provide-inject/ProvideAndInject.vue";
import WatcherExperiment from "@/components/watcher/WatcherExperiment.vue";
import ComponentVModel from "@/components/component-v-model/ComponentVModel.vue";
import SlotExperiment from "@/components/slot/SlotExperiment.vue";
import MixinExperiment from "@/components/mixin/MixinExperiment.vue";

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
    ProvideAndInject,
    WatcherExperiment,
    ComponentVModel,
    SlotExperiment,
    MixinExperiment,
  },
};
</script>

<style lang="scss" scoped></style>
