<template> 
    <div>
        <div class="contacts">
            <ContactsItem 
            v-for="item in contactsList"
            :item="item"
            />
        </div>
    </div>
</template>

<script>
import ContactsItem from './ContactsItem.vue';
export default {
    props: ['contactsList'],
    components: {
        ContactsItem,
    }
}
</script>

<style lang="sass" scoped>
.contacts
    padding: 56px 120px 0
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 56px 0
    width: 100%
    max-width: 1920px
    @media( max-width: 1250px)
        padding: 56px 40px 0
    @media( max-width: 870px)
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))
        padding: 32px 16px 0
</style>