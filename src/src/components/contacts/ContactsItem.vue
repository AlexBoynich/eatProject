<template> 
    <div class="contactsItem">
        <img :src="item.image" alt="Image" class="contactImg">
        <div class="personsData">
            <h5 class="name">{{ item.name }} {{ item.second_name }}</h5>
            <div class="description">
                <h4 class="post">{{ item.add_role }}</h4>
                <a :href="`tel:${item.phone_number}`" class="number">{{ item.phone_number }}</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['item'],
}
</script>

<style lang="sass" scoped>
.contactsItem
    display: flex
    flex-direction: row
    width: 100%
.personsData
    display: flex
    flex-direction: column
    align-items: center
    padding: 0 24px 0 56px
    justify-content: center
    align-items: flex-start
    gap: 56px
    width: 50%
    @media( max-width: 1250px)
        padding: 0 16px
        gap: 16px
    @media( max-width: 870px)
        padding: 0 32px
        width: auto
    .description
        display: flex
        flex-direction: column
        gap: 24px
        @media( max-width: 1250px)
            gap: 8px
    h5
        font-family: Gilroy
        font-size: 40px
        font-weight: 600
        line-height: 48px
        letter-spacing: 0em
        color: #255946
        @media( max-width: 1460px)
            font-size: 32px
            line-height: 36px
        @media( max-width: 870px)
            font-size: 16px
            font-weight: 600
            line-height: 19px
            letter-spacing: 0em
            text-align: left
            color: #255946

    h4
        font-size: 24px
        font-weight: 400
        line-height: 28px
        letter-spacing: 0em
        @media( max-width: 870px)
            font-size: 14px
            font-weight: 400
            line-height: 16px
            letter-spacing: 0em
            text-align: left

    a
        font-size: 24px
        font-weight: 400
        line-height: 28px
        letter-spacing: 0em
        text-decoration: none
        color: #0A1A14
        @media( max-width: 870px)
            font-size: 14px
            font-weight: 400
            line-height: 16px
            letter-spacing: 0em
            text-align: left

.contactImg
    width: 50%
    max-width: 384px
    aspect-ratio: 1/1
    @media( max-width: 870px)
        width: 104px
        height: 104px
.number
    white-space: nowrap
</style>