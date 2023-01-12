<template>
  <h1>Form Modifier</h1>
  <div class="flex">
    <form @submit.prevent="handleSubmit">
      <input type="number" v-model.number="formValues.age" />
      <input type="text" @keyup.enter="console" v-model.trim="formValues.randomText" />
      <input type="text" v-model.lazy="formValues.lazyText" />
      <button type="submit">Submit</button>
    </form>

    <aside>
      <h2>SUMMARY</h2>
      <pre>
   {{ JSON.stringify(formValues, null, 3) }}
  </pre
      >
    </aside>
  </div>
</template>

<script>
export default {
  name: "FormModifier",
  methods: {
    handleSubmit() {
      console.log(this.formValues);
    },
    console() {
      console.log("Click Enter!");
    },
  },

  data() {
    return {
      formValues: {
        age: null,
        randomText: "",
        lazyText: "",
      },
    };
  },
};
</script>

<style>
.flex {
  display: flex;
  gap: 20px;
}
</style>
