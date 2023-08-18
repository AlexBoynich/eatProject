<template> 
    <div class="tabs">
        <div class="tabLinks">
            <DateTab
            :dateList="dateList"
            :selectedDateTab="selectedDateTab"
            @changeSelectedDateTab="changeSelectedDateTab"
            />
            <EventTab
            :selectedDateTab="selectedDateTab"
            :selectedEventTab="selectedEventTab"
            :selectedIcon="selectedIcon"
            :eventList="eventList"
            @changeSelectedEventTab="changeSelectedEventTab"
            :selectedName="selectedName"
            
            />
        </div>
    </div>
</template>

<script>
import DateTab from './DateTab.vue';
import EventTab from './EventTab.vue';

export default {
    data() {
        return {

        }
    },
    components: {
        DateTab,
        EventTab,
    },
    props: ['selectedDateTab', 'selectedEventTab','eventList','dateList', 'selectedIcon', 'selectedName'],
    methods: {
        changeSelectedEventTab(tab, icon, name) {
            this.$emit('changeSelectedTabForEvent', tab, icon, name)
        },
        changeSelectedDateTab(tab) {
            this.$emit('changeSelectedTabForDate', tab)
        },
    },
}
</script>

<style lang="sass" scoped>
.tabLinks
    display: flex
    flex-direction: column
    gap: 32px
    margin: 56px 120px 40px
    @media (max-width: 870px)
        margin: 0
        padding: 0 16px
</style>