<template>
  <ClassBindings />
  <EventHandlings />
  <FormHandlings />
  <FormModifier />
  <BonusDirective />
</template>

<script>
import FormHandlings from "../components/handlings/FormHandlings.vue";
import ClassBindings from "../components/bindings/ClassBindings.vue";
import EventHandlings from "../components/handlings/EventHandlings.vue";
import FormModifier from "../components/handlings/FormModifier.vue";
import BonusDirective from "../components/handlings/BonusDirective.vue";

export default {
  name: "TemplateManipulations",
  components: {
    FormHandlings,
    ClassBindings,
    EventHandlings,
    FormModifier,
    BonusDirective,
  },
};
</script>

<style></style>
