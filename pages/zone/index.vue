<template>
  <v-container>
  <v-row no-gutters>
    <v-col cols="12"  class="d-flex justify-space-between ">
        <v-col cols="8" class="  mr-6">
          <!-- //ก็อปตรงนี้ -->
          <v-card
            class="mb-5"
            style="overflow-y: hidden;"
            v-for="zone in zone_data"
            :key="zone.zone"
            color="white"
            :to="{
              path: '/kkudorm',
              query: { dorm_name: zone.aname, dormID: zone.ID },
            }"
          >
            <v-card-actions>
              <div class="d-flex flex-no-wrap justify-space-between">
                
                 
                <div>
                  <div >
                    <div ><v-img style=""
                    v-if="zone.image_urls !== null"
                    :src="zone.image_urls[0]"
                   
                  ></v-img> </div>
                    <v-row class="d-flex justify-space-between pa-4" >
                    <v-col cols="9">
                      <span class="text-h5" style="color: #eb6e44">
                        {{ zone.aname }}
                      </span>
                    </v-col>
                    <v-col cols="3" class="d-flex justify-end ">
                      <span class="namezone">
                        {{ zone.zone }}
                      </span>
                    </v-col>
                  </v-row>
                  </div>
                  <v-col class="pa-4">ที่อยู่ {{ zone.detail }} </v-col>
                  <v-col class="text-h6 textbg pa-4">ราคา {{ zone.price }}</v-col>
                  
                  <v-col class="pa-4">สิ่งอำนวยความสะดวก</v-col>
                  <div class="d-flex">
                    <v-row class="pa-4">
                      
                      <v-col cols="3" v-for="item in zone.far" :key="item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle-fill mr-2" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg><v-subtitle>{{
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
        <v-col cols="4" width="100" color="green" class="pa-2 ma-1 mr-6" > 
          <v-card color="white"> 
            <v-card-title style="font-weight: bold"
              >หอพักใหม่ล่าสุด</v-card-title
            >
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
          </v-card>
        </v-col>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  data() {
    return {
      name_zone: "",
      id_zone: "",
      zone_data: [{ image_urls: [""] }],
      loading: false,
      new_data: [{ image_urls: [""] }],
    };
  },
  async created() {
    this.name_zone = this.$route.query.name_zone;
    this.id_zone = this.$route.query.id_zone;
    this.zone_data = await this.$kkudormAPI.getZoneByID(this.id_zone);
    this.new_data = await this.$kkudormAPI.getNew();
    // this.zone_data.image_urls = this.zone_data.image_urls[0]
    this.loading = true;
  },
  methods: {
    test(x) {
      return x[0];
    },
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
  width: 100%;
}
</style>
