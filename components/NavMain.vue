<template>
  <nav>
    <h4>Options</h4>
    <div class="optionsContainer">
      <nuxt-link to="sites/IN-THEATERS">IN-THEATERS</nuxt-link>
      <nuxt-link to="sites/COMING SOON">COMING SOON</nuxt-link>
      <nuxt-link to="sites/CHARTS">CHARTS</nuxt-link>
      <nuxt-link to="sites/TV SERIES">TV SERIES</nuxt-link>
      <nuxt-link to="sites/TRAILERS">TRAILERS</nuxt-link>
      <nuxt-link to="sites/MORE">MORE</nuxt-link>
    </div>
    <span class="material-icons-outlined"> {{ expand }} </span>
    <div class="stars">
      <span class="material-icons"> star </span>
      <span>0</span>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      expand: "expand_more",
    };
  },
};
</script>
<style lang="scss" scoped>
nav {
  .stars {
    display: none;
  }
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  h4 {
    font-size: 1.3rem;
  }
  a {
    display: none;
    color: black;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      color: #f5c516;
    }
  }
}
nav:hover {
  h4 {
    display: none;
  }
  .optionsContainer {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: whitesmoke;
    border-radius: 1rem;
    padding: 0.5rem;
    width: 60%;
    z-index: 20;
  }
  a {
    text-decoration: none;
    display: block;
    text-align: center;
    color: black;
    font-weight: 500;
    border-bottom: 1px solid black;
    padding: 0.2rem;
    width: fit-content;
    &:hover {
      border-bottom: 1px solid #f5c516;
    }
  }
  span {
    display: none;
  }
}
span {
  font-size: 1.8rem;
}

@media screen and (min-width: 1400px) {
  nav {
    flex-direction: row;
    gap: 0.3rem;
    h4 {
      display: none;
    }
    P {
      display: block;
      color: black;
      font-weight: 500;
      &:hover {
        color: #f5c516;
      }
    }
    span {
      display: none;
    }
  }
  nav,
  nav:hover {
    .stars {
      display: block;
      background-color: #f5c516;
      color: white;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      border-radius: 0.2rem;
      width: 5rem;
      p {
        color: white;
      }
      span {
        display: block;
        font-size: 1.5rem;
      }
    }
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    h4 {
      display: none;
    }
    .optionsContainer {
      position: inherit;
      top: unset;
      display: flex;
      align-items: center;
      flex-direction: row;
      background-color: transparent;
      border-radius: unset;
      padding: unset;
      width: 90%;
      justify-content: space-evenly;
      padding-bottom: 0.6rem;
      border-bottom: solid 1px rgba(128, 128, 128, 0.21);
    }
    a {
      display: block;
      text-align: center;
      color: black;
      font-weight: 500;
      border-bottom: 1px solid black;
      padding: 0.2rem;
      width: fit-content;
      border-bottom: unset;
      &:hover {
        color: #f5c516;
        cursor: pointer;
        position: relative;
        border-bottom: unset;
        &:after {
          position: absolute;
          bottom: -0.7rem;
          left: 0;
          content: "";
          width: 100%;
          height: 0.1rem;
          background-color: #f5c516;
        }
      }
    }
    span {
      display: none;
    }
  }
}
</style>
