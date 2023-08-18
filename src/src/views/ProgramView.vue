<template>
    <div class="program container">
        <img src="/img/program/title.svg" alt="Title" class="title">
        <img :src="map" alt="Map" class="map">
        <TabsWrapper
        :selectedDateTab="selectedDateTab"
        :selectedEventTab="selectedEventTab"
        :eventList="eventList"
        :dateList="dateList"
        @changeSelectedTabForDate="changeSelectedTabForDate"
        @changeSelectedTabForEvent="changeSelectedTabForEvent"
        :selectedIcon="selectedIcon"
        :selectedName="selectedName"
        />
        <ProgramContentItem
        :selectedEventTab="selectedEventTab"
        :selectedDateTab="selectedDateTab"
        :programList="programList"
        />
    </div>
</template>
  
<script>
  import TabsWrapper from '@/components/program/TabsWrapper.vue'
  import ProgramContentItem from '@/components/program/ProgramContentItem.vue'
  import axios from 'axios'
  
  export default {
    data() {
      return {
        dateList: [],
        eventList: [],
        programList: [],
        map: '',
        selectedEventTab: '1',
        selectedIcon: '',
        selectedName: 'Главная сцена',
        selectedDateTab: '2 сентября',
      }
    },
    computed: {
    },
    components: {
        TabsWrapper,
        ProgramContentItem,
    },
    methods: {
        changeSelectedTabForEvent(tab, icon, name) {
            this.selectedEventTab=tab
            if(icon) {
              this.selectedIcon=icon
            } else this.selectedIcon=''
            if(name) {
              this.selectedName=name
            } else this.selectedName=''
        },
        changeSelectedTabForDate(tab) {
            this.selectedDateTab=tab
        }
    },
    mounted() {
      // Забираю даты
      axios
      .get('/api/dates')
      .then( (date) => {
        this.dateList=date.data.data
        this.selectedDateTab=this.dateList[0].date
      })
      .catch(function (error) {
        // handle error
      })
      // Забираю ивент типы
      axios
      .get('/api/event_types')
      .then( (date) => {
        this.eventList=date.data.data
        this.selectedEventTab=this.eventList[0].id

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      }),
      axios
      .get('/api/events/')
      .then( (events) => {
        this.programList=events.data.data
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      axios
      .get('/api/info/festMap')
      .then( (map) => {
        this.map=map.data.info.image
      })
      .catch(function (error) {
        // handle error
      })
    },
}
</script>

<style lang='sass' scoped>
.map
  margin: 56px auto 0
  width: 53%
  aspect-ratio: 13/9

  @media( max-width: 870px )
    padding: 32px 16px 24px
    margin: 0
    width: 100%
.program
    display: flex
    flex-direction: column
    min-height: 100vh

.title
    display: flex
    width: 654px
    height: 128px
    border-radius: 0 48px 48px 0
    margin: 80px 0 0
    float: left
    align-items: center
    justify-content: center
    color: #FFF
    margin-left: -2px
    @media (max-width: 875px)
        width: 75%
        border-radius: 0 24px 24px 0
        margin: 40px 0 0
</style>
  