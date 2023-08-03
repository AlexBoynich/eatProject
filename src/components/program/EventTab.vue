<template> 
    <div>
        <div class="eventTabs">
            <button 
                v-for="( tab, index ) in eventList" 
                :id="tab.id" 
                @click="$emit('changeSelectedEventTab', tab.id, tab.sponsor_logo, tab.name)" 
                :class="{'activeTab': selectedEventTab===tab.id}"
                class="eventTab"
            ><h5>{{ tab.name }}</h5> <img v-if="tab.sponsor_logo" :src="tab.sponsor_logo" alt="" class="eventIcon"></button>
            <div class="input">
                <div class="select" :class="{'openedInput': isOpenInput}" @click="openInput">
                    <h4 class="activeTab">{{ selectedName}}</h4><img v-if="selectedIcon" :src="selectedIcon" alt="" class="eventIcon">
                </div>
                <div class="options" v-show="isOpenInput">
                    <div class="option"
                    v-for="(tab, index) in eventList"
                         @click="$emit('changeSelectedEventTab', tab.id, tab.sponsor_logo, tab.name); openInput()" 
                    >
                    <div class="nameAndLogo">
                        <h4>{{ tab.name }}</h4> <img v-if="tab.sponsor_logo" :src="tab.sponsor_logo" alt="" class="eventIcon">
                    </div>
                    <!-- <hr v-if="index!==(tab.list.length-1)"> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpenInput: false,
        }
    },
    props: ['eventList', 'selectedEventTab', 'selectedDateTab', 'selectedIcon', 'selectedName'],
    methods: {
        openInput() {
            this.isOpenInput=!this.isOpenInput
        }
    }
}
</script>

<style lang="sass" scoped>
.eventTab
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    border: 1px solid #255946
    border-radius: 48px
    gap: 16px
    padding: 16px 32px
    white-space: nowrap
    height: 118px
    @media( max-width: 870px)
        display: none
    &:hover
        background: rgba(37, 89, 70, 0.1)
    &:active
        background: rgba(37, 89, 70, 0.3)
.select
    display: flex
    width: 100%
    padding: 24px 16px
    border: 1px solid #255946
    align-items: center
    border-radius: 48px
    background-image: url(@/assets/img/arrowInputDown.svg)
    background-repeat: no-repeat
    background-position: right 16px center
    cursor: pointer
    h4
        font-family: Gilroy
        font-size: 14px
        font-weight: 400
        line-height: 16px
        letter-spacing: 0em
.eventIcon
    margin-left: 8px
    width: 48px
    heigth: 48px
.nameAndLogo
    display: flex
    width: 100%
    flex-direction: row
    align-items: center
.input
    width: 100%
.option
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    cursor: pointer
    hr
        margin-top:16px
        width: 100%
        color: #2559464D
.openedInput
    background-image: url(@/assets/img/arrowInputUp.svg)
.options
    display: flex
    flex-direction: column
    padding: 24px 16px
    border: 1px solid #2559464D
    cursor: pointer
    border-radius: 48px
    gap: 16px
.eventTabs
    display: flex
    flex-direction: row
    gap: 24px
    flex-wrap: wrap
.activeTab
    border: 2px solid #255946
    @media( max-width: 870px)
        border: none
h4
    font-size: 24px
    font-weight: 400
    line-height: 28px
    letter-spacing: 0em
    margin-left: 8px
.input
    display: none
    @media( max-width: 870px)
            display: flex
            flex-direction: column
            gap: 4px
</style>