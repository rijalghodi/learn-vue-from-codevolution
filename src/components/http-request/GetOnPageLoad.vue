<template>
  <div>
    <h1>Get On Page Load</h1>
    <div v-for="user in users" :key="user.id">{{ user.name }} | {{ user.email }}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetOnPageLoad",
  created() {
    this.getUsers();
  },
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
