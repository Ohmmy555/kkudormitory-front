
<template>
  <div>
    <div class="container-fulid">
      <div class="row flex-nowrap mx-10">
        <div class="col-11 col-md-9 col-xl-11 px-sm-2 px-0 mt-5 mx-5">
          <div class="d-flex justify-content-between">
            <div>
              <h3>รายละเอียดหอพัก</h3>
              <nuxt-link :to="`/admin/insert`">
                <button class="btn btn-success">เพิ่มข้อมูลหอพัก</button>
              </nuxt-link>
              <br />
            </div>
          </div>
          <div class="mt-3">
            <b-table-simple hover class="table table-bordered">
              <b-thead head-variant="dark">
                <b-tr>
                  <b-th>ชื่อหอพัก</b-th>
                  <b-th>ที่อยู่</b-th>
                  <b-th>โซน</b-th>
                  <b-th>ราคา</b-th>
                  <b-th></b-th>
                  <b-th></b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="element in data.content" :key="element._id">
                  <b-td>{{ element.dorm_name }}</b-td>
                  <b-td>{{ element.address }}</b-td>
                  <b-td>{{ element.zonenamethai }}</b-td>
                  <b-td>{{ element.month_price }}</b-td>
                  <b-td>
                    <router-link :to="`/admin/edit/${element.dormID}`">
                      <button
                        class="btn btn-primary"
                        :to="`/admin/edit/${element.dormID}`"
                      >
                        แก้ไข
                      </button>
                    </router-link>
                  </b-td>
                  <b-td>
                    <button
                      class="btn btn-danger"
                      @click="deleteItem(element.dormID)"
                    >
                      ลบ
                    </button>
                  </b-td>
                </b-tr>
              </b-tbody>
            </b-table-simple>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item" :class="{ disabled: currentPage === 1 }">
                  <a
                    class="page-link"
                    href="#"
                    aria-label="Previous"
                    @click.prevent="currentPage = currentPage - 1"
                  >
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li
                  v-for="page in pages"
                  :key="page"
                  class="page-item"
                  :class="{ active: currentPage === page }"
                >
                  <a
                    class="page-link"
                    href="#"
                    @click.prevent="currentPage = page"
                    >{{ page }}</a
                  >
                </li>
                <li
                  class="page-item"
                  :class="{ disabled: currentPage === pages.length }"
                >
                  <a
                    class="page-link"
                    href="#"
                    aria-label="Next"
                    @click.prevent="currentPage = currentPage + 1"
                  >
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
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
  modules: [
  '@nuxtjs/toast'
],
toast: {
  position: 'top-right',
  duration: 3000
},
  data() {
    return {
      data: [],
      currentPage: 1,
      itemsPerPage: 10,
      searchText: "",
    };
  },
  computed: {
    pages() {
      if (this.data.length === 0) {
        return [];
      }
      const pageCount = Math.ceil(this.data.length / this.itemsPerPage);
      const pageArray = [];
      for (let i = 1; i <= pageCount; i++) {
        pageArray.push(i);
      }
      return pageArray;
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.data.slice(startIndex, endIndex);
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8880/api/admin"
        );
        this.data = response.data;
        console.log(this.data);
      } catch (error) {
        console.log(error);
      }
    },
    async deleteItem(itemId) {
  if (window.confirm('Are you sure you want to delete this item?')) {
    try {
      // Call API to delete item
      await this.$kkudormAPI.deleteDorm(itemId);
      this.fetchData();
      // Show success message
      if (this.$toast && this.$toast.success) {
        this.$toast.success('Item deleted successfully');
      }
    } catch (error) {
      console.error(error);
      // Show error message
      if (this.$toast && this.$toast.error) {
        this.$toast.error('An error occurred while deleting the item');
      }
    }
  }
}
  },
  mounted() {
    this.fetchData();
  },

};
</script>

<style>
.but-edit {
  text-decoration: none;
  color: white;
}
</style>
