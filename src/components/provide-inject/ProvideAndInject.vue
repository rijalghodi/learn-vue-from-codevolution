<template>
  <div>
    <h1>Provide & Inject</h1>
    <p>
      this project name ({{ projectName }}) is injected from App.vue in the root of project
      directory
    </p>
  </div>
</template>

<script>
export default {
  name: "ProvideAndInject",
  inject: ["projectName"], // this is injected from App.vue in the root of directory
};
</script>

<style lang="scss" scoped></style>
