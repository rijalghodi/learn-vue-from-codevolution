<template>
  <div>
    <span>{{ name }}, {{ age }} years old | {{ maritalStatus }}</span>
  </div>
</template>

<script>
export default {
  name: "PropsExperiment",
  props: ["name", "age", "isMaried"],

  computed: {
    maritalStatus: function (props) {
      return props.isMaried ? "maried" : "not maried";
    },
  },
};
</script>
