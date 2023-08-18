<template>
    <div class="footerColor">
      <footer class="footer container">
        <div class="date">
          <h6 class="date1">{{date1}}</h6>
          <h5 class="date2"><span v-html="date2"></span></h5>
          <p class="smallText">{{date1}} <span v-html="date2"></span></p>
        </div>
        <img :src="letoLogo" alt="Logo" class="letoLogo" @click="replace(letoLink)">

        <a :href="vk"><img src="/img/footer/vkLogoFooter.svg" alt="Vk" class="vkLogo"></a>
      </footer>
    </div>
  </template>
  
<script>
  export default {
    name: 'Footer',
    data() {
      return {
        tableList: [
          {post:'Спонсоры и продвижение', director: 'Абдрашитова Дарья' , phoneNumber: '8 (964) 090 73-38',},
          {post: 'Общие вопросы', director: 'Березина Оксана', phoneNumber: '8 (913) 862 14-35',},
        ]
      }
    },
    methods: {
        replace(link){
            window.location.href= `${link}`
        }
     },
     props: ['date1','date2', 'place','adress', 'vk','letoLogo', 'letoLink'],
  }
</script>

<style lang="sass" scoped>
@import '../variables.sass'
// @import url('@/stylesApp.sass')
.container
  width: 88%
.footerColor
  background: $main-green
  height: 200px
  @media (max-width: 875px )
    height: 56px
.footer
  display: flex
  flex-direction: row
  flex-wrap: wrap
  justify-content: space-between
  align-items: center
  height: 200px
  color: #FFF
  // background-image: url('@/assets/img/letoLogo.svg')
  // background-position: center
  // background-size: 188px 80px
  @media (max-width: 875px )
    height: 56px
    background-size: 76px 62px
  
  // width: 100%
  .date
    display: flex
    justify-content: center
    align-items: center
    .smallText
      display: none
      @media (max-width: 875px )
        display: inline
        font-size: 10px
        font-weight: 600
        line-height: 12px
        letter-spacing: 0em
        text-align: center
    .date1,.date2
      @media (max-width: 875px )
        display: none
.vkLogo
  @media (max-width: 875px )
    width: 24px
    height: 24px
.date1
  margin-right: 24px
.letoLogo
  width: 280px
  height: 118px
  margin-left: -8%
  cursor: pointer
  @media (max-width: 1460px )
    width: 191px
    height: 80px
    margin-left: -14%
  @media (max-width: 875px )
    width: 56px
    height: 24px

</style>
  