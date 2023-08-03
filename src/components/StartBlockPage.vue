<template>
    <div class="container">
        <img :src="desktopBanner" alt="" class="ellipses">
        <img :src="mobileBanner" alt="" class="ellipsesMobile">
    </div>
</template>

<script>
import axios from 'axios';
export default{
    data() {
        return {
            logo: '',
            mobileBanner: '',
            desktopBanner: ''
        }
    },  
    mounted() {
        axios.get('https://festival-edy-dev.tomsk-it.ru/api/info/mobileBanner')
        .then( (item) => {
        this.mobileBanner=item.data.info.image
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }),
      axios.get('https://festival-edy-dev.tomsk-it.ru/api/info/desktopBanner')
        .then( (item) => {
        this.desktopBanner=item.data.info.image
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
}
</script>

<style lang="sass" scoped>
@import '../variables.sass'
.container
    width: 100%
    height: 42vw
    background: url('@/assets/img/backgroundImg.svg')
    position: relative
    background-size: contain
    @media (max-width: 875px)
        background: url('@/assets/img/backgroundMobile.svg')
        height: 126vw 
        background-size: cover
    .pureDiv
        height: 110px
    .ellipses
        width: 100%
        @media (max-width: 875px)
            display: none
    .ellipsesMobile
        width: 100%
        display: none
        @media (max-width: 875px)
            display: block
    .date
        position: absolute
        text-align: center
        color: #FFF
        z-index: 1
        top: 10%
        right:30%
        h1
            font-size: 136px
            font-weight: 600
            line-height: 162px
            letter-spacing: 0em
            text-align: left
        h3
            font-size: 56px
            font-weight: 600
            line-height: 67px
            letter-spacing: 0em
            text-align: left
    .place
        position: absolute
        text-align: center
        color: #FFF
        z-index: 1
        top: 24%
        width: auto
        left: 10%
        h2
            font-size: 96px
            font-weight: 600
            line-height: 115px
            letter-spacing: 0em
            text-align: left

        h4
            font-size: 40px
            font-weight: 600
            line-height: 48px
            letter-spacing: 0em
            text-align: left
    .whiteEllipseContent
        position: absolute
        text-align: center
        color: #0A1A14
        z-index: 1
        top: 11%
        width: auto
        left: 23%
        h4
            font-size: 20px
            font-weight: 600
            line-height: 24px
            letter-spacing: 0em
            margin-bottom: 32px

        .eatLogo


    .background
        width: 100%
        height: 100%
    .biggerEllipse
        position: absolute
        margin-top: -500px
        width: 1480px
        height: 1080px
    .image 
        width: 100%
    .white
        position: absolute
        top: 0
        right: 0
        width: 43%
    .red
        position: absolute
        left: 152px
        top: 295px
        width: 38%
    .green
        position: absolute
        width: 26%

</style>