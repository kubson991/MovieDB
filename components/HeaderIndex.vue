<template>
  <header :style="backgrownStyle">
    <section class="topInfo">
      <span class="IMDBicon"></span>
      <nav>
        <nuxt-link to="">MOVIES</nuxt-link>
        <nuxt-link to="">CELEBS & PHOTOS</nuxt-link>
        <nuxt-link to="">COMMUNITY</nuxt-link>
        <nuxt-link to="">NEWS</nuxt-link>
      </nav>
      <img
        src="https://media-exp1.licdn.com/dms/image/D4E35AQFaFkNUEbqhfA/profile-framedphoto-shrink_200_200/0/1662046419089?e=1664571600&v=beta&t=jE-3LJ4mskebjxxkf-YfwWg5n8dPyU_YA8PQZNZJ7f4"
        alt=""
        class="avatar"
      />
    </section>
    <section class="mainHeaderSection">
      <nav class="selectorPoints">
        <div
          v-for="(movie, indexMovie) in movies"
          :key="movie.id"
          :class="{ active: index === indexMovie }"
          @click="() => (index = indexMovie)"
        ></div>
      </nav>
      <div class="textContainer">
        <h1>{{ this.movies[index]?.original_title.toUpperCase() }}</h1>
        <div class="genreContainer">
          <p v-for="genre in genres[index]" :key="genre.id">{{ genre.name }}</p>
        </div>
        <a class="trilerButton" target="_blank" :href="mangeMovieWithoutTriler">
          Watch Trailer
          <span class="material-icons-outlined"> arrow_circle_right </span></a
        >
      </div>
      <nav class="arrowContainer">
        <span class="material-icons-outlined" @click="changeIndex(false)">
          expand_less
        </span>

        <span class="material-icons-outlined" @click="changeIndex(true)">
          expand_more
        </span>
      </nav>
    </section>
  </header>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      movies: "",
      image: "",
      genres: [],
      triler: [],
    };
  },
  async created() {
    const movies = await this.$axios.$get(
      "https://api.themoviedb.org/3/discover/movie",
      {
        params: {
          api_key: "cd1e965cab987c6ce87de011b366445c",
          language: "en-US",
          include_adult: true,
          page: 1,
          with_watch_monetization_types: "flatrate",
        },
      }
    );
    this.movies = movies.results.slice(-5);
    this.getGenres(this.movies);
  },
  computed: {
    backgrownStyle() {
      if (!this.movies[this.index]?.backdrop_path) {
        return "";
      }
      return {
        ["background-image"]: `url(https://image.tmdb.org/t/p/original${
          this.movies[this.index].backdrop_path
        }?api_key=cd1e965cab987c6ce87de011b366445c)`,
      };
    },
    mangeMovieWithoutTriler() {
      if (this.triler[this.index]) {
        return `https://www.youtube.com/watch?v=${this.triler[this.index].key}`;
      } else {
        return `https://www.youtube.com/results?sp=mAEB&search_query=${
          this.movies[this.index]?.original_title
        }`;
      }
    },
  },
  methods: {
    getGenres(movies) {
      const promisesMovies = movies.map((movie) => {
        return this.$axios.$get(
          `https://api.themoviedb.org/3/movie/${movie.id}`,
          {
            params: {
              api_key: "cd1e965cab987c6ce87de011b366445c",
              with_watch_monetization_types: "flatrate",
              append_to_response: "videos",
            },
          }
        );
      });
      Promise.all(promisesMovies).then((movies) => {
        this.genres = movies.map((movie) => movie.genres);
        this.triler = movies.map((movie) => movie.videos.results[0]);
      });
    },
    changeIndex(down) {
      if (this.index < 4 && down) {
        return ++this.index;
      } else if (this.index > 0 && !down) {
        return this.index--;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  height: 40vh;
  width: 100%;
  @include backgroundConfig();
  background-size: cover;
  background-color: black;
}
.IMDBicon {
  @include icons("~assets/imdbIMG.png");
}

.avatar {
  border-radius: 50%;
  width: 10%;
}

.topInfo {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-top: 0.5rem;
  nav {
    a {
      color: white;
      outline: unset;
      text-decoration: unset;
    }
  }
}
.selectorPoints {
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 0.7rem;
  padding-left: 0.8rem;
  div {
    background-color: white;
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    opacity: 0.5;
    &:hover {
      opacity: 1;
      width: 1rem;
      height: 1rem;
    }
  }
  .active {
    opacity: 1;
  }
}
.textContainer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  h1 {
    color: white;
    font-size: 2rem;
    text-align: center;
  }
  .genreContainer {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    p {
      color: white;
      font-weight: 700;
    }
  }
}

.mainHeaderSection {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 80%;
}
.arrowContainer {
  width: 10%;
  color: white;
  span {
    border: white solid 1px;
    border-radius: 50%;
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
  }
}
.trilerButton {
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: yellow;
  color: black;
  text-decoration: unset;
  border-radius: 2rem;
  padding: 1rem 2rem;
  font-weight: bolder;
  font-size: 1.3rem;
}
</style>
