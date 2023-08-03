<template>
    <div class="teamBlock">
        <img src="/img/teamBlock/ourTeam.svg" alt="" class="ourTeam">
        <Slider/>
    </div>
</template>

<script>
import Slider from './slider/Slider.vue';

export default {
    components:{ 
        Slider,
    }
}
</script>

<style lang="sass" scoped>
@import '../variables.sass'
.teamBlock
    padding: 40px 0
.ourTeam
    float: right
    width: 34%
    @media (max-width: 875px)
      width: 75%
</style>