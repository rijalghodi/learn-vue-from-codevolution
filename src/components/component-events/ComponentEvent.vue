<template>
  <div>
    <h1>Component Event & Emit</h1>
    <button @click="showPopup = true">Open Popup</button>
    <PopupChild v-show="showPopup" @close="closePopup" />
  </div>
</template>

<script>
import PopupChild from "./PopupChild.vue";
export default {
  name: "ComponentEvent",
  data() {
    return {
      showPopup: false,
    };
  },
  components: {
    PopupChild,
  },

  methods: {
    closePopup(messageFromChild) {
      this.showPopup = false;
      console.log(messageFromChild);
    },
  },
};
</script>
