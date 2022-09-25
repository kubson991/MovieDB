<template>
  <main>
    <img :src="require('~/assets/construccion.jpg')" alt="construccion" />
  </main>
</template>
<style lang="scss" scoped>
main {
  background-color: white;
  overflow: hidden;
}
img {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  width: 80%;
  max-height: 100vh;
}
</style>
