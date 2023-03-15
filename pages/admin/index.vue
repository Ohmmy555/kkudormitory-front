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
                    <td><router-link :to="`/editDorm?${c.dormID}`">แก้ไข</router-link>
                    </td>
                    <td><button @click="deleteDormitory(c.dormID)">ลบ</button></td>
                </tr>
            </tbody>
        </v-table>
        <router-link to="/admin/insert">เพิ่มข้อมูลหอพัก</router-link>
        <form @submit.prevent="searchDormitory">
            <input type="search">
            <button type="submit">Search</button>
        </form>
    </div>
</template>

<script>
export default {
    layout: "empty",
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

<style>
/* Center the table and form */
div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem;
}

/* Style the table header */
th {
    background-color: #f2f2f2;
    font-weight: bold;
    padding: 1rem;
    text-align: center;
}

/* Style the table rows */
tr {
    border-bottom: 1px solid #ddd;
    text-align: center;
}

/* Style the "Edit" and "Delete" buttons */
button {
    background-color: #f44336;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #da190b;
}

/* Style the "Search" button */
form button[type="submit"] {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin-left: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

form button[type="submit"]:hover {
    background-color: #3e8e41;
}

/* Style the search input */
form input[type="search"] {
    padding: 0.5rem;
    margin-right: 0.5rem;
    border: none;
    border-radius: 4px;
    box-shadow: none;
    font-size: 16px;
    width: 15rem;
}

/* Style the "Add Dormitory" button */
router-link {
    display: inline-block;
    background-color: #008CBA;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

router-link:hover {
    background-color: #006080;
}

/* Style the page title */
h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #333;
}
</style>

  