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
  width: 600;
  padding: 18px 30px;
  font-family: Hack, Avenir, Helvetica, Arial, sans-serif;
  text-align: left;
  font-size: 18px;
}
</style>
