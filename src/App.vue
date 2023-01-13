<template>
  <div>
    <router-link to="/">Home</router-link> |
    <router-link to="/template">Template Manipulations</router-link> |
    <router-link to="/script">Script Manipulations</router-link>
  </div>
  <router-view></router-view>
</template>

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
}

h2 {
  font-size: 20px;
}

p {
  line-height: 1.4;
}
</style>
