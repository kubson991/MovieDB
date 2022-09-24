<template>
  <section class="inputsContainer">
    <span class="material-icons-outlined buttonsOrder"> menu </span>
    <span class="material-icons-outlined buttonsOrder"> view_compact </span>
    <input
      type="range"
      name=""
      min="0"
      max="10"
      class="slider"
      @input="rangeInput"
      value="5"
    />
    <div class="inputSearch">
      <input type="text" />
      <span class="material-icons-outlined"> search </span>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    rangeInput(e) {
      e.target.style["background-size"] = `${
        (e.target.value / 10) * 100
      }% 100%`;
    },
  },
};
</script>
<style lang="scss" scoped>
.slider {
  -webkit-appearance: none;
  width: 40%;
  height: 0.2rem;
  border-radius: 5px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  background-image: linear-gradient(yellow, yellow);
  background-size: 50% 100%;
  background-repeat: no-repeat;
  align-self: end;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: yellow;
  cursor: pointer;
}

.inputsContainer {
  min-height: unset;
  margin: 0 0 1rem 0;
  height: 6rem;
  justify-content: space-evenly;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: end;
  flex-direction: row;
  span {
    font-size: 1.8rem;
  }
}
.range {
  width: 40%;
}
.inputSearch {
  display: flex;
  border: unset;
  justify-content: space-between;
  border-bottom: 2px solid #e0e0e0;
  width: 40%;
  input {
    outline: none;
    border: unset;
    width: 85%;
  }
  span {
    color: #e0e0e0;
    border: unset;
    padding-bottom: 0.2rem;
  }
}
.buttonsOrder {
  color: #d3d3d3;
  cursor: pointer;
}
</style>
