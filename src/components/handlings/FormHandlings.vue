f
<template>
  <h1>Form Handlings</h1>
  <div class="grid">
    <form v-on:submit="handleSubmit">
      <!-- TEXT INPUT -->
      <fieldset>
        <label for="name">Name</label>
        <input id="name" v-model="formValues.name" />
      </fieldset>
      <fieldset>
        <label for="about">About</label>
        <textarea id="about" v-model="formValues.about" />
      </fieldset>

      <!-- DROPDOWN -->
      <fieldset>
        <label for="country">Country</label>
        <select id="country" v-model="formValues.country">
          <option>Indonesia</option>
          <option>Malay</option>
          <option>Japan</option>
        </select>
      </fieldset>

      <!-- CHECKBOX -->
      <fieldset>
        <input type="checkbox" id="remote-work" v-model="formValues.remote" />
        <label for="remote-work">Remote Work</label>
      </fieldset>

      <!-- MULTIPLE CHECKBOX -->
      <fieldset>
        <label>Skills</label>
        <input type="checkbox" id="html" value="html" v-model="formValues.skills" />
        <label for="html">HTML</label>
        <input type="checkbox" id="css" value="css" v-model="formValues.skills" />
        <label for="css">CSS</label>
        <input type="checkbox" id="js" value="js" v-model="formValues.skills" />
        <label for="js">js</label>
      </fieldset>

      <!-- RADIO -->
      <fieldset>
        <label>Position</label>
        <input
          type="radio"
          id="front"
          name="position"
          value="front"
          v-model="formValues.position"
        />
        <label for="front">Front End</label>
        <input
          type="radio"
          id="backend"
          name="position"
          value="back"
          v-model="formValues.position"
        />
        <label for="backend">Backend</label>
      </fieldset>

      <!-- SUBMIT BUTTON -->
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
  name: "FormHandlings",
  methods: {
    handleSubmit(event) {
      event.preventDefault();
      console.log(this.formValues);
    },
  },

  data() {
    return {
      formValues: {
        name: "",
        about: "",
        country: "",
        remote: false,
        skills: [],
        position: "",
      },
    };
  },
};
</script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
</style>
