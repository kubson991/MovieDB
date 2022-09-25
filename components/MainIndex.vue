<template>
  <main>
    <Explorer class="mainExplorer" />
  </main>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
main {
  width: 100%;
  height: auto;
}
.mainExplorer {
  margin: 0 auto;
  position: relative;
  top: -2rem;
  border-radius: 0.8rem;
  height: auto;
}
@media screen and (min-width: 1400px) {
  .mainExplorer {
    width: 75%;
    top: -6rem;
  }
}
</style>
