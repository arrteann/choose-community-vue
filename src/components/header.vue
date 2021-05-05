<template>
  <header>
    <span id="logo">
      <i class="gg-globe-alt"></i>
      Trustply
    </span>

    <span id="search">
      <input
        class="search-input"
        type="text"
        placeholder="I need"
        v-model="search"
      />
      <button class="search-btn">
        <i class="gg-search"></i>
      </button>
    </span>

    <span id="avatar">
      <img src="https://i.pravatar.cc/500" alt="avatar" loading="lazy" />
      <h5 id="notifications">+29</h5>
    </span>
  </header>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({
  name: "header-base",
})
export default class HeaderBase extends Vue {
  search?: string = "";
}
</script>


<style lang="scss" scoped>
$primary-background: linear-gradient(-225deg, #6b8dd6 48%, #8e37d7 100%);
header {
  background-image: $primary-background;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  box-shadow: 0px 3px 6px rgba($color: #000000, $alpha: 0.1);

  span {
    font-weight: 900;
  }

  #logo {
    cursor: progress;
    display: flex;
    align-items: center;
    letter-spacing: 0.19rem;
    i {
      margin: 0rem 0.6rem 0rem 0rem;
    }
    font-size: 1.3rem;
    transition: all 0.5s ease-in;

    &:hover {
      box-shadow: 0px 0px 6px rgba($color: white, $alpha: 0.8);
      transform: scale(1.1) translateY(-0.1rem);
    }
  }

  #avatar {
    width: 4rem;
    height: 4rem;
    position: relative;
    img {
      max-width: 100%;
      border-radius: 50%;
      height: auto;
      border: 0.2rem solid white;
    }

    #notifications {
      position: absolute;
      right: 0rem;
      bottom: 0.4rem;

      display: flex;
      justify-content: center;
      align-items: center;

      background-color: #fff;
      color: #8e37d7;

      padding: 0.1rem 0.3rem;
      border-radius: 55rem;
      width: 2rem;
      height: 1rem;
    }
  }

  #search {
    position: relative;
    .search-input {
      margin: 0;
      padding: 0.6rem 0.8rem;
      border-radius: 0.3rem;
      border: none;
      width: 24rem;
      height: 2.5rem;
      font-size: 0.9rem;
      outline: none;
      transition: all 0.6s ease;
    }
    .search-btn {
      border: none;
      border-radius: 50%;

      width: 2rem;
      height: 2rem;

      background: transparent;

      display: flex;
      justify-content: center;
      align-items: center;

      position: absolute;
      top: 0.25rem;
      right: 0.3rem;

      transition: all 0.2s ease;

      &:hover,
      &:active {
        color: white;
        background: $primary-background;

        background-position: 0 0;
      }

      cursor: pointer;
    }
  }
}
</style>