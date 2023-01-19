<template>
  <div>
    <h1>Simple Get Users</h1>
    <button @click="getUsers">Load users</button>
    <div v-for="user in users" :key="user.id">{{ user.name }} | {{ user.email }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SimpleGet",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => (this.users = response.data))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped></style>
