<template>
  <v-row justify="center" align="center">
    <v-btn @click="callAPI" color="success">Click</v-btn>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      property: "value",
    };
  },
  methods: {
    callAPI() {
      this.$kkudormAPI.test()
    },
  },
};
</script>
