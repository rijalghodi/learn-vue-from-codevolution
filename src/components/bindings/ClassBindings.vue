<template>
  <h1>Class Bindings</h1>
  <!-- blue is string-->
  <span v-bind:class="'blue'">Blue</span>
  <!-- danger is variabel -->
  <span v-bind:class="danger">Red</span>
  <!-- conditional class binding-->
  <span v-bind:class="isImportant && 'bold'">Italic</span>
  <!-- tenrary in class binding-->
  <span v-bind:class="isDanger ? 'red' : 'blue'">Italic</span>
  <!-- array class -->
  <span v-bind:class="['blue', isImportant && 'bold']">Italic</span>
  <!-- Object conditional-->
  <span
    v-bind:class="{
      bold: isImportant,
      red: isDanger,
    }"
    >Italic</span
  >
</template>

<script>
export default {
  name: "ClassBindings",
  data() {
    return {
      danger: "red",
      isImportant: true,
      isDanger: true,
    };
  },
};
</script>

<style>
.blue {
  color: blue;
}
.red {
  color: red;
}
.bold {
  font-weight: bold;
}
.italic {
  font-style: italic;
}
</style>
