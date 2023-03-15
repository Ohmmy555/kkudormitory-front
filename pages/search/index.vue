<template>
  <v-row no-gutters>
    <v-col cols="8">
      <v-sheet class="pa-2 ma-2 mr-6">
        <v-col cols="12">
          <!-- //ก็อปตรงนี้ -->
          <v-card
            class="mt-5"
            v-for="zone in content"
            :key="zone.zone"
            color="white"
            :to="{
              path: '/kkudorm',
              query: { dorm_name: zone.aname, dormID: zone.ID },
            }"
          >
            <v-card-actions>
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar class="ma-3" size="auto" rounded="0" cover>
                  <v-img
                    v-if="zone.image_urls !== null"
                    :src="zone.image_urls[0]"
                  ></v-img>
                </v-avatar>
                <div>
                  <div class="d-flex flex-no-wrap justify-space-between">
                    <v-col cols="9">
                      <span class="text-h6" style="color: #eb6e44">
                        {{ zone.aname }}
                      </span>
                    </v-col>
                    <v-col cols="4">
                      <span class="namezone">
                        {{ zone.zone }}
                      </span>
                    </v-col>
                  </div>
                  <v-col>ที่อยู่ {{ zone.detail }} </v-col>
                  <v-col class="text-h6 textbg">ราคา {{ zone.price }}</v-col>
                  <v-col class="pb-0">สิ่งอำนวยความสะดวก</v-col>
                  <div class="d-flex">
                    <v-row>
                      <v-col cols="3" v-for="item in zone.far" :key="item">
                        <v-icon icon="fa-solid fa-circle-check" /><v-subtitle>{{
                          item
                        }}</v-subtitle>
                      </v-col>
                    </v-row>
                  </div>
                </div>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-sheet>
    </v-col>
    <v-col cols="4">
      <v-sheet class="pa-2 mt-5 mr-6">
        <v-card color="white">
          <v-card-title style="font-weight: bold">หอพักใหม่ล่าสุด</v-card-title>
          <v-card-text>
            <v-card
              color="white"
              class="mb-3"
              v-for="newx in new_data"
              :key="newx.dormid"
              :to="{
                path: '/kkudorm',
                query: { dorm_name: newx.dorm_name, dormID: newx.dormID },
              }"
            >
              <!--ก็อปตรงนี้-->
              <v-card-actions>
                <div class="d-flex flex-no-wrap justify-space-between">
                  <v-avatar class="ma-2" size="100px" rounded="0" cover>
                    <v-img
                      v-if="newx.image_urls !== null"
                      :src="newx.image_urls[0]"
                    ></v-img>
                  </v-avatar>
                  <div>
                    <v-col cols="12">
                      <v-text class="text" style="color: black; font-size: 18px"
                        >{{ newx.dorm_name }}
                      </v-text>
                      <br />
                      <v-text class="text">ที่อยู่ {{ newx.address }}</v-text>
                      <br />
                      <v-text class="text" style="font-weight: bold"
                        >ราคา {{ newx.month_price }}</v-text
                      >
                    </v-col>
                  </div>
                </div>
              </v-card-actions>
            </v-card>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      property: "value",
      content: [],
      name_zone: "",
      id_zone: "",
      zone_data: [{ image_urls: [""] }],
      loading: false,
      new_data: [{ image_urls: [""] }],
    };
  },
  created() {
    this.callAPI();
  },
  methods: {
    async callAPI() {
      this.content = await this.$kkudormAPI.getSearch();
    },
  },
  async created() {
    this.search = this.$route.query.query;
    this.content = await this.$kkudormAPI.getSearch(this.search);

    // this.name_zone = this.$route.query.name_zone;
    // this.id_zone = this.$route.query.id_zone;
    // this.zone_data = await this.$kkudormAPI.getZoneByID(this.id_zone);
    this.new_data = await this.$kkudormAPI.getNew();
    // this.zone_data.image_urls = this.zone_data.image_urls[0]
    this.loading = true;
  },
};
</script>

<style>
.namezone {
  border: 2px solid #f9d21d;
  border-radius: 20px;
  text-align: center;
  color: #f9d21d;
  padding: 10px;
  align-content: flex-end;
}
.textbg {
  color: rgb(97, 53, 53);
  background-color: #fff3cd;
  border-radius: 5px;
}
</style>
