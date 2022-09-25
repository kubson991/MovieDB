<template>
  <article @click="openModal(movie)">
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
    <div class="rateContainer">
      <span class="material-icons heart"> favorite </span>
      <p>{{ this.movie?.vote_average ? this.movie.vote_average : 0 }}</p>
    </div>

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
      try {
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
        this.genres = movie.genres;
      } catch (error) {
        console.error("la api fallo :(");
      }
    },
    openModal(movie) {
      this.$store.commit("ModalInfo", { ...movie, genres: this.genres });
      this.$store.commit("setModalOpen", true);
    },
  },
};
</script>
<style lang="scss" scoped>
article {
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 40rem;
  border-radius: 0.2rem;
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.85);
  overflow: hidden;
  max-width: 400px;
  background-color: white;
  transition: all 0.4s ease-in-out;
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
  max-height: 2.2em;
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
.heart {
  color: rgb(242, 75, 75);
}
.rateContainer {
  display: flex;
  align-items: center;
  margin: 2rem 0 0 2rem;
  p {
    font-size: 1.8rem;
    height: 1.3em;
    font-weight: 500;
    margin-bottom: 0.5rem;
    margin-left: 0.3rem;
  }
}
@media screen and (min-width: 1400px) {
  article:hover {
    z-index: 15;
    transform: scale(1.1);
    box-shadow: 0 0 2.5rem 0 rgba(0, 0, 0, 0.425);
  }
  .add {
    bottom: -16%;
    right: -16%;
    cursor: pointer;
    &::after {
      font-size: 2.4rem;
      transform: rotate(-45deg);
      position: absolute;
      bottom: 42%;
      left: 10%;
    }
  }
}
@media screen and (min-width: 1800px) {
  .add {
    bottom: -15%;
    &::after {
      font-size: 2.4rem;
      transform: rotate(-45deg);
      position: absolute;
      bottom: 35%;
      left: 5%;
    }
  }
}
.imgContainer {
  height: 70%;
}
.rateContainer {
  display: flex;
  align-items: center;
  margin: 1rem 0 0 1.8rem;
}
</style>
