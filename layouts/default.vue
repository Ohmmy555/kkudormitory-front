<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" color="white" fixed app>
      <v-toolbar-title class="mr-5">{{ title }}</v-toolbar-title>
      <!-- <v-spacer /> -->
      <v-list nav v-for="item in items" :key="item.title">
        <v-list-item :to="item.to" :value="item.title">{{
          item.title
        }}</v-list-item>
      </v-list>
      <v-spacer />
      <v-card class="mx-auto elevation-0" width="600">
        <v-card-text>
          <v-text-field
            color="success"
            :loading="loading"
            density="compact"
            label="Search templates"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light> mdi-repeat </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      loaded: false,
      loading: false,
      items: [
        {
          title: "หน้าหลัก",
          to: "/",
        },
        {
          title: "หอพักทั้งหมด",
          to: "/test1",
        },
        {
          title: "โซนหลังมอ",
          to: "/test2",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "KKU Dorm",
    };
  },
  methods: {
    onClick() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2000);
    },
  },
};
</script>
