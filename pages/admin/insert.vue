<template>
    <div class="col-15 col-md-11 col-xl-15 mt-5 mx-15">
        <div class="row">
                    <h3 class="alert alert-success" style="width:100%;">เพิ่มข้อมูลหอพัก</h3>
                    <form @submit.prevent="handleSubmit">
                        <div class="row">
                            <div class="col-xl-6">
                                <div class="mb-3">
                                    <label for="name" class="form-label">ชื่อหอพัก</label>
                                    <input type="text" v-model="nameDorm" class="form-control" id="name"
                                        placeholder="ตัวอย่าง หอใส่ใจใส่ไข่สองฟอง" required>
                                </div>
                                <div class="mb-3">
                                    <label for="description" class="form-label">คำอธิบาย</label>
                                    <textarea v-model="description" name="description" class="form-control" id="description"
                                        rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="address" class="form-label">ที่อยู่</label>
                                    <textarea v-model="address" name="address" class="form-control" id="address"
                                        rows="3"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="price" class="form-label">ราคา</label>
                                    <input type="number" v-model="price" name="price" class="form-control" id="price"
                                        placeholder="ระบุราคา" required>
                                </div>
                                <div class="row ">
                                    <label for="exampleFormControlInput1" class="form-label">ชื่อที่อยู่</label>
                                    <div class="col-xl-3 mb-3">
                                        <input type="text" v-model="address_number" class="form-control"
                                            id="exampleFormControlInput1" placeholder="เลขที่" required>
                                    </div>
                                    <div class="col-xl-3 mb-3">
                                        <input type="text" v-model="address_novillage" class="form-control"
                                            id="exampleFormControlInput1" placeholder="หมู่ที่/ซอย">
                                    </div>
                                    <div class="col-xl-3 mb-3">
                                        <input type="text" v-model="address_namevillage" class="form-control"
                                            id="exampleFormControlInput1" placeholder="ชื่อหมู่บ้าน/ถนน">
                                    </div>
                                    <div class="col-xl-3 mb-3">
                                        <input type="text" v-model="address_subdistrict" class="form-control"
                                            id="exampleFormControlInput1" placeholder="ตำบล" required>
                                    </div>
                                    <div class="col-xl-3 mb-3">
                                        <input type="text" v-model="address_district" class="form-control"
                                            id="exampleFormControlInput1" placeholder="อำเภอ" required>
                                    </div>
                                    <div class="col-xl-3 mb-3">
                                        <input type="text" v-model="address_province" class="form-control"
                                            id="exampleFormControlInput1" placeholder="จังหวัด" required>
                                    </div>
                                    <div class="col-xl-3 mb-3">
                                        <input type="text" v-model="address_zipcode" class="form-control"
                                            id="exampleFormControlInput1" placeholder="รหัสไปรษณีย์" required>
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">ช่องทางการติดต่อ</label>
                                    <div class="col-xl-6">
                                        <input type="text" v-model="contacts_phone1" class="form-control"
                                            id="exampleFormControlInput1" placeholder="เบอร์โทรศัพท์หมายเลขที่ 1">
                                    </div>
                                    <div class="col-xl-6">
                                        <input type="text" v-model="contacts_phone2" class="form-control"
                                            id="exampleFormControlInput1" placeholder="เบอร์โทรศัพท์หมายเลขที่ 2">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-xl-6">
                                        <input type="text" v-model="contacts_email" class="form-control"
                                            id="exampleFormControlInput1" placeholder="Email">
                                    </div>
                                    <div class="col-xl-6">
                                        <input type="text" v-model="contacts_facebook" class="form-control"
                                            id="exampleFormControlInput1" placeholder="Facebook">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-xl-6">
                                        <input type="text" v-model="contacts_line" class="form-control"
                                            id="exampleFormControlInput1" placeholder="Line">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="exampleFormControlInput1"
                                        class="form-label">สิ่งอำนวยความสะดวกในห้อง</label>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="air" value="air"
                                            id="flexCheckDefault">
                                        แอร์
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="elevator" value="elevator"
                                            id="flexCheckDefault">
                                        ลิฟต์
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="wifi" value="wifi"
                                            id="flexCheckDefault">
                                        Wifi
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="tv" value="tv"
                                            id="flexCheckDefault">
                                        มี TV
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="water_heater"
                                            value="water_heater" id="flexCheckDefault">
                                        เครื่องทำน้ำอุ่น
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="keycard" value="keycard"
                                            id="flexCheckDefault">
                                        คีย์การ์ด
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="fan" value="fan"
                                            id="flexCheckDefault">
                                        พัดลม
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="wardrobe" value="wardrobe"
                                            id="flexCheckDefault">
                                        ตู้เสื้อผ้า
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="single_bed" value="single_bed"
                                            id="flexCheckDefault">
                                        เตียงเดี่ยว
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="double_bed" value="double_bed"
                                            id="flexCheckDefault">
                                        เตียงคู่
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <label for="exampleFormControlInput1"
                                        class="form-label">สิ่งอำนวยความสะดวกส่วนกลาง</label>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="parking" value="parking"
                                            id="flexCheckDefault">
                                        ที่จอดรถ
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="gym" value="gym"
                                            id="flexCheckDefault">
                                        โรงยิม/ฟิตเนส
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="cctv" value="cctv"
                                            id="flexCheckDefault">
                                        กล้องวงจรปิด
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="public_wifi"
                                            value="public_wifi" id="flexCheckDefault">
                                        Wifi ส่วนกลาง
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="laundry" value="laundry"
                                            id="flexCheckDefault">
                                        ร้านซัก-รีดักผ้า
                                    </div>

                                </div>
                                <div class="row mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">กฏหอพัก</label>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="pet" value="pet"
                                            id="flexCheckDefault">
                                        ห้ามเลี้ยงสัตว์
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="smoking" value="smoking"
                                            id="flexCheckDefault">
                                        ห้ามสูบบูหรี่
                                    </div>
                                </div>

                                <div class="row mb-3">
                                    <div class="col-xl-12 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">โซนหอพัก</label>
                                        <select class="form-select" v-model="zone" aria-label="Default select example"
                                            required>
                                            <option value="" disabled selected>เลือกโซนหอพัก</option>
                                            <option value="หลังมอ">หลังมอ</option>
                                            <option value="กังสดาล">กังสดาล</option>
                                            <option value="โคลัมโบ">โคลัมโบ</option>
                                            <option value="เมือง">เมือง</option>
                                            <option value="โน่นม่วง">โน่นม่วง</option>
                                        </select>
                                    </div>
                                    <div class="col-xl-12 mb-3">
                                        <label for="exampleFormControlInput1" class="form-label">รายละเอียดหอพัก</label>
                                        <textarea class="form-control" v-model="dorm_detail" id="exampleFormControlTextarea1"
                                            rows="5"></textarea>
                                    </div>
                                    <div class="col-xl-12">
                                        <label for="exampleFormControlInput1" class="form-label">Google map</label>
                                        <input type="text" class="form-control" v-model="googlemap"
                                            id="exampleFormControlTextarea1" rows="1"
                                            placeholder="ตัวอย่างเอามาจาก embed Google map : !1m18!1m12!1m3!1d15305.110166216142!2d102.8151889824985!3d16.4614784191227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228b959372245d%3A0x724747576857b42d!2sThe%20Room%20Residence%20KKU!5e0!3m2!1sth!2sth!4v1663829208925!5m2!1sth!2sth">
                                    </div>
                                </div>


                            </div>

                            <div class="col-xl-6">
                                <div class="row mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">ราคา
                                        (ไม่ประสงค์ลงราคาส่วนไหนให้กรอก
                                        โทรสอบถาม)</label>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="monthly" id="exampleFormControlInput1"
                                            placeholder="ราคาต่อเดือนเช่น 3,000-3,500">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="daily" id="exampleFormControlInput1"
                                            placeholder="ราคารายวัน">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="waterFee"
                                            id="exampleFormControlInput1" placeholder="ราคาค่าน้ำต่อยูนิต">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="electricFee"
                                            id="exampleFormControlInput1" placeholder="ราคาค่าไฟต่อยูนิต">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="centralFee"
                                            id="exampleFormControlInput1" placeholder="ราคาค่าส่วนกลาง">
                                    </div>
                                    <div class="col-xl-6">
                                        <input type="text" class="form-control" v-model="insurance"
                                            id="exampleFormControlInput1" placeholder="ราคาค่ามัดจำ">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <div class="col-xl-12">
                                        <label for="exampleFormControlInput1" class="form-label">รูปแบบสัญญา</label>
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="three_month" value="3 เดือน"
                                            id="flexCheckDefault">
                                        3 เดือน
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="six_month" value="6 เดือน"
                                            id="flexCheckDefault">
                                        6 เดือน
                                    </div>
                                    <div class="col-xl-3">
                                        <input class="form-check-input" type="checkbox" v-model="one_year" value="1 ปี"
                                            id="flexCheckDefault">
                                        1 ปี
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">สถานศึกษาใกล้เคียง (ตัวอย่าง
                                        500 เมตร
                                        หรือ 1.2 กม.)</label>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_edu_name1"
                                            id="exampleFormControlInput1" placeholder="ชื่อ">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_edu_distance1"
                                            id="exampleFormControlInput1" placeholder="ระยะทาง">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_edu_name2"
                                            id="exampleFormControlInput1" placeholder="ชื่อ">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_edu_distance2"
                                            id="exampleFormControlInput1" placeholder="ระยะทาง">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_edu_name3"
                                            id="exampleFormControlInput1" placeholder="ชื่อ">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_edu_distance3"
                                            id="exampleFormControlInput1" placeholder="ระยะทาง">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">ถนนใกล้เคียง</label>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_road_name1"
                                            id="exampleFormControlInput1" placeholder="ชื่อ">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_road_distance1"
                                            id="exampleFormControlInput1" placeholder="ระยะทาง">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_road_name2"
                                            id="exampleFormControlInput1" placeholder="ชื่อ">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_road_distance2"
                                            id="exampleFormControlInput1" placeholder="ระยะทาง">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_road_name3"
                                            id="exampleFormControlInput1" placeholder="ชื่อ">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_road_distance3"
                                            id="exampleFormControlInput1" placeholder="ระยะทาง">
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="exampleFormControlTextarea1"
                                        class="form-label">ร้านสะดวกซื้อ/ห้งสรรพสินค้าใกล้เคียง</label>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_store_name1"
                                            id="exampleFormControlInput1" placeholder="ชื่อ">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_store_distance1"
                                            id="exampleFormControlInput1" placeholder="ระยะทาง">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_store_name2"
                                            id="exampleFormControlInput1" placeholder="ชื่อ">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_store_distance2"
                                            id="exampleFormControlInput1" placeholder="ระยะทาง">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_store_name3"
                                            id="exampleFormControlInput1" placeholder="ชื่อ">
                                    </div>
                                    <div class="col-xl-6 mb-3">
                                        <input type="text" class="form-control" v-model="nearby_store_distance3"
                                            id="exampleFormControlInput1" placeholder="ระยะทาง">
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label for="formFile" class="form-label">อัปโหลดไฟล์ (.png)</label>
                                    <input class="form-control" type="file" name="image" id="formFile" multiple>
                                </div>

                            </div>

                        </div>
                        <button type="submit" class="btn btn-primary">เพิ่มข้อมูล</button>
                    </form>
        </div>
    </div>
</template>
  
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
<script>
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";
import { TablePlugin } from "bootstrap-vue";
Vue.use(TablePlugin);
export default {
    data() {
        return {
            nameDorm: '',
            description: '',
            address: '',
            price: '',
            address_number: '',
            address_novillage: '',
            address_namevillage: '',
            address_subdistrict: '',
            address_district: '',
            address_province: '',
            address_zipcode: '',
            contacts_phone1: '',
            contacts_phone2: '',
            contacts_email: '',
            contacts_facebook: '',
            contacts_line: '',

            air: '',
            elevator: '',
            wifi: '',
            tv: '',
            water_heater: '',
            keycard: '',
            fan: '',
            wardrobe: '',
            single_bed: '',
            double_bed: '',

            parking: '',
            gym: '',
            cctv: '',
            public_wifi: '',
            laundry: '',
            pet: '',
            smoking: '',

            zone: '',
            dorm_detail: '',
            googlemap: '',

            monthly: '',
            daily: '',
            waterFee: '',
            electricFee: '',
            centralFee: '',
            insurance: '',

            three_month: '',
            six_month: '',
            one_year: '',

            nearby_edu_name1: '',
            nearby_edu_distance1: '',
            nearby_edu_name2: '',
            nearby_edu_distance2: '',
            nearby_edu_name3: '',
            nearby_edu_distance3: '',

            nearby_road_name1: '',
            nearby_road_distance1: '',
            nearby_road_name2: '',
            nearby_road_distance2: '',
            nearby_road_name3: '',
            nearby_road_distance3: '',

            nearby_store_name1: '',
            nearby_store_distance1: '',
            nearby_store_name2: '',
            nearby_store_distance2: '',
            nearby_store_name3: '',
            nearby_store_distance3: '',
            image: '',
            formData: null 
            }
    },
    methods: {
        async handleSubmit() {
            const formData = new FormData()
      formData.append('name', this.nameDorm)
      formData.append('description', this.description)
      formData.append('address', this.address)
      formData.append('price', this.price)
      formData.append('image', this.image)
            try {
        const response = await axios.post('127.0.0.1:8880/api/admin/test', "test")
        console.log(response.data)
      } catch (error) {
        console.error(error)
      }
    console.log(formData);
        }
        
    }
}
</script>
  