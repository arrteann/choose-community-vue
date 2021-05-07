<template>
  <div id="app">
    <Preload v-if="preload" />
    <HeaderBase />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import HeaderBase from "@/components/header.vue";
import Preload from "@/components/preload.vue";
@Component({
  name: "app",
  components: {
    HeaderBase,
    Preload,
  },
})
export default class App extends Vue {
  preload?: boolean = true;
  mounted() {
    setTimeout(() => {
      this.preload = !this.preload;
    }, 1200);
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Montserrat";
  font-weight: 500;
}
body {
  background-color: #f1f1f1;
  overflow-x: hidden;
}

// GRID
.row {
  display: grid;
  align-content: center;
  align-items: center;
}
.col-1 {
  grid-template-columns: 1fr;
}
.col-2 {
  grid-template-columns: repeat(2, 1fr);
}
.col-5 {
  grid-template-columns: repeat(5, 1fr);
}
.gap-1 {
  gap: 1.5rem;
}

.container {
  width: 90%;
  margin: 2rem auto 0rem;
}


.display-bold {
  font-weight: 800;
  font-size: 2.5rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: #4d4d4d;
}
.display-column {
  display: flex;
  flex-direction: column;
  color: #333;
  &__title {
    text-transform: uppercase;
    font-size: 1.2rem;
  }

  &__description {
    font-size: 0.7rem;
    text-align: justify;
    margin-top: 0.3rem;
    margin-bottom: 0.9rem;
    padding: 0rem 0.8rem 0rem 0rem;
    text-transform: uppercase;
    color: #838383;
  }
}
.sm-scrollable {
  overflow-y: hidden;
  overflow-x: hidden;
}

// RESPONSIVE STYLE
@media (max-width: 991px) {
  .col-2 {
    grid-template-columns: repeat(1, 1fr);
  }
  .col-5 {
    grid-template-columns: repeat(2, 1fr);
  }
  .display-bold {
    font-size: 2rem;
  }
}

@media (max-width: 575px) {
  .display-bold {
    font-size: 1.3rem;
  }
  .display-column__title {
    font-size: 1rem;
  }
  .display-column__description {
    font-size: 0.6rem;
  }

  .sm-scrollable {
    overflow: scroll !important;
    overflow-x: hidden !important;
  }

  .col-5 {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
