<template>
    <div>
      <h1>Delete Dormitory</h1>
      <p>Are you sure you want to delete "{{ dormName }}"?</p>
      <button @click="deleteDormitory">Yes, Delete</button>
      <router-link :to="`/admin`">Cancel</router-link>
    </div>
  </template>
  <script>
  export default {
    layout: "empty",
    data() {
      return {
        dormID: this.$route.query.dormID,
        dormName: "",
      };
    },
    async created() {
      this.dormName = await this.getDormName();
    },
    methods: {
      async getDormName() {
        const response = await this.$kkudormAPI.getDormitory(this.dormID);
        return response.dormName;
      },
      async deleteDormitory() {
        const response = await this.$kkudormAPI.deleteDormitory(this.dormID);
        if (response.status === "success") {
          this.$router.push("/admin");
        } else {
          alert("Failed to delete dormitory");
        }
      },
    },
  };
  </script>
  <style>
  /* Style the page title */
  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 2rem;
    color: #333;
  }
  
  /* Style the "Yes, Delete" button */
  button {
    background-color: #f44336;
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin-right: 0.5rem;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #da190b;
  }
  
  /* Style the "Cancel" button */
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
  
  /* Style the confirmation message */
  p {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    color: #333;
  }
  </style>