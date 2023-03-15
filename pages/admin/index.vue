<template>
    <div>
        <h1>จัดการข้อมูล</h1>
        <v-table fixed-header height="300px">
            <thead>
                <tr>
                    <th>ชื่อหอพัก</th>
                    <th>ที่อยู่</th>
                    <th>โซน</th>
                    <th>ราคา</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in content" :key="c.dormID">
                    <td>{{ c.dormName }}</td>
                    <td>{{ c.address }}</td>
                    <td>{{ c.zoneID }}</td>
                    <td>{{ c.monthPrice }}</td>
                    <td><router-link :to="`/admin/edit/${c.dormID}`">แก้ไข</router-link></td>
                    <td><button @click="deleteDormitory(c.dormID)">ลบ</button></td>
                </tr>
            </tbody>
        </v-table>
        <router-link to="/admin/insert">เพิ่มข้อมูลหอพัก</router-link>
        <form @submit.prevent="searchDormitory">
            <input type="search" >
            <button type="submit">Search</button>
        </form>
    </div>
</template>

<script>
export default {

            data() {
                return {
                    property: "value",
                    content: [
                    ],
                };
            },
            created() {
                this.callAPI();
            },
            methods: {
                async callAPI() {
                    this.content = await this.$kkudormAPI.getAdminMainp1();
                    
                },
            },
        }
    
</script>

<style></style>
  