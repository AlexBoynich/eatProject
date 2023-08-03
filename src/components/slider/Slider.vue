<template>
     <div class="container">
      <div class="arrow_left"><img src="/img/slider/arrow.svg" alt="" class="arrow"></div>
        <swiper  :cleanup-styles-on-destroy="false" ref="mySwiper" :options="swiperOptions" class="swiper">
          <swiper-slide
          v-for="sliderItem in teamList"
          class="sliderItem"
          >
          <div class="card">
            <img class="sliderItemImg1" :src=sliderItem.link1 alt="">
            <h3 class="name1"> {{ sliderItem.second_name1 }} {{ sliderItem.name1 }}</h3>
            <p class="post1">{{ sliderItem.post1 }}</p>
          </div>
          <div class="card">
            <img class="sliderItemImg2" :src=sliderItem.link2 alt="">
            <h3 class="name2">{{ sliderItem.second_name2 }} {{ sliderItem.name2 }}</h3>
            <p class="post2">{{ sliderItem.post2 }}</p>
          </div>
          </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      <div class="arrow_right"><img src="/img/slider/arrow.svg" alt="" class="arrow"></div>
    </div>
  </template>
  
  <script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import './styles.sass'
    import axios from 'axios'

    export default {
      name: 'Slider',
      components: {
            Swiper,
            SwiperSlide
        },
      data() {
        return {

          teamList: [],
          swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
          breakpoints: {
            1460: {
              slidesPerView: 5,
              spaceBetween: 72,
              slidesPerGroup: 5,
            },
            1250: {
              slidesPerView: 4,
              spaceBetween: 56,
              slidesPerGroup: 4,
            },
            875: {
              slidesPerView: 3,
              spaceBetween: 36,
              slidesPerGroup: 3,
            },
          },
          // loop: true,
          loopFillGroupWithBlank: true,
            navigation: {
              nextEl: '.arrow_right',
              prevEl: '.arrow_left'
            },
          // Some Swiper option/callback...
        }
        }
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.$swiper
        },
      },
      mounted() {
      axios
      .get('https://festival-edy-dev.tomsk-it.ru/api/staff')
      .then( (team) => {
        this.teamList=team.data.data.flatMap((_, i, a) => (i%2)
        ? []
        : {link1: a[i].image,name1: a[i].name,post1: a[i].role,second_name1: a[i].second_name, ...(a[i+1] && {link2: a[i+1].image, name2: a[i+1].name, post2: a[i+1].role, second_name2: a[i+1].second_name})})
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
    }
  </script>

<style lang="sass" scoped>
.container 
  display: flex
  justify-content: center
  align-items: center
  padding: 56px 4.1vw 0
  @media (max-width: 875px)
    padding: 24px 3vw 0
.swiper
  margin: 0 56px
  @media (max-width: 875px)
    margin: 0
.arrow_right
  transform: rotate(180deg)
.arrow_right, .arrow_left
  margin-bottom: 112px
  &:hover
    border-radius: 48px
    background: rgba(37, 89, 70, 0.1)
  &:active
    background: rgba(37, 89, 70, 0.3)
  @media (max-width: 875px)
    display: none
.card
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  max-width: 240px
  @media (max-width: 875px)
    padding: 16px 0
  h3
    font-size: 24px
    font-weight: 600
    line-height: 29px
    letter-spacing: 0em
    text-align: center
    color: #255946
    margin: 32px 0 10px
    @media (max-width: 1200px)
      max-width: 150px
    @media (max-width: 875px)
      font-size: 14px
      font-weight: 400
      line-height: 16px
      letter-spacing: 0em
      text-align: center


  p
    font-size: 20px
    font-weight: 400
    line-height: 23px
    letter-spacing: 0em
    text-align: center
    color: #B8BDBD
    min-height: 69px
    @media (max-width: 1200px)
      max-width: 220px
    @media (max-width: 875px)
      font-size: 14px
      font-weight: 400
      line-height: 16px
      letter-spacing: 0em
      text-align: center
      min-height: 32px
.sliderItemImg1, .sliderItemImg2
  width: 100%
  aspect-ratio: 1/1
  border-radius: 50%
  object-fit: cover
  @media (max-width: 875px)
    width: 29vw
    height: 29vw
.sliderItem
  display: grid
  flex-direction: column
  gap: 112px
  grid-template-rows: 1fr 1fr
  @media (max-width: 875px)
    gap: 16px
.name1, .name2
  min-height: 58px
  @media (max-width: 875px)
    min-height: 32px
.post1
  min-height: 69px
</style>