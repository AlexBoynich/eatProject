<template> 
    <div>
        <div class="step">
            <img :src="step.logo" alt="Step" class="numberOfStepImg">
            <div class="textAndButton">
                <h4>{{ step.text }}</h4>
                <a :href="step.link"><button>{{ step.button }}</button></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['step']
}
</script>

<style lang="sass" scoped>
.step
    display: flex
    flex-direction: column
    align-items: center
    max-width: 320px
    gap: 32px
    text-align: center
    @media( max-width: 870px)
        flex-direction: row
        max-width: 100%
        gap: 40px
h4
    font-size: 24px
    font-weight: 400
    line-height: 28px
    letter-spacing: 0em
    text-align: center
    @media( max-width: 870px)
        font-size: 14px
        font-weight: 400
        line-height: 16px
        letter-spacing: 0em
        text-align: left

button
    padding: 16px
    border-radius: 8px
    border: 2px solid #255946
    font-size: 24px
    font-weight: 400
    line-height: 28px
    letter-spacing: 0em
    text-align: center
    @media( max-width: 870px)
        padding: 8px
        font-size: 14px
        font-weight: 400
        line-height: 16px
        letter-spacing: 0em
        text-align: left
    &:hover
        background: rgba(37, 89, 70, 0.1)
    &:active
        background: rgba(37, 89, 70, 0.3)
.textAndButton
    display: flex
    flex-direction: column
    gap: 32px
    @media( max-width: 870px)
        gap: 12px
        max-width: 240px
        align-items: start
    a
        color: rgba(10, 26, 20, 1)
.numberOfStepImg
    width: 146px
    @media (max-width: 870px)
        width: 28px
</style>