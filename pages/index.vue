<template>
  <section class="content">
    <Modal v-if="ModalOpen" />
    <HeaderIndex></HeaderIndex>
    <MainIndex />
    <FooterIndex />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  computed: {
    ...mapGetters({
      ModalOpen: "ModalOpen",
    }),
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  max-height: 100vh;
  overflow: scroll;
}
</style>
