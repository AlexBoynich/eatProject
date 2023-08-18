<template>
  <div>
    <div class="overlay" :class="{'active': menuIsShow}"></div>
      <ul :class="{'active': menuIsShow}"
          >
            <li v-for="navItem in navList" @click="toggleMenu();"
            ><router-link
                  :to=navItem.link
                  class="navItem"
                  @click="toggleMenu();"
                  >{{ navItem.title }}</router-link></li>
            <li @click="toggleMenu();"><router-link to="/participants" class="participants specialNavItem">ЗАВЕДЕНИЯМ</router-link></li>
            <li @click="toggleMenu(); "><router-link to="/sponcors" class="lastPage specialNavItem">СПОНСОРАМ</router-link></li>
            <li @click="toggleMenu(); replace('https://vk.com/festival_est')"><a :href="vk" class="vkLogoMobile"><img src="/img/header/vkLogoBlack.svg" alt="Vk"></a></li>
    </ul>
    <div class="container header">
      <header class="header"  :class="{backgroundNone: menuIsShow}">
        <div class="desktop">
          <div class="date">
          <h6 class="date1">{{date1}}</h6>
          <h5 class="date2"><span v-html="date2"></span></h5>
        </div>
        <img :src="letoLogo" alt="Логотип ТРК 'Лето'" class="letoLogo" @click="replace(letoLink)">
        <nav class="nav"
        ><router-link
        v-for="navItem in navList"
        @click='toggleActive(navItem.title)'
        :class="{'activeNav': navItem.title===active}"
        :to=navItem.link
        class="navItem"
        >{{ navItem.title }}</router-link>
        </nav>
        <div class="nav2">
          <router-link to="/participants" class="participants specialNavItem">ЗАВЕДЕНИЯМ</router-link>
          <router-link to="/sponcors" class="lastPage specialNavItem">СПОНСОРАМ</router-link>
        </div>
        <img src="/img/header/vkLogo.svg" alt="Vk" class="vkLogo" @click="replace(vk)">

        </div>
        <div class="mobile background">
          <div class="date">
            <h6>{{ date1 }}</h6>
            <h5><span v-html="date2"></span></h5>
            <h3 class="titleHeaderMobile">{{date1}} <span v-html="date2"></span></h3>
          </div>
          <img :src="letoLogo" alt="Logo" :class="{displayNone: menuIsShow}" class="letoLogoMobile" @click="replace(letoLink)">
          <img :src="`/img/header/${menuIsShow ? 'burgerClose' : 'burger'}.svg`"  alt="NavMenu" :class="{'active burger': !menuIsShow, 'closeBurger' : menuIsShow}" @click="toggleMenu()">
        </div>
      </header>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'Header',
    data() {
      return {
        navList: [
          {title: 'О ФЕСТИВАЛЕ', link: '/'},
          {title: 'ПРОГРАММА', link: '/program'},
          {title: 'ГАЛЕРЕЯ', link: '/gallery'},
          {title: 'КОНТАКТЫ', link: '/contacts'},
        ],
        active: '',
        menuIsShow: false,
      }
    },
    props: ['date1','date2', 'place','vk', 'letoLogo', 'letoLink'],
    methods: {
      toggleMenu() {
        this.menuIsShow=!this.menuIsShow
      },
      disableScroll() {
        const main = document.querySelector('main')
        if (main) {
          main.classList.add('disableScroll')
        }
        document.querySelector('footer').classList.add('disableScrollHeaderAndFooter')
        document.querySelector('.header').classList.add('disableScrollHeaderAndFooter')
      },
      toggleActive(data) {
        this.active= data
      },
      ableScroll() {
        const main = document.querySelector('main')
        if (main) {
          main.classList.remove('disableScroll')
        }
        document.querySelector('footer').classList.remove('disableScrollHeaderAndFooter')
        document.querySelector('.header').classList.remove('disableScrollHeaderAndFooter')
      },
      replace(link){
            window.location.href= `${link}`
        },

    }
  }
</script>

<style lang="sass" scoped>
@import '../variables.sass'
.router-link-exact-active
  font-weight: 600
.overlay
  display: none
  pointer-events: auto
  background: #00000033
  border-radius: inherit
  bottom: 0
  left: 0
  opacity: .32
  position: fixed
  right: 0
  top: 0
  z-index: 2
.active
  display: block
ul
  display: none
  position: fixed
  list-style-type: none
  padding-top: 100px
  height: 100vh
  width: 44vw
  top: 0
  right: 0
  background: #FFF
  z-index: 2
  @media (max-width: 875px )
    width: 74vw
    padding-top: 50px
  li
    display: flex
    justify-content: center
  a
    text-decoration: none
    color: $color-text
    font-size: 16px
    font-weight: 400
    line-height: 19px
    letter-spacing: 0em
    text-align: left
    margin: 4px 0
    .specialNavItem
      border: 2px solid $main-green
      border-radius: 8px
      padding: 8px
.container
  position: fixed
  top: 0
  background: #fff
  z-index: 2
  @media (max-width: 1460px )
    width: 100%
  .header
    height: 100px
    @media (max-width: 1460px )
      // background: url('@/assets/img/letoLogo.svg')
      // background-repeat: no-repeat
      // background-size: 90px 50px
      // background-position: center
    @media (max-width: 875px )
      height: 50px

.desktop
  display: flex
  height: 100px
  align-items: center
  justify-content: space-around
  @media (max-width: 1460px )
    display: none
  .date
    display: flex
    justify-content: center
    align-items: center
    @media (max-width: 1460px )
      display: none
  .date1

  .date2
    margin: 0 0 0 24px
  .letoLogo
    width: 144px
    height: 100px
    cursor: pointer
  nav
    @media (max-width: 1460px )

    a
      padding: 16px 16px
      font-size: 1.2em
      border-radius: 8px
  a
    text-decoration: none
    color: $color-text
    font-size: 1.2em
    line-height: 24px
  .navItem
    white-space: nowrap
    border-radius: 8px
    &:hover
      background: rgba(37, 89, 70, 0.1)
    &:active
      background: rgba(37, 89, 70, 0.3)
  .specialNavItem
    border: 2px solid $main-green
    border-radius: 8px
    padding: 16px
  .lastPage
    margin-left: 16px
  .vkLogo
    width: desktopSize(56)
    cursor: pointer
    @media (max-width: 1460px )
      display: none
.mobile
  display: none
  height: 100px
  .date
    display: flex
    h5
      margin-left: 30px
    h5,h6
      @media (max-width:870px )
        display: none
  @media (max-width: 1460px )
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    padding: 26px 80px 
  @media (max-width:870px )
    padding: 0 16px
    height: 50px
    h3
      display: block
    h5
      display: inline
      font-size: 24px
      font-weight: 600
      line-height: 29px
      letter-spacing: 0em
      text-align: left
      margin: 0 56px 0 24px
    .titleHeaderMobile
      font-family: 'Gilroy'
      font-size: 10px
      font-weight: 600
      line-height: 12px
      letter-spacing: 0em
      text-align: center

    .burger
      width: 40px
      height: 33px
      z-index: 3
      right: 20px
      &:hover
        cursor: pointer
    .closeBurger
      width: 40px
      height: 33px
      position: fixed
      z-index: 3
      right: 2%
      &:hover
        cursor: pointer
.vkLogoMobile
  margin-top: 16px
  padding: 0
  .active
    display: block
  @media (max-width: 875px )
    height: 50px
    padding: 16px 16px
    .mobile
    .titleHeaderMobile
      @media (max-width: 875px )
          display: inline
    h6, h5
        display: none
.specialNavItem
  border: 2px solid $main-green
  border-radius: 8px
  padding: 16px
  margin: 8px
  &:hover
    background: rgba(37, 89, 70, 0.1)
  &:active
    background: rgba(37, 89, 70, 0.3)
.header>.backgroundNone
  @media (max-width: 875px )
    background: none
.letoLogoMobile
  width: 128px
  height: 54px
  margin-left: -21%
  cursor: pointer
  @media (max-width: 875px )
    margin-left: -8%
    width: 56px
    height: 24px
.displayNone
  display: none
a
  padding: 16px
  border-radius: 8px
  &:hover
    background: rgba(37, 89, 70, 0.1)
  &:active
    background: rgba(37, 89, 70, 0.3)
    @media (max-width: 875px )
    &:hover
      background: none
    &:active
      background: none
.titleHeaderMobile
  display: none
</style>
  