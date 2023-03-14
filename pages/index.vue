<template>
  
<v-container>
  <v-row justify="center" align="center">
    <!-- <v-btn @click="callAPI" color="success">Click</v-btn>
     -->
    <!-- <v-col v-for="zone in zones" :key="zone.name">
      <v-card loading title="Card title" subtitle="Subtitle" text="...">{{
        zone.name
      }}</v-card>
    </v-col> -->
    <v-col-12>
      <v-card width="400" v-for="zone in zones" :key="zone.name">
        <v-card-item>
          <v-card-title>{{ zone.name }}</v-card-title>

          <v-card-subtitle>This is a subtitle</v-card-subtitle>
        </v-card-item>

        <v-card-text v-for="item in zone.items" :key="item">{{
          item.dorm_name
        }}</v-card-text>
      </v-card>
    </v-col-12>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      property: "value",
      zones: [
        {
          name: "dummy",
          items: [],
        },
      ],
    };
  },
  created() {
    this.callAPI();
  },
  methods: {
    async callAPI() {
      this.zones = await this.$kkudormAPI.getAll();
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
