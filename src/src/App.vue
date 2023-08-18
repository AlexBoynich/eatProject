<template>
  <main class="app">
    <Header
    :date1="date1"
    :date2="date2"
    :place="place"
    :vk="vk"
    :letoLink="letoLink"
    :letoLogo="letoLogo"
    />
    <router-view/>
    <Cookies 
    class="cookiesBlock" 
    :warning="warning" 
    @setWarning="setWarning"
    v-if="!warning"/>
    <Footer
    :date1="date1"
    :date2="date2"
    :place="place"
    :adress="adress"
    :vk="vk"
    :letoLogo="letoLogo"
    :letoLink="letoLink"/>
  </main>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Cookies from './components/Cookies.vue'
import axios from 'axios'



export default {
  name: 'App',

  data () {
    return {
      warning: '',
      date1: '',
      date2: '',
      place: '',
      adress: '',
      vk: '',
      letoLink: '',
      letoLogo: '',
    }
  },
  components: {
    Header,
    Footer,
    Cookies,
  },
  methods: {
    setWarning() {
      localStorage.warning='true'
      this.warning='true'
    }
  },
  mounted() {
      if(localStorage.warning){
        this.warning=localStorage.warning
      }
      axios
      .get('/api/info/header')
      .then( (date) => {
        this.date1=date.data.info.title
        this.date2=date.data.info.text
        this.letoLogo=date.data.info.image
        this.letoLink=date.data.info.link
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      axios
      .get('/api/info/place')
      .then( (place) => {
        this.place=place.data.info.title
        this.adress=place.data.info.text
      }),
      axios
      .get('/api/info/vk_link')
      .then( (vk) => {
        this.vk=vk.data.info.link
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },
  };
</script>

<style lang="sass">
@import "../src/stylesApp.sass"
@import "../src/variables.sass"
</style>
