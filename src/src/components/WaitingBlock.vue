<template>
    <div class="container">
        <img src="/img/waiting/titleWaiting.png" alt="Title" class="title">
        <div class="block">
            <div class="card"
        v-for="(event, index) in eventList"
        :class="`event${index}`"
        >
                <img :src=event.link alt="Image" class="eventPhoto">
                <h3 class="eventTitle">{{event.title}}</h3>
                <p class="text description" >{{ event.text }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default{
    data() {
        return {
            eventList: [
            ]
        }
    },
         mounted() {
      axios
      .get('/api/info/block1')
      .then( (event1) => {
        this.$set(this.eventList, 0,{link: event1.data.info.image, title: event1.data.info.title , text: event1.data.info.text ,} )
        })
      .catch(function (error) {
        // handle error
        console.log(error);
      }),
      axios
      .get('/api/info/block2')
      .then( (event2) => {
        this.$set(this.eventList, 1,{link: event2.data.info.image, title: event2.data.info.title , text: event2.data.info.text ,} )
        })
      .catch(function (error) {
        // handle error
        console.log(error);
      }) ,
      axios
      .get('/api/info/block3')
      .then( (event3) => {
        this.$set(this.eventList, 2,{link: event3.data.info.image, title: event3.data.info.title , text: event3.data.info.text ,} )
        })
      .catch(function (error) {
        // handle error
        console.log(error);
      }) ,
      axios
      .get('/api/info/block4')
      .then( (event4) => {
        this.$set(this.eventList, 3,{link: event4.data.info.image, title: event4.data.info.title , text: event4.data.info.text ,} )
        })
      .catch(function (error) {
        // handle error
        console.log(error);
      }) ,
      axios
      .get('/api/info/block5')
      .then( (event5) => {
        this.$set(this.eventList, 4,{link: event5.data.info.image, title: event5.data.info.title , text: event5.data.info.text ,} )
        })
      .catch(function (error) {
        // handle error
        console.log(error);
      }) ,
      axios
      .get('/api/info/block6')
      .then( (event6) => {
        this.$set(this.eventList, 5,{link: event6.data.info.image, title: event6.data.info.title , text: event6.data.info.text ,} )
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
    display: flex
    flex-direction: column
.card
    display: flex
    flex-direction: column
    border-radius: 48px
    align-items: center
    max-width: 540px
    overflow: hidden
.block
    display: grid
    padding: 0 120px 40px
    gap: 24px 24px
    justify-content: center
    grid-template-columns: minmax(auto, 540px) minmax(auto, 540px) minmax(auto, 540px)
    grid-template-rows: 2.91fr 0.9fr 2.91fr
    @media (max-width: 1460px)
        grid-template-rows: auto auto
        padding: 0 80px 40px
        grid-template-rows: minmax(auto, 614px) minmax(auto, 614px)
    @media (max-width: 875px)
        padding: 0 16px 0
        grid-template-columns: 328px
        grid-template-rows: 450px 450px 450px 450px 450px 450px

.event0
    border: 2px solid $main-orange
    grid-row-start: 1
    grid-row-end: 2
    .eventPhoto
        height: 427px
        @media (max-width: 1460px)
            max-height: 423px
            height: 81%
        @media (max-width: 875px)
            height: 314px
    .eventTitle
        background: $main-orange
    @media (max-width: 1460px)
        grid-row-start: 1
        grid-row-end: 2
    @media (max-width: 875px)
        grid-row-start: 1
        grid-row-end: 2
.event1
    border: 2px solid $main-green
    grid-row-start: 1
    grid-row-end: 3
    .eventPhoto
        height: 645px
        @media (max-width: 1460px)
            height: 81%
            max-height: 423px
        @media (max-width: 875px)
            height: 314px
    .eventTitle
        background: $main-green
    @media (max-width: 1460px)
        grid-row-start: 1
        grid-row-end: 2
    @media (max-width: 875px)
        grid-row-start: 2
        grid-row-end: 3
.event2
    border: 2px solid $main-yellow
    grid-row-start: 1
    grid-row-end: 2
    h3
        color: rgba(10, 26, 20, 1)
    .eventPhoto
        height: 427px
        @media (max-width: 1460px)
            height: 81%
            max-height: 423px
        @media (max-width: 875px)
            height: 314px
    .eventTitle
        background: $main-yellow
    @media (max-width: 1460px)
        grid-row-start: 1
        grid-row-end: 2
    @media (max-width: 875px)
        grid-row-start: 3
        grid-row-end: 4
.event3
    border: 2px solid $main-yellow
    grid-row-start: 2
    grid-row-end: 4
    h3
        color: rgba(10, 26, 20, 1)
    .eventPhoto
        height: 645px
        @media (max-width: 1460px)
            height: 81%
            max-height: 423px
        @media (max-width: 875px)
            height: 330px
    .eventTitle
        background: $main-yellow
    @media (max-width: 1460px)
        grid-row-start: 2
        grid-row-end: 3
    @media (max-width: 875px)
        grid-row-start: 4
        grid-row-end: 5
.event4
    border: 2px solid $main-orange
    grid-row-start: 3
    grid-row-end: 4
    .eventPhoto
        height: 427px
        @media (max-width: 1460px)
            height: 81%
            max-height: 423px
        @media (max-width: 875px)
            height: 330px
    .eventTitle
        background: $main-orange
    @media (max-width: 1460px)
        grid-row-start: 2
        grid-row-end: 3
    @media (max-width: 875px)
        grid-row-start: 5
        grid-row-end: 6
.event5
    border: 2px solid $main-green 
    grid-row-start: 2
    grid-row-end: 4
    .eventPhoto
        height: 645px
        @media (max-width: 1460px)
            height: 81%
            max-height: 423px
        @media (max-width: 875px)
            height: 314px
    .eventTitle
        background: $main-green 
    @media (max-width: 1460px)
        grid-row-start: 2
        grid-row-end: 3
    @media (max-width: 875px)
        grid-row-start: 6
        grid-row-end: 7

.title
    display: flex
    width: 34%
    border-radius: 0 48px 48px 0
    margin: 80px 0 64px
    float: left
    align-items: center
    justify-content: center
    color: #FFF
    margin-left: -2px
    @media (max-width: 875px)
        width: 75%
        border-radius: 0 24px 24px 0
        margin: 40px 0 24px
.text
    max-width: 426px
    text-align: center
    padding: 32px 24px
    @media (max-width: 1460px)
        padding: 24px 12px
.eventPhoto
    width: 100%
    object-fit: cover

.eventTitle
    display: flex
    justify-content: center
    align-items: center
    font-size: 24px
    font-weight: 600
    line-height: 29px
    letter-spacing: 0em
    text-align: center
    height: 64px
    border-radius: 0 0 48px 48px
    width: 100%
    color: #FFF
    @media (max-width: 870px)
        height: 40px
        font-size: 16px
        font-weight: 600
        line-height: 19px
.yellow
    border: 2px solid $main-yellow
    background: $main-yellow
.orange
    border: 2px solid $main-orange
    background: $main-orange
.green
    border: 2px solid $main-green
    background: $main-green
.description
    height: 130px
    @media (max-width: 1460px)
        height: 127px
    @media (max-width: 875px)
        height: 80px
</style>