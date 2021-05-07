<template>
  <div class="card">
    <div class="card-header">
      <div class="card-header-content">
        <span>{{ title }}</span>
        <p>{{ description }}</p>
      </div>

      <div class="card-header-search" v-if="searchable">
        <i class="gg-search"></i>
      </div>
    </div>

    <div :class="['card-content', { 'card-map': hasMap }]">
      <slot></slot>
    </div>

    <div class="card-footer">{{ footer }}</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component({ name: "card" })
export default class Card extends Vue {
  @Prop({ type: String, default: "" }) title?: string;
  @Prop({ type: String, default: "" }) description?: string;
  @Prop({ type: String, default: "" }) footer?: string;
  @Prop({ type: Boolean, default: false }) hasMap?: boolean;
  @Prop({ type: Boolean, default: true }) searchable?: boolean;
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 25rem;
  background: white;
  border-radius: 0.6rem;
  box-shadow: 0px 3px 6px rgba($color: #000000, $alpha: 0.4);
  padding: 1.5rem 2.5rem;
  overflow: hidden;
  position: relative;
  &-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    &-search {
      margin-top: 0.5rem;
      color: #333;
      transition: all 0.6s ease;
      width: 2.2rem;
      height: 2.2rem;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.3rem 0.6rem;
      border-radius: 0.2rem;

      &:hover {
        background: #6b8dd6;
        color: white;
      }
    }

    &-content {
      color: #333;
      line-height: 1.5rem;
      span {
        font-size: 1.5rem;
        font-weight: 500;
      }

      p {
        color: #333333;
        font-size: 0.8rem;
        font-weight: 400;
        margin-top: 0.1rem;
      }
    }
  }

  &-map {
    position: absolute;
    left: 0%;
    width: 100%;

    iframe {
      width: 100%;
    }
  }

  &-footer {
    text-align: center;
    text-transform: uppercase;
    font-size: 0.9rem;
    color: #4a7ff0;
    cursor: pointer;
  }
}

@media (max-width: 991px) {

}
@media (max-width: 575px) {
  .card-header-content {
    line-height: 1.2rem;
  }
  .card-header-content span {
    font-size: 1rem !important;
  }
  .card-header-content p {
    font-size: 0.7rem !important;
  }

  .card-header-search {
    margin-top: -2rem;
  }
}
</style>