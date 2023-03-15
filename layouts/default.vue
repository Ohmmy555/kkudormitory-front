<template>
  <v-app dark>
    <v-app-bar color="white" fixed app>
      <v-toolbar-title class="mr-5"  >{{ title }}</v-toolbar-title>
      <!-- <v-spacer /> -->
      
      <v-spacer />
      <v-card class="mx-auto elevation-0" width="300">
        <v-card-text>
          <v-text-field
            color="orange"
            :loading="loading"
            density="compact"
            label="Search "
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            @click:append-inner="onClick"
          ></v-text-field>
        </v-card-text>
      </v-card>
    </v-app-bar>
    <v-main >
        <Nuxt />
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
    <v-footer :absolute="fixed" app  >
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
<style>
.v-list .v-list-item--active {
  padding-bottom: 10px;
  color: orange !important;
}
.v-list-item--active {
  background-color: transparent;
  border: 1px solid #fff;
  border-bottom: 5px solid orange;
}
</style>
