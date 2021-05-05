<template>
  <div id="app">
    <HeaderBase />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeaderBase from "@/components/header.vue";

@Component({
  name: "app",
  components: {
    HeaderBase,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
  font-weight: 500;
}
</style>
