<template>
  <div id="preload">
    <div id="plyr">
      <v-lottie-player name="scooterAnim" loop path="/animation/animate.json" />
    </div>
  </div>
</template>


<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

export default class Preload extends Vue {}
</script>


<style lang="scss" scoped>
#preload {
  overflow: hidden;
}
#preload,
#plyr {
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background: white;
  top: 0rem;
  left: 0rem;
}
#plyr {
  left: 50% !important;
  top: 50% !important;
  transform: translate(-05%, -13%) !important;
}

@media (max-width: 575px) {
  #plyr {
    left: 33% !important;
  }
}
</style>