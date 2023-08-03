<template> 
    <div class="container block">
        <img :src="image" alt="" class="map">
        <div class="text">
            <h3 class="title">{{ title }}</h3>
            <p>{{text}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            text: '',
            image: '',
            title: '',
        }
    },
    mounted() {
        axios.get('https://festival-edy-dev.tomsk-it.ru/api/info/map')
        .then( (data) => {
        this.text=data.data.info.text
        this.image=data.data.info.image
        this.title=data.data.info.title
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
    overflow: inherit
    .map
        width: 100%
.text
    margin-left: 14vw
    margin-top: -8vw
    max-width: 677px
    @media (max-width: 1460px)
        margin: 16px 16px 0
        max-width: 1100px
    @media (max-width: 870px)
        max-width: 100%

    p
        font-size: 20px
        line-height: 24px
        @media (max-width: 870px)
            font-size: 14px
            font-weight: 400
            line-height: 16px
            letter-spacing: 0em
            text-align: left

.title
    font-size: 24px
    line-height: 28.44px
    margin-bottom: 32px
    @media (max-width: 980px)
        font-size: 16px
        font-weight: 600
        line-height: 19px
        letter-spacing: 0em
        text-align: left
    p
        font-size: 14px
        font-weight: 400
        line-height: 17px
        letter-spacing: 0em
        text-align: left


</style>