<template>
  <v-container v-show="dorm_data != null">
    {{ dorm_data }}
  </v-container>
</template>

<script>
export default {
  data() {
    return { dormID: String, drom_name: String, dorm_data: null };
  },
  async created() {
    this.dorm_name = this.$route.query.dorm_name;
    this.dormID = this.$route.query.dormID;
    this.dorm_data = await this.$kkudormAPI.getDormByID(this.dormID);
  },
};
</script>

<style>
</style>
