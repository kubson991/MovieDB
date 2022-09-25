<template>
  <section class="subSectionInfo">
    <NavMain />
    <InputsContainer
      @rangevalue="
        (e) => {
          rate = e;
        }
      "
      @inputValue="
        (e) => {
          name = e;
        }
      "
      @blockMode="
        (e) => {
          blockMode = e;
        }
      "
    />
    <BlockContent v-show="blockMode" :movies="filteredMovies" />
    <ListComponent v-show="!blockMode" :movies="filteredMovies" />
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      Maxpages: 2,
      movies: [],
      rate: 10,
      name: "",
      blockMode: true,
    };
  },
  beforeMount() {
    this.getIntheater(1);
  },
  computed: {
    filteredMovies() {
      const filteredStars = this.movies.filter(
        (movie) => movie.vote_average <= this.rate
      );
      if (this.name) {
        const filterdStarsAndNames = this.movies.filter((movie) =>
          movie.title.includes(this.name)
        );
        return filterdStarsAndNames;
      }

      return filteredStars;
    },
    ...mapGetters({
      page: "page",
    }),
  },
  watch: {
    page: {
      handler: function (value) {
        if (this.Maxpages >= value) {
          this.getIntheater(value);
        } else {
          this.$store.commit("lastPage");
        }
      },
    },
  },
  methods: {
    async getIntheater(page) {
      try {
        const fechaHOY = new Date();
        const movies = await this.$axios.$get(
          "https://api.themoviedb.org/3/discover/movie",
          {
            params: {
              api_key: "cd1e965cab987c6ce87de011b366445c",
              language: "en-US",
              include_adult: true,
              page,
              ["primary_release_date.gte"]: fechaHOY.setMonth(
                fechaHOY.getMonth() - 1
              ),
              ["primary_release_date.lte"]: fechaHOY.setMonth(
                fechaHOY.getMonth() + 1
              ),
              with_watch_monetization_types: "flatrate",
            },
          }
        );
        this.Maxpages = movies.total_pages;
        this.movies = this.movies.concat(movies.results);
      } catch (error) {
        console.error("la api fallo :(");
      } finally {
        this.$store.commit("loading", false);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.subSectionInfo {
  width: 95%;
  height: 88vh;
  background-color: white;
  padding: 1rem;
}
@media screen and (min-width: 1400px) {
  .subSectionInfo {
    width: 80%;
  }
}
</style>
