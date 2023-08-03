<template>
    <div class="participants">
        <img src="/img/participants/title.svg" alt="" class="title">
        <div class="participantsWithoutTitle">
            <div class="participantsSlider">
                <div class="arrow_left_participants"><img src=/img/slider/arrow.svg alt="" class="arrow"></div>
                <Swiper :options="swiperOptions" class="swiper">
                    <SwiperSlide v-for="(sliderItem, index) in participantsList" :key="index" class="swiperSlide">
                        <img :src=sliderItem.image class="sliderImg">
                    </SwiperSlide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </Swiper>
                <div class="arrow_right_participants"><img src=/img/slider/arrow.svg alt="" class="arrow"></div>
            </div>
            <div class="steps">
                <Step
                :step="step"
                v-for="step in stepList"
                />
            </div>
        </div>
    </div>
  </template>
  
  <script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Step from '@/components/participants/Step.vue'
import axios from 'axios'

export default {
    data() {
        return {
        stepList: [
            {logo: '/img/participants/step1.svg', text: 'Подать заявку и дождаться звонка менеджера', button: 'Стать участником', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdQUWmsh4_gJgj0jJ4geCYnfYNORGfKUjFjZs3vmkTKLyDM2A/viewform'},
            {logo: '/img/participants/step2.svg', text: 'Отправить информацию о вашем заведении', button: 'Всё для SMM', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdPVEK7WqHnaZtLeJpE_zr9KAgJhglSR-UWKPvVoyBCB1Fkew/viewform'},
            {logo: '/img/participants/step3.svg', text: 'Составить технический райдер для фестиваля', button: 'Техническая заявка', link: 'https://docs.google.com/forms/d/e/1FAIpQLSdEwsdZDwiDLe3yQIi9oPbhmXZ2z9iw_Dzsw_QNNAWA3cRLNA/viewform?vc=0&c=0&w=1&flr=0'},
        ],
        participantsList: [

        ],
        swiperOptions: {
            pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction'
                }  ,
            slidesPerView: 1,
            initialSlide: 1,
            loop: true,
            navigation: {
                nextEl: '.arrow_right_participants',
                prevEl: '.arrow_left_participants'
            },
        }
    }
    },
    components: {
        Swiper,
        SwiperSlide,
        Step,
    },
    mounted() {
        axios
      .get('https://festival-edy-dev.tomsk-it.ru/api/participants_slides')
      .then( (participants) => {
        this.participantsList= participants.data.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
}
  </script>

<style scoped lang="sass">
.participants
    .swiper-pagination-fraction
        font-family: 'Gilroy'
.participants
    display: flex
    flex-direction: column
.participantsSlider
    display: flex
    flex-direction: row
    align-items: center
    margin-top: 56px
    @media (max-width: 875px)
    margin-top: 32px
.participantsWithoutTitle
    display: flex
    flex-direction: column
    margin: 0 80px
    @media (max-width: 875px)
        margin: 0 16px
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
.steps
    display: flex
    flex-direction: row
    padding: 56px 0 40px
    justify-content: space-around
    gap:10px
    @media (max-width: 875px)
        flex-direction: column
        gap: 32px
        align-items: center
.arrow_right_participants
    rotate: 180deg
.arrow_right_participants, .arrow_left_participants
    margin-top: -56px
    &:hover
        border-radius: 48px
        background: rgba(37, 89, 70, 0.1)
    &:active
        background: rgba(37, 89, 70, 0.3)
    @media (max-width: 875px)
        display: none
.arrow
    cursor: pointer
</style>
  