<template>
  <section>
    <Block v-for="movie in movies" :key="movie.id" :movie="movie" />
  </section>
</template>
<script>
export default {
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
  mounted() {
    console.log(this.movies);
  },
};
</script>
<style lang="scss" scoped>
section {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px 15px;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  margin-bottom: 1rem;
}
</style>
