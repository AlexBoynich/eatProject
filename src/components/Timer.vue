<template>
    <div class="color">
        <div class="timer container">
            <h4 class="title">ДО ФЕСТИВАЛЯ ОСТАЛОСЬ:</h4>
            <div class="timerBox">
                <h4 class="days">{{ leftFillNum(days, 2) }}:</h4>
                <h4 class="hours">{{ leftFillNum(hours % 24, 2)}}:</h4>
                <h4 class="minutes">{{ leftFillNum(minutes % 60, 2) }}:</h4>
                <h4 class="seconds">{{ leftFillNum(seconds % 60, 2) }}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            deadline: new Date(2023, 8, 2, 16, 0, 0),
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            launchDate: 0,
            now: new Date(),
        }
    },
    created() {
        setInterval(() => {
            this.now = new Date()
            this.launchDate = this.deadline - this.now
            this.seconds = parseInt(this.launchDate/1000)
            this.minutes = parseInt(this.seconds/60)
            this.hours = parseInt(this.minutes/60)
            this.days = parseInt(this.hours/24)
        }, 1000)
    },
    methods: {
        leftFillNum(num, targetLength) {
            return num.toString().padStart(targetLength, "0");
}
    }
}
</script>

<style lang="sass" scoped>
@import '../variables.sass'
.color
    width: 100%
    background: $main-green
.container
    @media (max-width: 1460px)
        width: 90%
.timer
    height: 100px
    box-sizing: border-box
    display: flex
    justify-content: center
    align-items: center
    white-space: nowrap
    @media (max-width: 1460px)
        padding: 16px 0
        flex-direction: column
    @media (max-width: 875px)
        height: 88px
    h4
        color: #fff
    .title
        margin-right: desktopSize(358)
        @media (max-width: 1460px)
            text-align: left
            margin-right: 0
        @media (max-width: 875px)
            margin-right: 0
            margin-bottom: 8px


    .timerBox
        display: flex
        flex-direction: row
        width: 220px
        justify-content: center
</style>