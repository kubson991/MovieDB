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
};
</script>
<style lang="scss" scoped>
section {
  padding-top: 1rem;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px 15px;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  margin-bottom: 1rem;
}
@media screen and (min-width: 1400px) {
  section {
    padding: 2.3rem 1rem;
    padding-bottom: 0rem;
    width: 95%;
    grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  }
}
</style>
