<template>
    <div class="error">
        <img src="/img/error/error.svg" alt="">
        <h5>Страница, на которую Вы хотели перейти, не найдена.<br>Возможно, введён некорректный адрес или страница была удалена.</h5>
        <button><router-link to="/">Перейти на главную страницу</router-link></button>
    </div>
</template>
  
<script>
  
export default {
data() {
    return {

    }
},
}
</script>
  
<style scoped lang="sass">
.error
    display: flex
    flex-direction: column
    align-items: center
    height: auto
    background-color: #FFC700
    min-height: 100vh
img
    margin-top: 80px
    padding-left: 80px
    padding-right: 80px
    width: 100%
    max-width: 733px
    @media( max-width: 870px)
        padding: 40px 30px 0
h5
    font-size: 24px
    font-weight: 600
    line-height: 29px
    letter-spacing: 0em
    text-align: center
    margin: 56px 80px 0
    @media( max-width: 870px)
        margin: 40px 16px 0
button
    padding: 13px
    border: 1px solid #255946
    margin: 64px 80px 80px
    border-radius: 8px
    a
        text-decoration: none
        color: #0A1A14
    @media( max-width: 870px)
        margin: 40px 16px 40px
        padding: 8px
</style>