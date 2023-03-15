<template>
  <div>
    <h1>Edit Dormitory</h1>
    <form @submit.prevent="saveChanges">
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
      <button type="submit">Save Changes</button>
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
      monthPrice: 0,
    };
  },
  async created() {
    this.getDormitory();
  },
  methods: {
    async getDormitory() {
      const response = await this.$kkudormAPI.getDormitory(this.$route.params.id);
      this.dormName = response.data.dormName;
      this.address = response.data.address;
      this.zoneID = response.data.zoneID;
      this.monthPrice = response.data.monthPrice;
    },
    async saveChanges() {
      const updatedDorm = {
        dormID: this.$route.params.id,
        dormName: this.dormName,
        address: this.address,
        zoneID: this.zoneID,
        monthPrice: this.monthPrice,
      };
      await this.$kkudormAPI.updateDormitory(updatedDorm);
      this.$router.push("/admin");
    },
    // async callAPI() {
    //   this.content = await this.$kkudormAPI.getSearch();

    // },
    // async created() {
    //     this.search = this.$route.query.query;
    //     this.content = await this.$kkudormAPI.getSearch(this.search);
    // }

  },
};
</script>

<style>
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
  }

  label {
    font-size: 18px;
    margin-bottom: 10px;
  }

  input[type="text"],
  input[type="number"] {
    font-size: 16px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  button[type="submit"] {
    background-color: #007bff;
    color: #fff;
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button[type="submit"]:hover {
    background-color: #0062cc;
  }
</style>
