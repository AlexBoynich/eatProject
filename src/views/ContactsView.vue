<template>
    <div class="contacts">
        <img src="/img/contacts/title.svg" alt="" class="title">
        <Contacts
        :contactsList="contactsList"
        />
        <div class="mapAndAdress">
            <yandex-map :settings="settings" :coords="coords" :zoom="zoom" class="map"> 
                <ymap-marker 
                marker-id="123" 
                :coords="coords"
                :icon="markerIcon"
                />
            </yandex-map>
            <h5 class="adress">Адрес: ТРК “ЛЕТО”<br>Томск, ул. Нахимова 8, ст 13</h5>
        </div>
    </div>
  </template>
  
  <script>
import Contacts from '@/components/contacts/Contacts.vue'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import axios from 'axios'

export default {
    data() {
        return {
            contactsList: [
            ],
            coords: [56.45704756410356,84.95890669094284],
            zoom: 17,
            settings: {
                apiKey: '20930cdd-daa7-46fb-96ef-4e53cb27ce51',
                lang: 'ru_RU',
            },
            markerIcon: {
            layout: 'default#imageWithContent',
            imageHref: '/img/contacts/marker.jpg',
            imageSize: [20, 43],
            imageOffset: [0, 0],
            }
        }
    },
    components: {
        Contacts,
        yandexMap,
        ymapMarker
    },
    mounted () {
        axios.get('https://festival-edy-dev.tomsk-it.ru/api/contacts')
        .then( (contacts) => {
          this.contactsList=contacts.data.data
          console.log(this.contactsList)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    },  
  }
  </script>

<style scoped lang="sass">
.title
    display: flex
    width: 34%
    border-radius: 0 48px 48px 0
    margin: 80px 0 0
    float: left
    align-items: center
    justify-content: center
    color: #FFF
    @media (max-width: 875px)
        width: 75%
        border-radius: 0 24px 24px 0
        margin: 40px 0 0
.map
    max-width: 828px
    width: 60%
    aspect-ratio: 16/9
    margin: 80px 0 80px 120px
    @media (max-width: 1200px)
        margin: 40px 0 80px 40px
    @media (max-width: 870px)
        width: 40vw
        height: 40vw
        margin: 32px 0 40px 16px
.mapAndAdress
    display: flex
.adress
    color: rgba(37, 89, 70, 1)
    margin: 80px 24px 80px
    @media (max-width: 1200px)
        margin: 40px 24px 40px
    @media (max-width: 870px)
        margin: 32px 16px 0
        font-family: Gilroy
        font-size: 10px
        font-weight: 600
        line-height: 12px
        letter-spacing: 0em
</style>
  