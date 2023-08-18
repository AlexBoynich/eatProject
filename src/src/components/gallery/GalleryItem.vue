<template>
    <div class="galleryItemBlock">
        <div class="yearAndButton">
            <h3 class="year">{{ galleryItem.year }}</h3>
            <a class="vkGroup" :href="galleryItem.vkGroup">Все фото</a>
        </div>
        <div class="yearAlbum">
            <div class="arrow_left_gallery"><img src='/img/slider/arrow.svg' alt="LastSlide" class="arrow"></div>
            <Swiper  :cleanup-styles-on-destroy="false"  :options="swiperOptions" class="swiper">
                <SwiperSlide v-for="(sliderItem, index) in galleryItem.list" :options="swiperOptions" class="swiperSlide">
                    <img :src=sliderItem.link1 alt="Image" :id="index" class="sliderImg" @click="openModalSlider(sliderItem.link1);">
                    <img :src=sliderItem.link2 alt="Image" class="sliderImg" @click="openModalSlider(sliderItem.link2);">
                </SwiperSlide>
                <div class="swiper-pagination" slot="pagination"></div>
            </Swiper>
            <div class="arrow_right_gallery"><img src='/img/slider/arrow.svg' alt="NextSlide" class="arrow"></div>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import './styles.sass'

export default {
  props: ['galleryItem'],
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      modalSlider: false,
      activeSlide: 0, 
      indexOfGallery: 0,
      swiperOptions: {
      pagination: {
        el: '.swiper-pagination'
      },
      slidesPerView: 1,
      breakpoints: {
        1460: {
          slidesPerView: 2,
          spaceBetween: 124,
          slidesPerGroup: 2,
        },
        1250: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        875: {
          slidesPerView: 2,
          spaceBetween: 72,
          slidesPerGroup: 2,
        },
      },
      loop: true,
      navigation: {
        nextEl: '.arrow_right_gallery',
        prevEl: '.arrow_left_gallery'
      },
      // Some Swiper option/callback...
      },
    }
    },
    computed: {
    },
    methods: {
      openModalSlider(src) {
        this.$emit('on-click', src)
      },
  }
}
</script>

<style lang="sass" scoped>
.swiper
  margin: 0 120px
  @media (max-width: 870px)
    margin: 0
.sliderItemModalImg
  width: 100%
.modalSlider 
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background: rgba(255,255,255,.5)
  padding: 20px 150px
  z-index: 10
.sliderImg
    width: 100%
    aspect-ratio: 16/9
    cursor: pointer
    object-fit: cover
.arrow_right_gallery
    transform: rotate(180deg)
.arrow_right_gallery, .arrow_left_gallery
  margin-bottom: 56px
  width: 80px
  height: 80px
  &:hover
    border-radius: 50%
    background: rgba(37, 89, 70, 0.1)
  &:active
    background: rgba(37, 89, 70, 0.3)
  @media (max-width: 875px)
    display: none
.sliderBlock
    max-width: 80%
    display: flex
    align-items: center
.yearAlbum
  display: flex
  align-items: center
  padding: 80px
  @media (max-width: 870px)
    padding: 16px
.yearAndButton
    display: flex
    flex-direction: row
    justify-content: space-between
    padding:0 120px
    width: 100%
    max-width: 1920px
    @media( max-width: 870px)
      padding: 0 16px
.block
  padding: 56px 80px
.vkGroup
  border: 2px solid #255946
  padding: 16px
  border-radius: 8px
  text-decoration: none
  color: #0A1A14
  line-height: inherit
  &:hover
    background: rgba(37, 89, 70, 0.1)
  &:active
    background: rgba(37, 89, 70, 0.3)
  @media( max-width: 870px)
    padding: 8px
.swiperSlide
  display: flex
  flex-direction: column
  gap: 124px
  @media (max-width: 870px)
    gap: 16px
</style>
