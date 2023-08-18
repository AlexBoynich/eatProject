<template> 
    <div class="programLists">
        <div class="programList" v-for="list in programList" v-if="selectedEventTab===list.event_type_id && selectedDateTab===list.date">
            <div class="programContentItem">
            <div class="timeBlock gridBlock">
                <h4 class="date">{{ list.date }}</h4>
                <h4 class="time">{{ list.start_time }} - {{ list.end_time }}</h4>
            </div>
            <div class="nameBLock gridBlock">
                <h4 class="name">{{ list.name }}</h4>
                <h4 v-if="list.moderator" class="person">{{ list.moderator }}</h4>
                <h4 v-if="list.moderator_description" class="moderator_description">{{ list.moderator_description }}</h4>
            </div>
            <div class="descriptionBLock gridBlock">
                <h4 class="description">{{ list.description }}</h4>
                <h4 class="places" >{{ (list.places) ? 'Количество мест - ' + list.places : ''}} {{ (list.age_limit) ? list.age_limit : '' }}</h4>
            </div>
            <div class="buttonBlock gridBlock">
                <a :href="list.reg_link" v-if="list.registration_required"><button  class="button">Записаться</button></a>
                <h4 v-if="!list.registration_required">Вход свободный</h4>
            </div>
        </div>   
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ['programList','selectedEventTab','selectedDateTab'],
    methods: {
    }
}
</script>

<style lang="sass" scoped>
.date, .name
        font-weight: 600
        @media( max-width: 870px )
            white-space: inherit
.programContentItem
    display: grid
    grid-template-columns: 1fr 1.5fr 4fr 1fr
    grid-template-rows: auto
    border: 1px solid #2559464D
    border-radius: 8px
    @media( max-width: 870px )
        grid-template-columns: 1fr
        border-radius: 48px
        padding-bottom: 24px
        padding-top: 24px
.gridBlock
    display: grid
    grid-template-rows: max-content
    margin: 32px 0
    padding: 0 32px
    gap: 16px
    border-left: 1px solid #2559464D
    @media( max-width: 870px )
        padding: 0 24px
        margin: 11px 0
        border-left: none
.programList
    display: flex
    flex-direction: column
    margin: 16px 120px 80px
    gap: 40px
    @media (max-width: 1200px)
        margin: 8px 16px 8px
.buttonBlock
    display: flex
    justify-content: center
    align-items: center
    text-align: center
    a
        color: rgba(10, 26, 20, 1)
    @media( max-width: 870px )
        justify-content: start
h4
    font-family: Gilroy
    font-size: 24px
    font-weight: 400
    line-height: 28px
    letter-spacing: 0em
    @media( max-width: 870px )
        font-size: 16px
        font-weight: 400
        line-height: 19px
        letter-spacing: 0em


.button
    border: 2px solid #255946
    border-radius: 8px
    padding: 16px
    font-size: 20px
    font-weight: 400
    line-height: 19px
    letter-spacing: 0em
    font-family: "Gilroy"
    @media (max-width: 870px)
        font-family: 'Gilroy'
        padding: 8px
        font-size: 16px
        font-weight: 400
        line-height: 19px
        letter-spacing: 0em
        text-align: left
    &:hover
        background: rgba(37, 89, 70, 0.1)
    &:active
        background: rgba(37, 89, 70, 0.3)
.timeBlock
    border-left: none
.time, .moderator_description, .person
    @media (max-width: 870px)
        font-family: Gilroy
        font-size: 14px
        font-weight: 400
        line-height: 16px
        letter-spacing: 0em
        text-align: left

    
</style>