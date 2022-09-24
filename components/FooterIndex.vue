<template>
  <footer>
    <section class="top">
      <p>IMDb</p>
      <nav>
        <a href="">
          <img
            src="https://cdn.icon-icons.com/icons2/509/PNG/512/Twitter_icon-icons.com_49936.png"
            alt=""
          />
        </a>
        <a href="">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8cQ3R5wxbP6WBfnWmB_hTXR2ZUv5EQJt4oUqPZWG2qdJuvbpLr__JJl98UF7_5DZ5Mg4&usqp=CAU"
            alt=""
          />
        </a>
        <a href="">
          <img
            class="biggeriCON"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Black_Instagram_icon.svg/640px-Black_Instagram_icon.svg.png"
            alt=""
          />
        </a>
      </nav>
      <p>1990-2015 IMDB.COM INC</p>
    </section>
    <section></section>
  </footer>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.biggeriCON {
  height: 1.4rem;
  width: 1.4rem;
}
img {
  height: 2rem;
  width: 2rem;
  opacity: 0.5;
  &:hover {
    opacity: 0.9;
  }
}
p {
  color: grey;
  opacity: 0.7;
  font-weight: 600;
  padding: 1rem;
}
footer {
  display: block;
  width: 100%;
  height: 5rem;
  box-shadow: 0px 0px 6px -1px rgba(0, 0, 0, 0.543);
}
</style>
