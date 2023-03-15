<template>
  <v-container v-show="dorm_data != null">

    <v-row class="d-flex justify-space-between pa-2 ma-2 mr-6">
      <v-col cols="8" width="100"   style="background-color: aqua;">
        <v-title class="text-h5">{{dorm_name}}</v-title>
        <img :src="dorm_data.img[0].image_name" alt="" class="image-braner" />
        <v-col cols="12" class="show_images d-flex justify-start">
          <img
            v-for="item in dorm_data.img"
            :key="item"
            :src="item.image_name"
            class="small-image"
            alt=""
          />
        </v-col>
        <v-col cols="12"> ช่องทางติดต่อ </v-col>
        <v-row>
          <v-col
            cols="6"
            v-for="contact in dorm_data.contact"
            :key="contact.contact_type"
          >
            {{ contact.contact_type }} : {{ contact.value }}
          </v-col>
        </v-row>
        <v-col cols="12"> รายละเอียด </v-col>
        <v-row>
          <v-col cols="5">รายละเอียดเกี่ยวกับ {{ dorm_name }}</v-col>
          <v-col cols="7" class="details-blog">
            <v-row>
              <v-col cols="6">รายเดือน</v-col>
              <v-col cols="6 d-flex justify-end"
                >{{ dorm_data.dorm.month_price }} บาท</v-col
              >
              <v-col cols="6">รายวัน</v-col>
              <v-col cols="6 d-flex justify-end"
                >{{ dorm_data.dorm.daliy_price }} บาท</v-col
              >
              <v-col cols="6">ค่าน้ำ</v-col>
              <v-col cols="6 d-flex justify-end"
                >{{ dorm_data.dorm.water_fee_price }} บาท</v-col
              >
              <v-col cols="6">ค่าไฟ</v-col>
              <v-col cols="6 d-flex justify-end"
                >{{ dorm_data.dorm.eletric_fee_price }} บาท</v-col
              >
              <v-col cols="6">ค่าส่วนกลาง</v-col>
              <v-col cols="6 d-flex justify-end"
                >{{ dorm_data.dorm.central_fee_price }} บาท</v-col
              >
              <v-col cols="6">ค่าประกัน</v-col>
              <v-col cols="6 d-flex justify-end"
                >{{ dorm_data.dorm.insurance_price }} บาท</v-col
              >
            </v-row>
          </v-col>
        </v-row>
        <v-col cols="12" style="background-color: red;"> รูปแบบสัญญา </v-col>
        <v-row>
          <v-col
            cols="4"
            v-for="contract in dorm_data.contract"
            :key="contract.name"
            >{{ contract.name }}</v-col
          >
        </v-row>
        <v-col cols="12"> สิ่งอำนวยความสะดวก </v-col>
        <v-row>
          <v-col cols="3" v-for="fac in dorm_data.fac" :key="fac.fac_name">{{
            fac.fac_name
          }}</v-col>
        </v-row>
        <v-col cols="12"> กฎหอพัก </v-col>
        <v-row>
          <v-col
            cols="3"
            v-for="rule in dorm_data.rule"
            :key="rule.rule_name"
            >{{ rule.rule_name }}</v-col
          >
        </v-row>
        <v-col cols="12"> ที่อยู่หอพัก </v-col>
        <v-row>
          <v-col
            cols="3"
            v-for="dorm in dorm_data.dorm" :key="dorm.address"
            >{{ dorm.address }}</v-col
          >
        </v-row>
        <iframe
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          :src="getIframe()"
        >
        </iframe>
      </v-col>
      <v-col cols="3" width="100" color="green" style="background-color: burlywood;"> ddddddd </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dormID: String,
      drom_name: String,
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
  },
  methods: {
    // https://www.google.com/maps/embed?pb=<%=data.map %>
    getIframe() {
      return `https://www.google.com/maps/embed?pb=${this.dorm_data.dorm.map}`;
    },
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
}

.details-blog {
  border-radius: 1rem;
  background-color: blue;
}
</style>
