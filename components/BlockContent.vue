<template>
  <section>
    <Block
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @click.native="openModal(movie)"
    />
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
  methods: {
    openModal(movie) {
      this.$store.commit("ModalInfo", movie);
      this.$store.commit("setModalOpen", true);
    },
  },
};
</script>
<style lang="scss" scoped>
section {
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px 15px;
  align-items: center;
  justify-items: center;
  margin: 0 auto;
  margin-bottom: 1rem;
}
</style>
