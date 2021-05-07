import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countries: [
      {
        name: "iran",
        nationality: "iranian",
        img: "/flags/ir.png",
      },
      {
        name: "brazil",
        nationality: "brazilian",
        img: "/flags/br.png",
      },
      {
        name: "canada",
        nationality: "canadaian",
        img: "/flags/ca.png",
      },
      {
        name: "united state",
        nationality: "american",
        img: "/flags/us.png",
      },
      {
        name: "russian",
        nationality: "russia",
        img: "/flags/ru.png",
      },
      {
        name: "germany",
        nationality: "german",
        img: "/flags/de.png",
      },
    ],
    communities: [
      {
        id: 1,
        name: "iran",
        nationality: "iranian",
        img: "/flags/ir.png",
        name_second: "brazil",
        nationality_second: "brazilian",
        img_second: "/flags/br.png",
      },

      {
        id: 2,
        name: "brazil",
        nationality: "brazilian",
        img: "/flags/br.png",

        name_second: "canada",
        nationality_second: "canadaian",
        img_second: "/flags/ca.png",
      },

      {
        id: 3,
        name: "united state",
        nationality: "american",
        img: "/flags/us.png",

        name_second: "russian",
        nationality_second: "russia",
        img_second: "/flags/ru.png",
      },

      {
        id: 4,
        name: "brazil",
        nationality: "brazilian",
        img: "/flags/br.png",
        name_second: "canada",
        nationality_second: "canadaian",
        img_second: "/flags/ca.png",
      },
      {
        id: 5,
        name: "iran",
        nationality: "iranian",
        img: "/flags/ir.png",
        name_second: "brazil",
        nationality_second: "brazilian",
        img_second: "/flags/br.png",
      },
      {
        id: 6,
        name: "germany",
        nationality: "german",
        img: "/flags/de.png",
        name_second: "russian",
        nationality_second: "russia",
        img_second: "/flags/ru.png",
      },
    ],
  },

  getters: {
    chooseCountry(state) {
      return state.countries.splice(0, 5);
    },

    otherCommunities(state) {
      return state.communities.splice(0, 5);
    },
  },
});
