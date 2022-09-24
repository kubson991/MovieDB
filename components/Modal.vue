<template>
  <div class="mask">
    <div class="modal">
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
        <button class="trailerButton">
          Watch Trailer
          <span class="material-icons-outlined"> arrow_right </span></button
        ><button class="WatchListButton">
          To Watchlist <span class="material-icons-outlined"> star </span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return { body: {} };
  },
  async beforeMount() {
    this.body = document.getElementsByTagName("body")[0];
    console.log(this.body.scrollTop);
    console.log(document.getElementsByClassName("content")[0].scrollTop);
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
  },
};
</script>
<style lang="scss" scoped>
.mask {
  position: absolute;
  height: 100%;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.276);
  z-index: 20;

  .modal {
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
</style>
