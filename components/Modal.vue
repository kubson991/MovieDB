<template>
  <div class="mask">
    <div class="modalMovile">
      <span class="material-icons closeButton" @click="closeModal">
        close
      </span>
      <h2>{{ ModalInfo.title }}</h2>
      <p class="resume">
        {{
          ModalInfo.overview ? ModalInfo.overview : "There is not info avaible"
        }}
      </p>
      <section class="stadistics">
        <div class="stadisticContainer__icon">
          <div class="top">
            <span class="material-icons heart"> favorite </span>
            <p>{{ ModalInfo.vote_average }}</p>
          </div>
          <p class="stadisticsSubTitle">Raiting</p>
        </div>
        <div class="stadisticContainer__icon">
          <div class="top">
            <span class="material-icons hand"> thumb_up </span>
            <p>{{ ModalInfo.vote_count }}</p>
          </div>
          <p class="stadisticsSubTitle">Score</p>
        </div>
        <div class="stadisticContainer__icon">
          <div class="top">
            <span class="material-icons trophy"> emoji_events </span>
            <p>0</p>
          </div>
          <p class="stadisticsSubTitle">Awards</p>
        </div>
      </section>
      <div class="buttonContainer">
        <button class="trailerButton" @click="watchTrailer">
          Watch Trailer
          <span class="material-icons-outlined"> arrow_right </span></button
        ><button class="WatchListButton">
          To Watchlist <span class="material-icons-outlined"> star </span>
        </button>
      </div>
    </div>
    <div
      class="modalDesktop"
      @mousemove="getCursorDirection"
      :style="trasnfrom"
    >
      <section class="setionLeft">
        <div class="imgContainer">
          <img
            :src="`https://image.tmdb.org/t/p/original${ModalInfo.backdrop_path}?api_key=cd1e965cab987c6ce87de011b366445c`"
            alt="imgPoster"
          />
        </div>
      </section>
      <section class="sectionRight">
        <span class="material-icons closeButton" @click="closeModal">
          close
        </span>
        <section class="ratingContainer">
          <div class="cardRating">
            <h1>{{ ModalInfo?.title.toUpperCase() }}</h1>
            <section class="extraInfo">
              <div class="bottomTitle">
                <p v-for="genre in ModalInfo.genres" :key="genre.id">
                  {{ genre.name }}
                </p>
              </div>
              <span class="tooltip">en</span>
            </section>

            <section class="stadistics">
              <div class="stadisticContainer__icon">
                <div class="top">
                  <span class="material-icons heart"> favorite </span>
                  <p>{{ ModalInfo.vote_average }}</p>
                </div>
                <p class="stadisticsSubTitle">Raiting</p>
              </div>
              <div class="stadisticContainer__icon">
                <div class="top">
                  <span class="material-icons hand"> thumb_up </span>
                  <p>{{ ModalInfo.vote_count }}</p>
                </div>
                <p class="stadisticsSubTitle">Score</p>
              </div>
              <div class="stadisticContainer__icon">
                <div class="top">
                  <span class="material-icons trophy"> emoji_events </span>
                  <p>0</p>
                </div>
                <p class="stadisticsSubTitle">Awards</p>
              </div>
            </section>
          </div>
        </section>
        <section class="midINFO">
          <p class="sinopsis">
            {{
              ModalInfo.overview
                ? ModalInfo.overview
                : "There is not info avaible"
            }}
          </p>
        </section>

        <div class="buttonContainer">
          <button class="trailerButton" @click="watchTrailer">
            Watch Trailer
            <span class="material-icons-outlined"> arrow_right </span></button
          ><button class="WatchListButton">
            To Watchlist <span class="material-icons-outlined"> star </span>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return { body: {}, trasnfrom: {} };
  },
  async beforeMount() {
    this.body = document.getElementsByTagName("body")[0];
    this.body.style.overflow = "hidden";
  },
  computed: {
    ...mapGetters({
      ModalInfo: "ModalInfo",
    }),
  },
  beforeDestroy() {
    this.body.style.overflow = "auto";
  },
  methods: {
    closeModal() {
      this.$store.commit("setModalOpen", false);
    },
    getCursorDirection(e) {
      const element = document.getElementsByClassName("modalDesktop")[0];
      // se suma hacia abajo
      const halfY = element.offsetTop + element.offsetHeight / 2;
      const halfX = element.offsetLeft + element.offsetWidth / 2;
      let transformX;
      let transformY;
      if (e.y > halfY) {
        transformX =
          ((e.y - halfY) / (element.offsetHeight + element.offsetTop - halfY)) *
          100 *
          0.2 *
          -1;
      } else if (e.y < halfY) {
        transformX =
          (100 -
            ((e.y - element.offsetTop) / (halfY - element.offsetTop)) * 100) *
          0.2;
      }
      if (e.x > halfX) {
        transformY =
          ((e.x - halfX) / (element.offsetLeft + element.offsetWidth - halfX)) *
          20;
        console.log(transformY);
      } else if (e.x < halfX) {
        transformY =
          (100 -
            ((e.x - element.offsetLeft) / (halfX - element.offsetLeft)) * 100) *
          0.2 *
          -1;
      }
      this.trasnfrom = {
        transform: `rotateX(${transformX}deg) rotateY(${transformY}deg)`,
      };
    },
    manageTrailer(movie) {
      console.log(movie);
      if (movie.videos.results) {
        window.open(`https://www.youtube.com/watch?v=${[this.index].key}`, '_blank');
      } else {
        return `https://www.youtube.com/results?sp=mAEB&search_query=${
          this.movies[this.index]?.original_title
        }`;
      }
    },
    async watchTrailer() {
      const movie = await this.$axios.$get(
        `https://api.themoviedb.org/3/movie/${this.ModalInfo.id}`,
        {
          params: {
            api_key: "cd1e965cab987c6ce87de011b366445c",
            with_watch_monetization_types: "flatrate",
            append_to_response: "videos",
          },
        }
      );
      this.manageTrailer(movie);
    },
  },
};
</script>
<style lang="scss" scoped>
.modalDesktop {
  display: none;
  transform-style: preserve-3d;
  perspective: 1500px;
}
.mask {
  position: absolute;
  height: 100%;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.539);
  z-index: 20;

  .modalMovile {
    overflow: hidden;
    display: block;
    width: 80%;
    height: 40%;
    background-color: white;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 1rem;
  }
  img {
    width: 100%;
  }

  p {
    font-weight: 500;
    line-height: 1.2em;
    width: 90%;
    margin: auto;
  }
}

.buttonContainer {
  position: absolute;
  bottom: 0;
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
}
button {
  border: unset;
  width: 50%;
  outline: unset;
  height: 100%;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
}
.trailerButton {
  background-color: #f1c524;
  color: white;
}
.WatchListButton {
  background-color: black;
  color: #ffdb58;
  span {
    font-size: 1.8rem;
  }
}
.stadistics {
  position: relative;
  margin: 1rem 0;
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  &::before {
    content: "";
    display: block;
    background-color: rgba(128, 128, 128, 0.221);
    height: 1px;
    width: 60%;
    position: absolute;
    top: 0;
  }
  &::after {
    content: "";
    display: block;
    background-color: rgba(128, 128, 128, 0.221);
    height: 1px;
    width: 60%;
    position: absolute;
    bottom: 0;
  }
}
.top {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  p {
    font-size: 2rem;
    width: 0.8em;
    margin: unset;
  }
}
.stadisticContainer__icon {
  width: 20%;
}
.trophy {
  color: rgb(232, 232, 23);
}
.hand {
  color: #7cdaf9;
}
.heart {
  color: rgb(242, 75, 75);
}

.stadisticsSubTitle {
  text-align: center;
  font-size: 1rem;
}
h2 {
  margin: auto;
  width: 90%;
  font-size: 1.8rem;
  padding: 3rem 0 1rem 0;
}
.mask .resume {
  width: 90%;
  margin: auto;
  font-size: 1.3rem;
  line-height: 1.4em;
  text-align: justify;
}
.closeButton {
  position: absolute;
  font-size: 1.8rem;
  font-weight: bolder;
  top: 2rem;
  right: 2rem;
  color: rgba(128, 128, 128, 0.713);
  cursor: poiner;
}
.rateContainer {
  p {
    margin-top: 0.5rem;
  }
}
@media screen and (min-width: 1400px) {
  @keyframes imgMoving {
    from {
      left: 95%;
      top: 0;
    }
    to {
      left: 0;
      top: 0;
    }
  }

  .cardRating {
    opacity: 1;
    position: relative;
    right: 4rem;
    top: 2rem;
    box-shadow: 0 0 1px 5px rgba(0, 0, 0, 0.08),
      0 0 1px 12px rgba(0, 0, 0, 0.067);
    z-index: 155;
    background-color: white;
    border-radius: 0.2rem;
    padding: 1rem;
    h1 {
      font-weight: 500;
      font-size: 1.5rem;
    }
  }
  .mask .modalMovile {
    display: none;
  }
  .modalDesktop {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 60%;
    height: 65%;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0.4rem;
  }
  .setionLeft {
    position: relative;
    width: 40%;
    height: 100%;
    .imgContainer {
      position: absolute;
      height: 100%;
      width: 100%;
      animation-name: imgMoving;
      animation-delay: 0s;
      animation-direction: unset;
      animation-duration: 1.5s;
      animation-fill-mode: forwards;
      animation-iteration-count: unset;
      animation-timing-function: ease-in-out;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
  .sectionRight {
    position: relative;
    width: 55%;
    background-color: white;
    z-index: 30;
    height: 100%;
    .closeButton {
      top: 1.5rem;
      right: 1.5rem;
      cursor: pointer;
    }
  }
  .midINFO {
    height: 40%;
    overflow: hidden;

    opacity: 0.8;
    p {
      font-size: 1.3rem;
      text-align: justify;
    }
  }
  .ratingContainer {
    height: 48%;
  }
  .buttonContainer {
    height: 12%;
  }
}

.stadistics {
  border-bottom: unset;
  &:after {
    display: none;
  }
  &:before {
    width: 95%;
    top: -0.5rem;
  }
}

.mask .stadisticContainer__icon {
  p {
    width: auto;
  }
}
.extraInfo {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  span {
    background-color: rgba(128, 128, 128, 0.266);
    padding: 0.1rem 1rem;
    border-radius: 1rem;
    font-size: 500;
    margin-right: 0.5rem;
  }
}
.mask .bottomTitle {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 0.3rem;
  gap: 0.7rem;
  padding: 1rem 0;
  width: 70%;
  p {
    margin: unset;
    width: fit-content;
    color: #50aece;
    font-weight: 300;
  }
}
</style>
