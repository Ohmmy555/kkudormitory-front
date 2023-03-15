<template>
  <v-container v-show="dorm_data != null">

    <v-row >
      <div cols="12" class="d-flex justify-space-between pa-2 ma-2 mr-6" >
      <v-col cols="8" width="100"  >
        <v-card >
        <div class="text-h5 pa-5 ">{{dorm_name}}</div>
        <img :src="select" alt="" class="image-braner pa-4 " />
        <v-col cols="12" class="show_images d-flex justify-start">
          <img
            v-for="item in dorm_data.img"
            :key="item"
            :src="item.image_name"
            class="small-image "
            alt=""
            @click="select=item.image_name"
          />
        </v-col>
        <v-col cols="12"> ช่องทางติดต่อ </v-col>
        <v-row class="pl-4">
          <v-col 
            cols="6"
            v-for="contact in dorm_data.contact"
            :key="contact.contact_type"
          >
            {{ contact.contact_type }} : {{ contact.value }}
          </v-col>
        </v-row>
        <v-col cols="12"> รายละเอียด </v-col>
        <v-row class="pl-4">
          <v-col cols="5">รายละเอียดเกี่ยวกับ {{ dorm_name }}</v-col>
          <v-col cols="12" class="details-blog">
            <v-row>
              <v-col  style="border-bottom: 1px solid lightgray"  cols="5">รายเดือน</v-col>
              <v-col style="border-bottom: 1px solid lightgray"  cols="6 d-flex justify-end" class="pr-10"
                >{{ dorm_data.dorm.month_price }} บาท</v-col
              >
              <v-col style="border-bottom: 1px solid lightgray"  cols="5">รายวัน</v-col>
              <v-col style="border-bottom: 1px solid lightgray"  cols="6 d-flex justify-end" class="pr-10"
                >{{ dorm_data.dorm.daliy_price }} บาท</v-col
              >
              <v-col style="border-bottom: 1px solid lightgray"  cols="5">ค่าน้ำ</v-col>
              <v-col style="border-bottom: 1px solid lightgray"  cols="6 d-flex justify-end" class="pr-10"
                >{{ dorm_data.dorm.water_fee_price }} บาท</v-col
              >
              <v-col style="border-bottom: 1px solid lightgray"  cols="5">ค่าไฟ</v-col>
              <v-col style="border-bottom: 1px solid lightgray"  cols="6 d-flex justify-end" class="pr-10"
                >{{ dorm_data.dorm.eletric_fee_price }} บาท</v-col
              >
              <v-col style="border-bottom: 1px solid lightgray"  cols="5">ค่าส่วนกลาง</v-col>
              <v-col style="border-bottom: 1px solid lightgray"  cols="6 d-flex justify-end" class="pr-10"
                >{{ dorm_data.dorm.central_fee_price }} บาท</v-col
              >
              <v-col style="border-bottom: 1px solid lightgray"  cols="5">ค่าประกัน</v-col>
              <v-col style="border-bottom: 1px solid lightgray"  cols="6 d-flex justify-end" class="pr-10"
                >{{ dorm_data.dorm.insurance_price }} บาท</v-col
              >
            </v-row>
          </v-col>
        </v-row >
        <v-col class="mt-10" cols="12" style=""> รูปแบบสัญญา </v-col>
        <v-row class="pa-5">
          <v-col
            cols="4"
            v-for="contract in dorm_data.contract"
            :key="contract.name"
            >{{ contract.name }}</v-col
          >
        </v-row>
        <v-col cols="12"> สิ่งอำนวยความสะดวก </v-col>
        <v-row class="pa-5">
          <v-col cols="3" v-for="fac in dorm_data.fac" :key="fac.fac_name"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-check-circle-fill mr-2" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>{{
            fac.fac_name
          }}</v-col>
        </v-row>
        <v-col cols="12"> กฎหอพัก </v-col>
        <v-row class="pa-5">
          <v-col
            cols="3"
            v-for="rule in dorm_data.rule"
            :key="rule.rule_name"
            ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-x-circle-fill mr-2" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
</svg>{{ rule.rule_name }}</v-col
          >
        </v-row>

        <v-col cols="12"> ที่อยู่หอพัก </v-col>
        <v-row class="pa-5">
          <v-col
            cols="12"
            
            >{{ dorm_data.dorm.address }}</v-col
          >
        </v-row>
        <iframe style="width: 100%; height: 15rem; margin-bottom: 1rem; padding: 20px;" 
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          :src="getIframe()"
        >
        </iframe>
        
      </v-card>
        
      </v-col>
         <v-col cols="4" width="100" color="green" class="pa-2 ma-1 mr-6" > 
          <v-card color="white"> 
            <v-card-title style="font-weight: bold"
              >หอพักใหม่ล่าสุด</v-card-title
            >
            <v-card-text>
              <v-card
                color="white"
                class="mb-3"
                v-for="newx in new_data"
                :key="newx.dormid" 
                
              @click="callDorm(newx.dorm_name,newx.dormID)"
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
                        <v-text
                          class="text"
                          style="color: black; font-size: 18px"
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
         </v-col>
    </div>

    <v-card>
      
    </v-card>
    </v-row>
    
  </v-container>

  
</template>

<script>
export default {
  data() {
    return {
      select:"",
      dormID: String,
      drom_name: String,
      new_data: [{ image_urls: [""] }],
      dorm_data: {
        img: [{ image_name: "" }],
        dorm: {
          address:
            "160/19 ซ.หน้าแฟลตตำรวจ ถ.ศรีมารัตน์12 ในเมือง เมืองขอนแก่น ขอนแก่น 40000",
          month_price: 0,
          water_fee_price: 0,
          central_fee_price: 0,
          insurance_price: 0,
          eletric_fee_price: 0,
          dorm_name: "รมิดาอพาร์ทเมนต์",
          dormid: 1,
          adminid: 1,
          zoneid: 1,
          daliy_price: 0,
          detail:
            "บรรยากาศเงียบสงบ ปลอดภัยอยู่ตรงข้ามแฟลตตำรวจ ถนนกาญจนาภิเษก ข้างมหาวิทยาลัยขอนแก่น อยู่ใกล้ ศูนย์ประชุมกาญจนาภิเษก จุดStartวิ่งมาราธอน โรงเรียนสาธิตศึกษาศาสตร์ โรงพยาบาลกรุงเทพ ตึก True สนามเทนนิสศรีชาพันธ์ุ  เดินทางไป Centralเซ็นทรัล โรงพยาบาลศรีนครินทร์ คณะเภสัช คณะแพทย์ คณะนิติศาสตร์ เดินทางไปยังสนามบินได้สะดวกรวดเร็ว มีระบบป้องกันคนภายนอกด้วยประตูสแกนลายนิ้วมือ พร้อมระบบกล้องวงจรปิด 16 กล้อง ภายในห้องมีอุปกรณือำนวยความสะดวกครบครัน ",
          map: "16.48289732677371,102.81734489945974",
        },
        contract: [
          {
            name: "9 เดือน",
          },
        ],
        fac: [
          {
            fac_name: "แอร์",
            fac_typeid: 1,
            facid: 1,
          },
        ],
        rule: [
          {
            rule_name: "ไม่ให้เลี้ยงสัตว์นะ",
            ruleid: 1,
          },
        ],
      },
      dialog: false,
    };
  },
  async created() {
    this.dorm_name = this.$route.query.dorm_name;
    this.dormID = this.$route.query.dormID;
    this.dorm_data = await this.$kkudormAPI.getDormByID(this.dormID);
    this.select= this.dorm_data.img[0].image_name
    this.new_data = await this.$kkudormAPI.getNew();

  },
  methods: {
    // https://www.google.com/maps/embed?pb=<%=data.map %>
    getIframe() {
      return `https://www.google.com/maps/embed?pb=${this.dorm_data.dorm.map}`;

    },
    callDorm(name,id){
      this.$router.go({path: '/kkudorm',
                query: { dorm_name: name, dormID: id },})
    }
  },
};
</script>

<style>
.image-braner {
  width: 100%;
  object-fit: cover;
}

.small-image {
  overflow: hidden;
  width: 8rem;
  height: 8rem;
  object-fit: cover;
  margin-right: 1rem;
  cursor: pointer;
}

.details-blog {
  
}
</style>
