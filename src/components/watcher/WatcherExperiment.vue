<template>
  <div>
    <h1>Watcher</h1>
    <h2>Current Volume: {{ volume }}</h2>
    <p>The volume data is being watched</p>
    <div>
      <button @click="volume += 1" :disabled="volume === 10">Increase</button>
      <button @click="volume -= 1" :disabled="volume === 0">Decrease</button>
    </div>

    <!-- If you want to watch the data immedietly during rendering process, use immediate = true
      in data. And if you want to watch object or array, use deep = true in watch 
    -->
    <h2>Film Info</h2>
    <p>The film info data is beeing watched immedietly and deeply. See the console.</p>
    <div>
      <input type="text" v-model="movie.title" />
      <input type="text" v-model="movie.actor" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WatcherExperiment",
  data() {
    return {
      volume: 0,
      movie: {
        title: "Example Title",
        actor: "Example Actor",
      },
    };
  },
  watch: {
    volume: function (newVolume, oldVolume) {
      if (newVolume > oldVolume && newVolume === 8) {
        alert("Too high volume can damage your ear");
      }
    },
    movie: {
      handler: function (newMovie) {
        console.log(newMovie);
      },
      immediate: true, // use immediate if you want to watch in the rendering process
      deep: true, // use deep if you want to watch object or array
    },
  },
};
</script>

<style lang="scss" scoped></style>
