<template>
  <article>
    <div class="imgContainer">
      <img
        :src="`https://image.tmdb.org/t/p/original${this.movie.backdrop_path}?api_key=cd1e965cab987c6ce87de011b366445c`"
        :alt="`${this.movie.title} Poster`"
      />
    </div>
    <h2>
      {{ this.movie.title }}
    </h2>
    <section class="genresSection">
      <p v-for="genre in genres" :key="genre.id">{{ genre.name }}</p>
    </section>
    <div class="add"></div>
  </article>
</template>
<script>
export default {
  data() {
    return {
      genres: [],
    };
  },

  props: {
    movie: {
      type: Object,
      default: {},
    },
  },
  created() {
    this.getGenres();
  },
  methods: {
    async getGenres() {
      const movie = await this.$axios.$get(
        `https://api.themoviedb.org/3/movie/${this.movie.id}`,
        {
          params: {
            api_key: "cd1e965cab987c6ce87de011b366445c",
            with_watch_monetization_types: "flatrate",
            append_to_response: "videos",
          },
        }
      );
      console.log(movie);
      this.genres = movie.genres;
    },
  },
};
</script>
<style lang="scss" scoped>
article {
  position: relative;
  width: 100%;
  height: 40rem;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.85);
  overflow: hidden;
}
.imgContainer {
  width: 100%;
  height: 65%;
}
img {
  width: 100%;
  height: 100%;
}
h2 {
  font-size: 1.8rem;
  overflow: hidden;
  padding: 1rem;
}
.genresSection {
  margin-left: 1rem;
  display: flex;
  justify-content: start;
  flex-direction: row;
  gap: 1rem;
  color: #ffdb58;
  font-weight: bold;
  p {
    font-size: 1.1rem;
  }
}
.add {
  background: #ffdb58;
  width: 8rem;
  height: 10rem;
  transform: rotate(45deg);
  position: absolute;
  bottom: -11%;
  right: -11%;
  &::after {
    content: "+";
    color: white;
    display: block;
    background-color: transparent;
    font-size: 3rem;
    transform: rotate(-45deg);
    position: absolute;
    bottom: 20%;
    left: 10%;
  }
}
</style>
