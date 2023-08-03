<template>
  <div class="home">
    <main>
      <StartBlockPage/>
      <Timer/>
      <MapPage/>
      <WaitingBlock/>
      <FavouriteRestaurantsBlock/>
      <SponcorsBlock/>
      <TeamBlock/>
    </main>
  </div>
</template>

<script>
  import axios from 'axios';
  import Timer from '@/components/Timer.vue';
  import MapPage from '@/components/MapPage.vue';
  import StartBlockPage from '@/components/StartBlockPage.vue';
  import Slider from '@/components/slider/Slider.vue';
  import TeamBlock from '@/components/TeamBlock.vue';
  import WaitingBlock from '@/components/WaitingBlock.vue';
  import FavouriteRestaurantsBlock from '@/components/favouriteRestaurants/FavouriteRestaurantsBlock.vue'
  import SponcorsBlock from '@/components/sponcors/SponcorsBlock.vue'

  export default {
    name: 'Home',

    components: {
      Timer,
      MapPage,
      StartBlockPage,
      Slider,
      TeamBlock,
      WaitingBlock,
      FavouriteRestaurantsBlock,
      SponcorsBlock,
    },
    data() {
      return {
        vk: '',
      }
    },
    mounted() {
      axios
      .get('https://festival-edy-dev.tomsk-it.ru/api/info/vk_link')
      .then( (vk) => {
        this.vk=vk.data.info.link
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
    
  }
</script>

<style lang="sass">

</style>
