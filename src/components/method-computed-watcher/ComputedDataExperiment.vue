<template>
  <div>
    <h1>Computed Data vs Method vs v-for</h1>

    <!-- Ini total Harga dihitung pakai method -->
    <p>Total Price (using methods) : {{ getTotalPrice() }}</p>

    <!-- Ini total harga dihitung pakai computed -->
    <p>Total Price (using computed) : {{ totalPrice }}</p>

    <input type="number" v-model="newPrice" />
    <button @click="groceries.push({ name: 'additional stuff', price: newPrice })">Add</button>
    <p>
      Method tidak menciptakan cache. Ia diekseskusi setiap kali ada perubahan pada UI (render),
      Contoh: Input data! (Lihat console)
    </p>
    <p>
      Computed menciptakan cache. Ia hanya diekseskusi apabila ada perubahan data yang dicomputed.
      Misalnya: Klik button! (Lihat console)
    </p>

    <h2>Expensive Stuff</h2>
    <p v-for="item in expensiveStuff" :key="item.name">{{ item.name }}, ${{ item.price }}</p>
  </div>
</template>

<script>
export default {
  name: "ComputedDataExperiment",
  data() {
    return {
      newPrice: 0,
      groceries: [
        { name: "lato-lato", price: 10 },
        { name: "food", price: 20 },
        { name: "tv", price: 30 },
        { name: "handphone", price: 40 },
        { name: "car", price: 50 },
      ],
    };
  },
  computed: {
    totalPrice() {
      console.log("total computed");
      return this.groceries.reduce((sum, item) => sum + item.price, 0);
    },
    expensiveStuff() {
      return this.groceries.filter((item) => item.price > 20);
    },
  },
  methods: {
    getTotalPrice() {
      console.log("total method");
      return this.groceries.reduce((sum, item) => sum + item.price, 0);
    },
  },
};
</script>

<style lang="scss" scoped></style>
