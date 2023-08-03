<template>
    <div class="sponcorsBlock">
        <img src="/img/sponcors/titleSponcors.svg" alt="" class="title">
        <div class="container">
            <div class="arrow_left_sponcors"><img src="/img/slider/arrow.svg" alt="" class="arrow"></div>
                <swiper :cleanup-styles-on-destroy="false" ref="mySwiper" :options="swiperOptions">
                    <swiper-slide
                    v-for="sliderItem in sponcorsList"
                    class="sliderItem"
                    >   
                        <a v-if="sliderItem.link1" :href="sliderItem.link1"><img class="sliderItemImg1" :src=sliderItem.logo1 alt="" ></a>
                        <a v-if="sliderItem.link2" :href="sliderItem.link2"><img class="sliderItemImg2" :src=sliderItem.logo2 alt=""></a>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
                <div class="arrow_right_sponcors"><img src="/img/slider/arrow.svg" alt="" class="arrow"></div>
            </div>
        </div>
 </template>
 
 <script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import './styles.sass'
import axios from 'axios'

   export default {
     name: 'sponcorsBlock',
     components: {
           Swiper,
           SwiperSlide
       },
     data() {
       return {
        sponcorsList: [],
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
             nextEl: '.arrow_right_sponcors',
             prevEl: '.arrow_left_sponcors'
           },
       },
        }
     },
     
     computed: {
        swiper() {
          return this.$refs.mySwiper.$swiper
        },
      },

     mounted() {
        axios.get('https://festival-edy-dev.tomsk-it.ru/api/sponsors')
        .then( (sponcors) => {
          this.sponcorsList=sponcors.data.data.flatMap((_, i, a) => (i%2)
        ? []
        : {logo1: a[i].logo,link1: a[i].link, ...(a[i+1] && {logo2: a[i+1].logo, link2: a[i+1].link})})
        
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        },
   }
 </script>

<style lang="sass" scoped>
.sponcorsBlock
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
    padding: 24px 40px 0
.arrow_right_sponcors
    transform: rotate(180deg)
.arrow_right_sponcors, .arrow_left_sponcors
  margin-bottom: 56px
  &:hover
    border-radius: 48px
    background: rgba(37, 89, 70, 0.1)
  &:active
    background: rgba(37, 89, 70, 0.3)
  @media (max-width: 875px)
    display: none
.title
  float: left
  width: 34%
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
</style>