<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    modelValue: String,
  },
};
</script>

<style lang="css" scoped>
input {
  border-color: blueviolet;
}
</style>
