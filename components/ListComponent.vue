<template>
  <ul>
    <li
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @click="openModal(movie)"
    >
      <p>{{ movie.original_title }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    movies: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    openModal(movie) {
      this.$store.commit("ModalInfo", { ...movie, genres: this.genres });
      this.$store.commit("setModalOpen", true);
    },
  },
};
</script>
<style lang="scss" scoped>
@keyframes opacityChange {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes backgroundMoving {
  0% {
    width: 0;
    height: 0;
    border-radius: 50%;
  }
  100% {
    width: 300rem;
    height: 300rem;
  }
}
ul {
  margin-top: 3rem;
  padding: unset;
}
li {
  animation-name: opacityChange;
  animation-delay: 0s;
  animation-direction: unset;
  animation-duration: 1.3s;
  animation-fill-mode: forwards;
  animation-iteration-count: unset;
  animation-timing-function: ease-in-out;
  position: relative;
  margin-top: 1rem;
  list-style-type: none;
  width: 95%;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.613);
  margin: auto;
  margin-top: 1.5rem;
  text-align: center;
  border-radius: 0.3rem;
  max-width: 800px;
  cursor: pointer;
  padding: 0.4rem;
  font-weight: 600;
  overflow: hidden;
  background-color: transparent;
  z-index: 1;
  &:hover:before {
    position: absolute;
    content: "";
    display: block;
    background-color: #fad244;
    width: 3rem;
    height: 3rem;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
    z-index: -1;
    animation-name: backgroundMoving;
    animation-delay: 0s;
    animation-direction: unset;
    animation-duration: 3.6s;
    animation-fill-mode: forwards;
    animation-iteration-count: unset;
    animation-timing-function: ease-in-out;
  }
  &:hover p {
    transition: color 0.4s ease-out;
    color: white;
  }
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
