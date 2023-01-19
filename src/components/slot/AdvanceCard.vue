<template>
  <div class="card">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <slot></slot>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
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

.header {
  height: 40px;
}

.footer {
  height: 30px;
}
</style>
