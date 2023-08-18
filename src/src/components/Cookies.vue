<template>
    <div class="cookies">
        <p class="description">Наш сайт использует файлы cookie, чтобы улучшить работу сайта, повысить его эффективность и удобство. Продолжая использовать наш сайт, вы соглашаетесь на использование файлов cookie.</p>
        <img 
        src="/img/cookies/closeCookies.jpg" 
        alt="Close" class="closeCookies"
        @click="setWarning">
    </div>
</template>

<script>
export default {
    data() {
        return {
            props: ['warning']
        }
    },
    methods: {
        setWarning() {
            this.$emit('setWarning')
        }
    }
}
</script>

<style scoped lang="sass">
.cookies
    display: flex
    flex-direction: row
    padding: 24px
    max-width: 342px
    max-height: 206px
    background: #FFF
    border-radius: 48px
.description
    font-size: 18px
    font-weight: 400
    line-height: 21px
    letter-spacing: 0em
    text-align: center
button
    padding: 8px 
    border: 2px solid #255946
    border-radius: 8px
    margin-top: 16px
.closeCookies
    width: 40px
    height: 33px
    cursor: pointer
</style>