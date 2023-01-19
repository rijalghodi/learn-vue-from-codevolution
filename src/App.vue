<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/template">Template Manipulations</router-link> |
    <router-link to="/script">Script Manipulations</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      name: "Learn Vue",
    };
  },
  provide() {
    return {
      projectName: this.name,
    };
  },
  /*
  // If the data is not inherited from data(), then you can use this syntax
  provide: {
    projectName: "Learn Vue"
  }
   */
};
</script>

<style>
#app {
  width: 800px;
  padding: 18px 30px;
  font-family: Hack, Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  font-size: 16px;
  margin: 0px auto;
}

h1 {
  font-size: 24px;
  margin-top: 35px;
}

h2 {
  font-size: 20px;
}

p {
  line-height: 1.4;
}
</style>
