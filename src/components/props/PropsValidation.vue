<template>
  <div>
    <span>{{ title }}, {{ likes }} likes | {{ published }}</span>
  </div>
</template>

<script>
export default {
  name: "PropsValidation",
  props: {
    title: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    published: Boolean,
  },

  computed: {
    maritalStatus: function (props) {
      return props.isMaried ? "maried" : "not maried";
    },
  },
};
</script>
