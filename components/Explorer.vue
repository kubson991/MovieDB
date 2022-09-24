<template>
  <section>
    <NavMain />
    <InputsContainer />
    <BlockContent :movies="movies" />

  </section>
</template>
<script>
export default {
  data() {
    return {
      movies: [],
    };
  },
  async beforeMount() {
    console.log("????/");
    const movies = await this.$axios.$get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: "cd1e965cab987c6ce87de011b366445c",
          language: "en-US",
          include_adult: true,
          page: 1,
          ["primary_release_date.gte"]: new Date(),
          with_watch_monetization_types: "flatrate",
        },
      }
    );
    this.movies = movies.results;
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
</style>
