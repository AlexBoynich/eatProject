<template>
    <div class="favouriteBlock">
        <img src="/img/favouriteRestaurants/titleFavourites.svg" alt="Title" class="title">
        <div class="container">
            <div class="arrow_left_favourite"><img src="/img/slider/arrow.svg" alt="LastSlide" class="arrow"></div>
                <swiper :cleanup-styles-on-destroy="false" ref="mySwiper" :options="swiperOptions" class="swiper">
                    <swiper-slide
                    v-for="sliderItem in sliderList"
                    class="sliderItem"
                    >   
                        <a :href="sliderItem.link1"><img class="sliderItemImg1" :src=sliderItem.logo1 alt="Image"></a>
                        <a :href="sliderItem.link2"><img class="sliderItemImg2" :src=sliderItem.logo2 alt="Image"></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="arrow_right_favourite"><img src="/img/slider/arrow.svg" alt="NextSlide" class="arrow"></div>
            </div>
        </div>
 </template>
 
 <script>
   import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
   import 'swiper/css/swiper.css'
   import './styles.sass'
   import axios from 'axios'

   export default {
     name: 'FavouriteRestaurantsBlock',
     components: {
           Swiper,
           SwiperSlide
       },
     data() {
       return {
        sliderList: [],
         swiperOptions: {
         pagination: {
           el: '.swiper-pagination'
         },
         slidesPerView: 4,
         spaceBetween: 32,
         slidesPerGroup: 4,
         breakpoints: {
            1460: {
              slidesPerView: 6,
              spaceBetween: 120,
              slidesPerGroup: 6,
            },
            875: {
              slidesPerView: 4,
              spaceBetween: 72,
              slidesPerGroup: 4,
            },
          },
         // loop: true,
         loopFillGroupWithBlank: true,
           navigation: {
             nextEl: '.arrow_right_favourite',
             prevEl: '.arrow_left_favourite'
           },
       }
       }
     },
     mounted() {
      axios
      .get('/api/participants')
      .then( (favourites) => {
        this.sliderList=favourites.data.data.flatMap((_, i, a) => (i%2)
        ? []
        : {logo1: a[i].logo,link1: a[i].link, ...(a[i+1] && {logo2: a[i+1].logo, link2: a[i+1].link})})
        })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
     },
     
     computed: {
        swiper() {
          return this.$refs.mySwiper.$swiper
        },
      },
   }
 </script>

<style lang="sass" scoped>
.favouriteBlock
  padding: 40px 0 
  @media (max-width: 875px)
  padding: 40px 0 0
.container 
  display: flex
  justify-content: center
  align-items: center
  padding: 56px 80px 0
  @media (max-width: 1460px)
    padding: 56px 24px 0
  @media (max-width: 875px)
    padding: 24px 20px 0
.arrow_right_favourite
    transform: rotate(180deg)
.arrow_left_favourite, .arrow_right_favourite
  margin-bottom: 56px
  width: 80px
  height: 80px
  &:hover
    border-radius: 48px
    background: rgba(37, 89, 70, 0.1)
  &:active
    background: rgba(37, 89, 70, 0.3)
  @media (max-width: 875px)
    display: none
.title
    float: right
    width: 34%
    margin-left: -2px
    @media (max-width: 875px)
      width: 75%
.sliderItem
  display: flex
  flex-direction: column
  gap: 80px
  width: 160px
  @media (max-width: 875px)
    gap: 16px
    img 
      width: 100%
.sliderItemImg1, .sliderItemImg2
  cursor: pointer
  max-width: 160px
  height: 160px
  object-fit: contain
  @media (max-width: 870px)
    max-width: 56px
    height: 56px
    object-fit: contain
.swiper
  @media (max-width: 1460px)
    margin: 0 56px
  @media (max-width: 1460px)
    margin: 0 0
</style>