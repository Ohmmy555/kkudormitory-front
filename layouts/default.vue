<template>
  <v-app dark>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-toolbar-title class="mr-5">{{ title }}</v-toolbar-title>
      <!-- <v-spacer /> -->
      <v-list nav v-for="item in items" :key="item">
        <v-list-item :to="item.to" :value="item.title">{{
          item.title
        }}</v-list-item>
      </v-list>
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
      items: [
        {
          // icon: 'mdi-apps',
          title: "หน้าหลัก",
          to: "/test1",
        },
        {
          // icon: 'mdi-chart-bubble',
          title: "หอพักทั้งหมด",
          to: "/test2",
        },
        {
          // icon: 'mdi-chart-bubble',
          title: "โซนหลังมอ",
          to: "/test3",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "KKU Dorm",
    };
  },
};
</script>
