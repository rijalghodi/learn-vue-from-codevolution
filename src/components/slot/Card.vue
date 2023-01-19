<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardVue",
};
</script>

<style lang="css" scoped>
.card {
  width: 200px;
  padding: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  margin: 10px;
}
</style>
