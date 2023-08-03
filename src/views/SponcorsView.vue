<template>
    <div class="sponcors">
        <img src="/img/sponcors/title.svg" alt="" class="title">
        <div class="sponcorsWithoutTitle">
            <div class="sponcorsSlider">
                <div class="arrow_left_sponcors"><img src=/img/slider/arrow.svg alt="" class="arrow"></div>
                <Swiper :options="swiperOptions" class="swiper">
                    <SwiperSlide v-for="(sliderItem, index) in sponcorsList" :key="index" class="swiperSlide">
                        <img :src=sliderItem.image class="sliderImg">
                    </SwiperSlide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </Swiper>
                <div class="arrow_right_sponcors"><img src=/img/slider/arrow.svg alt="" class="arrow"></div>
            </div>
            <button class="becameSponcor"><a href="https://docs.google.com/forms/d/e/1FAIpQLSeGtG3cA4Q2glTf1ZFQRUnPd1MW5hoap0MWibR0fERXzUc1qg/viewform">Стать спонсором</a></button>
        </div>
    </div>
  </template>

  
 <script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
    data() {
        return {
        sponcorsList: [
        ],
        swiperOptions: {
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction'
            },
            initialSlide: 1,
            // wrapperClass: 'wrapper',
            slidesPerView: 1,
            loop: true,
            navigation: {
                nextEl: '.arrow_right_sponcors',
                prevEl: '.arrow_left_sponcors'
            },
        }
    }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    mounted() {
        axios
      .get('https://festival-edy-dev.tomsk-it.ru/api/sponsors_slides')
      .then( (sponcors) => {
        this.sponcorsList= sponcors.data.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
}
  </script>

<style scoped lang="sass">
.sponcors
    display: flex
    flex-direction: column
    .swiper-pagination-fraction
        font-family: 'Gilroy'
.sponcorsSlider
    display: flex
    flex-direction: row
    align-items: center
    margin-top: 56px
.sponcorsWithoutTitle
    display: flex
    flex-direction: column
    margin: 0 80px 80px 80px
    gap: 56px
    @media (max-width: 875px)
        margin: 0 16px 40px 16px
        gap: 32px
.swiper
    margin: 0 150px
    @media (max-width: 1200px)
        margin: 0 80px
    @media (max-width: 875px)
        margin: 0
.sliderImg
    width: 100%
    cursor: pointer

.title
    display: flex
    width: 34%
    border-radius: 0 48px 48px 0
    margin: 80px 0 0
    float: left
    align-items: center
    justify-content: center
    color: #FFF
    @media (max-width: 875px)
        width: 75%
        border-radius: 0 24px 24px 0
        margin: 40px 0 0
.arrow_right_sponcors
    rotate: 180deg
.arrow_right_sponcors, .arrow_left_sponcors
    margin-top: -56px
    &:hover
        border-radius: 48px
        background: rgba(37, 89, 70, 0.1)
    &:active
        background: rgba(37, 89, 70, 0.3)
    @media (max-width: 870px)
        display: none
.arrow
    cursor: pointer
.becameSponcor
    padding: 16px
    border: 2px solid #255946
    border-radius: 8px
    margin-right: auto
    margin-left: auto
    a
        text-decoration: none
        color: #0A1A14
    @media (max-width: 875px)
        padding: 8px
</style>
  