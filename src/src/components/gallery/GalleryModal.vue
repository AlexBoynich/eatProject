<template>
    <div class="galleryModalBlock">
        <div class="overlay" @click="close"/>
        <div class="yearAlbum">
            <div class="arrow_left_modal"><img src=/img/gallery/arrowLeft.svg alt="LastSlide" class="arrow"></div>
            <Swiper :options="swiperOptions" class="swiper">
                <SwiperSlide v-for="(sliderItem, index) in galleryModal" :key="index" class="swiperSlide">
                    <img src="/img/gallery/closeModal.svg" 
                    class="closeModal" 
                    @click="close" alt="Close">
                    <img :src=sliderItem class="sliderImg">
                </SwiperSlide>
            </Swiper>
            <div class="arrow_right_modal"><img src=/img/gallery/arrowRight.svg alt="NextSlide" class="arrow"></div>
        </div>
    </div>
</template>

<script>

    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import './styles.sass'

    export default {
      props: ['galleryModal', 'activeSlide'],
      components: {
            Swiper,
            SwiperSlide
        },
      data() {
        return {}
      },
      computed: {
        swiperOptions() {
            const index = this.galleryModal.findIndex(item => item === this.activeSlide)
            return {
                slidesPerView: 1,
                initialSlide: index >= 0 ? index : 0,
                navigation: {
                    nextEl: '.arrow_right_modal',
                    prevEl: '.arrow_left_modal'
                },
                loop: true,
            }
        }
      },
      methods: {
        close() {
            this.$emit('close')
        }
    }
  }
</script>

<style lang="sass" scoped>
.swiper 
    margin: 0 95px
    @media( max-width: 870px )
        margin: 0
.galleryModalBlock
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    padding: 40px 80px
    z-index: 10
    @media( max-width: 870px )
        padding: 220px 16px
.overlay
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    background: rgba(0, 0, 0, 0.6)
.sliderImg
    max-width: 100%
    max-height: 100%
    width: 100%
    aspect-ratio: 16/9
    object-fit: cover
.arrow_right_modal, .arrow_left_modal
    margin-bottom: 56px
    width: 80px
    height: 80px
    z-index: 1
    &:hover
        border-radius: 48px
        background: rgba(37, 89, 70, 0.1)
    &:active
        background: rgba(37, 89, 70, 0.3)
    @media (max-width: 875px)
        display: none

.yearAlbum
    display: flex
    align-items: center
    width: 100%
    padding-bottom: 100px
::v-deep .swiper-container
    max-width: 100%
.arrow
    border-radius: 100%
    opacity: 0.6
.closeModal
    position: absolute
    opacity: 0.6
    border-radius: 50%
    right: 16px
    top: 16px
    cursor: pointer
    width: 66px
    height: 66px
    @media( max-width: 870px)
        width: 24px
        height: 24px
</style>
