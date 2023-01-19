<template>
  <div>
    <SimpleGet />
    <ParentLifeCycle />
  </div>
</template>

<script>
import SimpleGet from "@/components/http-request/SimpleGet.vue";
import ParentLifeCycle from "@/components/component-lifecycle/ParentLifeCycle.vue";
export default {
  name: "HTTPRequest",
  components: {
    SimpleGet,
    ParentLifeCycle,
  },
};
</script>

<style></style>
