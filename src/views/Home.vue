<template>
  <div class="container">
    <div class="row col-2 gap-1">
      <div class="card-wrapper md-col-3 choose-nationality">
        <h1 class="display-bold">Find your community</h1>
        <Card
          title="1.Choose your nationality"
          description="or nationality you are intersted in vewing their businesses"
          footer="Show all nationality"
          class="sm-scrollable"
        >
          <div class="flag-card-wrapper">
            <flag-card
              v-for="country in chooseCountry"
              :key="country['name']"
              :country="country['name']"
              :image="country['img']"
              :nationality="country['nationality']"
            />
          </div>
          <div class="flag-card-wrapper">
            <flag-card
              v-for="country in chooseCountry"
              :key="country['name']"
              :country="country['name']"
              :image="country['img']"
              :nationality="country['nationality']"
            />
          </div>
        </Card>
      </div>

      <div class="card-wrapper community-matters">
        <h1 class="display-column">
          <span class="display-column__title">Why community matters?</span>
          <span class="display-column__description"
            >Your community is important since you can find a group of people
            with the same language, common culture and similar needs.</span
          >
        </h1>
        <Card
          title="2.Set the location"
          description="your are interested in viewing their businesses"
          :hasMap="true"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207371.97794916082!2d51.20973526235812!3d35.69701178468244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcd9%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1620200738916!5m2!1sen!2s"
            height="420"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </Card>
      </div>
    </div>

    <div class="row col-1">
      <div class="card-wrapper pick-community">
        <Card
          title="3.Pick a community"
          description="When you choose a community, we show its businesses"
          :searchable="false"
          class="sm-scrollable"
          style="height: 20rem !important"
        >
          <div class="row col-2 gap-1">
            <LongCard
              v-for="community in communities"
              :key="community['id']"
              :country="community"
            />
          </div>
        </Card>
      </div>
    </div>

    <div class="cool-communities">
      <h3>Some other cool communities to check:</h3>
      <div class="row col-5 gap-1">
        <ColumnCard
          v-for="community in otherCommunities"
          :key="community['id']"
          :country="community"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/card.vue";
import FlagCard from "@/components/flag-card.vue";
import LongCard from "@/components/long-card.vue";
import ColumnCard from "@/components/column-card.vue";

@Component({
  components: {
    Card,
    FlagCard,
    LongCard,
    ColumnCard,
  },
})
export default class Home extends Vue {
  get chooseCountry() {
    return this.$store.getters["chooseCountry"];
  }
  get communities() {
    return this.$store.state["communities"];
  }

  get otherCommunities() {
    return this.$store.getters["otherCommunities"];
  }
}
</script>


<style lang="scss" scoped>
.choose-nationality {
  h1 {
    margin-bottom: 1.5rem;
  }
}
.pick-community {
  margin: 2.5rem 0rem;
}

.cool-communities {
  h3 {
    margin: 0rem 0rem 2rem;

    color: #333;
    font-weight: 800;
  }
}

</style>