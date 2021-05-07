<template>
  <div
    :class="['long-card', { 'long-check': check }]"
    @click.prevent="clickable"
  >
    <span id="long-tip">show its businesses</span>

    <div class="long-card-first long-card-state">
      <img :src="country['img']" :alt="country['name']" />
      <span>{{ country["nationality"] }}</span>
    </div>

    <span id="of">of</span>

    <div class="long-card-second long-card-state">
      <img :src="country['img_second']" :alt="country['name_second']" />
      <span>{{ country["nationality_second"] }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ name: "long-card" })
export default class LongCard extends Vue {
  @Prop({ type: Object }) country;
  check?: boolean = false;

  clickable() {
    this.check = !this.check;
  }
}
</script>


<style lang="scss" scoped>
.long-check {
  background-color: #46ad91;
  box-shadow: 0px 1px 10px rgba($color: #000000, $alpha: 0.7);

  span {
    color: white !important;
  }
}

.long-card {
  padding: 0.6rem 1rem;
  display: flex;
  align-items: center;

  border-radius: 0.3rem;
  width: 100%;
  position: relative;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    background-color: #46ad91;
    box-shadow: 0px 1px 10px rgba($color: #000000, $alpha: 0.7);
  }
  &:hover span {
    color: white;
  }
  &:hover #long-tip {
    opacity: 1;
  }
  img {
    height: 2rem;
    width: 3rem;
  }

  span {
    display: block;
    margin: {
      top: 0.5rem;
    }
    font-size: 0.8rem;
    text-transform: uppercase;
    color: #333;
  }
}
#long-tip {
  color: #46ad91;
  font-weight: 500;
  font-size: 0.7rem;
  position: absolute;
  top: -1.8rem;
  right: 1.3rem;
  opacity: 0;
  transition: all 0.4s ease;
}
.long-card-state {
  display: flex;
  align-items: flex-start;

  width: 12rem;

  span {
    margin: {
      left: 1rem;
    }
    align-items: flex-start;
  }
}
#of {
  margin: 0rem 2rem;
}

@media (max-width: 991px) {
  .long-card-state {
    width: 5.6rem;
    span {
      margin: {
        left: 0.4rem;
      }
    }
    padding: 0.3rem 0rem;
  }
  #of‌ {
    margin: 0rem;
  }

  .long-card {
    span {
      margin: 0rem 0.3rem;
      font-size: 0.6rem;
    }
    img {
      height: 1rem;
      width: 2rem;
    }
  }
}
</style>