<template>
    <div>
        <h1>เพิ่มข้อมูลหอพัก</h1>
        <form @submit.prevent="insertDormitory">
            <label>
                Dormitory Name:
                <input type="text" v-model="dormName" />
            </label>
            <label>
                Address:
                <input type="text" v-model="address" />
            </label>
            <label>
                Zone:
                <input type="text" v-model="zoneID" />
            </label>
            <label>
                Monthly Price:
                <input type="number" v-model="monthPrice" />
            </label>
            <button type="submit">เพิ่ม</button>
        </form>
    </div>
</template>
<script>
export default {
    layout: "empty",
    data() {
        return {
            dormName: "",
            address: "",
            zoneID: "",
            monthPrice: "",
        };
    },
    methods: {
        async insertDormitory() {
            const data = {
                dormName: this.dormName,
                address: this.address,
                zoneID: this.zoneID,
                monthPrice: this.monthPrice,
            };

            try {
                await this.$kkudormAPI.postAdminMainp1(data);
                this.$router.push("/admin");
            } catch (error) {
                console.log(error);
            }
        },
    },
}
</script>


