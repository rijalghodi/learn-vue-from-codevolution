<template>
  <div>
    <h1>Component V Model</h1>
    <p>Menghubungkan input dari child component untuk mengubah value parent. Lihat Vue Dev Tool!</p>
    <CustomInput v-model="name" />
  </div>
</template>

<script>
import CustomInput from "./CustomInput.vue";
export default {
  name: "ComponentVModel",
  data() {
    return {
      name: "",
    };
  },
  components: {
    CustomInput,
  },
};
</script>

<style lang="scss" scoped></style>
