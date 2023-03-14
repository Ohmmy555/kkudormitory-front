<template>
  
<v-container>
  <v-row justify="center" align="center">
    <img src="~/assets/baner.jpg"  class="banner"/>
    
  </v-row>
</v-container>
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
      this.$kkudormAPI.getAll()
    },
  },
};
</script>
<style> 
.banner{
  height: 70vh;
  width: 100%;
  object-fit: cover;
}
.carddorm{
  background-color: brown;
  width: 100%;
}
</style>
