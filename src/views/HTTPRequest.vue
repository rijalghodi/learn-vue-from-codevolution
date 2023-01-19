<template>
  <div>
    <SimpleGet />
    <ParentLifeCycle />
    <GetOnPageLoad />
  </div>
</template>

<script>
import SimpleGet from "@/components/http-request/SimpleGet.vue";
import ParentLifeCycle from "@/components/component-lifecycle/ParentLifeCycle.vue";
import GetOnPageLoad from "@/components/http-request/GetOnPageLoad.vue";
export default {
  name: "HTTPRequest",
  components: {
    SimpleGet,
    ParentLifeCycle,
    GetOnPageLoad,
  },
};
</script>

<style></style>
