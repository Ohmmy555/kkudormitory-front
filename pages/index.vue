<template>
  <!-- <v-btn @click="callAPI" color="success">Click</v-btn>
     -->
  <!-- <v-col v-for="zone in zones" :key="zone.name">
      <v-card loading title="Card title" subtitle="Subtitle" text="...">{{
        zone.name
      }}</v-card>
    </v-col> -->
  <div v-show="loading">
    <v-row justify="center" align="center" style="background-color: #f9f8f6">
      <img src="~/assets/baner.jpg" class="banner" alt="" />
      <div class="overlay">
        <div class="titleweb"> 
          
            สวัสดีทุก ๆ ท่าน ยินดีต้อนรับเข้าสู่เว็บไซต์หอพักของเรา
          <br /> 
          <div>เว็บไซต์ของเรายินดีให้บริการทุกท่านครับ</div>  
        </div> 
      </div>
      <v-container class="overlay-card "> 
        <v-card v-for="zone in zones" :key="zone.name"> 
          <v-card-item> 
            <v-card-title class="colorzone">{{ zone.name_zone }}</v-card-title> 
          </v-card-item>
          <v-container>
            <v-row>
              <v-col v-for="item in zone.items" :key="item" cols="3">
                <v-card
                  
                  style=" max-height: 22rem; min-height: 22rem; border-radius: 20px"
                  :to="{ 
                    path: '/kkudorm', 
                    query: { dorm_name: item.dorm_name, dormID: item.dormID }, 
                  }" 
                > 
                <div class=" detail">
                  <div  style=" height: 17rem;">
                    <v-img :src="item.image_urls[0]" height="200px" cover style=" color: #6a515e; border-top-right-radius: 20px; border-top-left-radius: 20px;"></v-img>
                  <div class="pa-4 text-h6">{{
                    item.dorm_name
                  }}</div>
                  </div>
                 
                    <div class=" d-flex pa-5" style=" height: 5rem; align-items: end; font-size: 1.2rem; color: #a18a96;">ราคา {{
                    item.month_price
                  }} บาท</div>

                </div>
                  
                  
                </v-card>
              </v-col>
              <v-col cols="3">
                <v-card
                style=" max-height: 22rem; min-height: 22rem; border-radius: 20px; display: flex; align-items: center; justify-content: center;"
                  :to="{
                    path: '/zone',
                    query: { name_zone: zone.name_zone, id_zone: zone.id_zone },
                  }"
                >
                  <!-- <v-img :src="item.image_urls[0]" height="200px" cover></v-img> -->
                  <v-card-title class="overlayimg"><svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" fill="gray" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg></v-card-title>
                </v-card>
              
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-container>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "IndexPage", 
  data() { 
    return { 
      property: "value", 
      loading: false, 
      zones: [ 
        { 
          name: "dummy", 
          items: [], 
        }, 
      ], 
    }; 
  }, 
  async created() { 
    await this.callAPI(); 
    this.loading = true; 
  },
  methods: { 
    async callAPI() { 
      this.zones = await this.$kkudormAPI.getAll(); 
    },
  },
};
</script>
<style>
.banner {
  height: 70vh;
  width: 150%;
  object-fit: cover;
  position: relative;
}
.carddorm {
  background-color: brown;
  width: 100%;
}
.colorzone {
  background-color: #fff3cd;
  color: #664d03;
}
.title {
  font-size: 12px;
}
.overlay-card {
  position: absolute;
  margin-top: 320%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.overlay {
  position: absolute;
  margin: auto;
  /* top: 0;
  left: 50%; */
  width: 50%;
  height: 30vh;
  border-radius: 10px;
  background-color: rgba(186, 186, 186, 0.5);
  z-index: 1;
  text-align: center;
}

.titleweb {
  align-items: center;
  justify-content: center;
  margin: 4rem;
  font-size: 26px;
  color: white;
}
.title {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.detail{
  align-content: space-between;
}
.colo{
  color: white;
}
/* .overlayimg {
  position: absolute;
  top: 90%;
  left: 0;
  right: 0;
  z-index: 2;
  height: 50%;
  border-radius: 20px;
  background-color: white;
  color: rgb(52, 52, 52);
  padding: 20px;
  margin: 10;
} */
/* .card-title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(150, 150, 150);
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  } */
</style>
