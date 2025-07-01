<template>
  <div id="app">
    <NavigationBar />
    <router-view />
    <footer-component />
  </div>
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    FooterComponent,
  },
  created: function () {
    console.log("ON-CREATED APP");
    this.$store.dispatch("filmsStore/loadFilms");
  },
};
</script>
 
<style lang="scss">
html,
body {
  height: 100%;
  background-color: #1a1a1a;
}
#app {
  height: -webkit-fill-available;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-family: "Orbitron", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>