<template>
  <div id="app">
    <AppInfoDrawer />
    <GrapeBgDownloader />
  </div>
</template>

<script>
import GrapeBgDownloader from "./components/GrapeBgDownloader";
import AppInfoDrawer from "./components/AppInfoDrawer"

export default {
  name: "app",
  components: {
    AppInfoDrawer,
    GrapeBgDownloader
  }
};
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
