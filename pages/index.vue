<template>
  <section class="content">
    <Modal v-if="ModalOpen" />
    <HeaderIndex></HeaderIndex>
    <MainIndex />
    <div class="buttonContainer">
      <button class="getMore" @click="more" v-show="!this.loading && !this.lastPage">+</button>
      <button class="getMore" v-show="this.loading && !this.lastPage">
        <span class="one"></span>
        <span class="two"></span>
        <span class="three"></span>
      </button>
    </div>
    <FooterIndex />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    more(e) {
      if (!this.loading && !this.lastPage) {
        this.$store.commit("loading", true);
        this.page++;
        this.$store.commit("page", this.page);
      }
    },
  },
  computed: {
    ...mapGetters({
      ModalOpen: "ModalOpen",
      loading: "loading",
      lastPage: "lastPage",
    }),
  },
};
</script>
<style lang="scss" scoped>
.content {
  max-height: 105vh;
  padding: unset;
  overflow-x: hidden;
  overflow: scroll;
  &::-webkit-scrollbar {
    width: 8px;
    height: 0px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #f5c516;
    border-radius: 14px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: yellow;
  }
}
@keyframes bigSmall {
  from {
    width: 3px;
    height: 3px;
  }
  to {
    width: 6px;
    height: 6px;
  }
}
.getMore {
  border-radius: 50%;
  background-color: #f5c516;
  outline: none;
  border: unset;
  width: 4rem;
  height: 4rem;
  color: white;
  font-size: 2.5rem;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  span {
    cursor: wait;
    display: block;
    width: 5px;
    height: 5px;
    background-color: white;
    border-radius: 50%;
    animation-name: bigSmall;

    animation-direction: unset;
    animation-duration: 1.2s;
    animation-fill-mode: both;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }
  .one {
    animation-delay: 0s;
  }
  .two {
    animation-delay: 0.3s;
  }
  .three {
    animation-delay: 0.6s;
  }
}
.buttonContainer {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  position: relative;
  bottom: 1.2rem;
}
</style>
