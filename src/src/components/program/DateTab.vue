<template> 
    <div class="dateTabs">
        <button  
        v-for="(tab, index) in dateList" 
        :id="index"
        @click="$emit('changeSelectedDateTab', tab.date)"         
        ><h5 class="dateTab" :class="{'activeTab': selectedDateTab===tab.date}">{{ tab.date }}</h5></button>
    </div>
</template>

<script>
export default {
    props: ['dateList','selectedDateTab'],
}
</script>

<style lang="sass" scoped>
.dateTab
    border: 1px solid #255946
    border-radius: 48px
    padding: 16px 32px
    white-space: nowrap 
    &:hover
        background: rgba(37, 89, 70, 0.1)
    &:active
        background: rgba(37, 89, 70, 0.3)
    @media( max-width: 870px)
        &:hover
            background: none
        &:active
            background: none
        font-family: Gilroy
        font-size: 14px
        font-weight: 400
        line-height: 16px
        letter-spacing: 0em
        padding: 16px
.dateTabs
    display: flex
    flex-direction: row
    gap: 32px
    flex-wrap: wrap
.activeTab
    border: 2px solid #255946


</style>