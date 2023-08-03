<template>
  <div class="gallery">
    <img src="/img/gallery/title.svg" alt="" class="title">

    <Gallery/>
  </div>
</template>

<script>
import Gallery from '@/components/gallery/Gallery.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    Gallery,
  }
}
</script>

<style scoped lang="sass">
.title
    display: flex
    width: 34%
    border-radius: 0 48px 48px 0
    margin: 80px 0 56px
    float: left
    align-items: center
    justify-content: center
    color: #FFF
    @media (max-width: 875px)
        width: 75%
        border-radius: 0 24px 24px 0
        margin: 40px 0 32px
</style>
