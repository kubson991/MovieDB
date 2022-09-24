<template>
  <section>
    <NavMain />
    <InputsContainer
      @rangevalue="
        (e) => {
          rate = e;
        }
      "
    />
    <BlockContent :movies="filteredMovies" />
  </section>
</template>
<script>
export default {
  data() {
    return {
      movies: [],
      rate: 10,
    };
  },
  beforeMount() {
    this.getIntheater();
  },
  computed: {
    filteredMovies() {
      console.log(this.rate);
      return this.movies.filter((movie) => movie.vote_average <= this.rate);
    },
  },
  methods: {
    async getIntheater() {
      const fechaHOY = new Date();
      const movies = await this.$axios.$get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: "cd1e965cab987c6ce87de011b366445c",
            language: "en-US",
            include_adult: true,
            page: 1,
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
      this.movies = movies.results;
      console.log(this.movies);
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  width: 95%;
  min-height: 56vh;
  background-color: white;
  padding: 1rem;
}
@media screen and (min-width: 1400px) {
  section {
    width: 80%;
  }
}
</style>
