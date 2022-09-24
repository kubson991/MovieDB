<template>
  <nav>
    <h4>Options</h4>
    <div class="optionsContainer">
      <p>IN-THEATERS</p>
      <p>COMING SOON</p>
      <p>CHARTS</p>
      <p>TV SERIES</p>
      <p>TRAILERS</p>
      <p>MORE</p>
    </div>
    <span class="material-icons-outlined"> {{ expand }} </span>
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
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  h4 {
    font-size: 1.3rem;
  }
  P {
    display: none;
    color: black;
    font-weight: 500;
    &:hover {
      color: yellow;
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
  P {
    display: block;
    text-align: center;
    color: black;
    font-weight: 500;
    border-bottom: 1px solid black;
    padding: 0.2rem;
    width: fit-content;
    &:hover {
      border-bottom: 1px solid yellow;
    }
  }
  span {
    display: none;
  }
}
span {
  font-size: 1.8rem;
}
</style>
