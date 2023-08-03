<template>
  <div class="gallery">
    <GalleryItem
        v-for="(gallery, indexGallery) in galleryList"
        :key="indexGallery"
        :galleryItem="gallery"
        @on-click="openModalSlider($event, indexGallery)"
    />
    <GalleryModal
        v-if="isModalOpen"
        :galleryModal="modalList"
        :activeSlide="modalSliderSrc"
        @close="closeModal"
    />
  </div>
</template>

<script>

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import './styles.sass'
import GalleryItem from './GalleryItem.vue'
import GalleryModal from './GalleryModal.vue'
import axios from 'axios'

    export default {
      name: 'Gallery',
      components: {
            Swiper,
            SwiperSlide,
            GalleryItem,
            GalleryModal,
        },
      data() {
        return {
          activeSlide: 0, 
          indexOfGallery: 0,
          modalSliderIndex: null,
          modalSliderSrc: null,
          galleryList: [],
        }
      },
      computed: {
        isModalOpen() {
          return this.modalSliderIndex !== null
        },
        modalList() {
          if ((this.modalSliderIndex === null) || !this.galleryList[this.modalSliderIndex]) return []
          return this.galleryList[this.modalSliderIndex].list.reduce((arr, item) => {
            return [
              ...arr,
              item.link1,
              item.link2
            ]
          }, [])
        }
      },
      methods: {
        replace(link){
            window.location.href= `${link}`
        },
        openModalSlider(src, index) {
          this.modalSliderSrc = src
          this.modalSliderIndex = index
        },
        changeActiveSlide(id) {
          this.activeSlide=id
          console.log(this.id)
        },
        changeIndexGallery() {
          this.indexOfGallery=this.indexGallery
          console.log(this.indexGallery)
        },
        closeModal() {
          this.modalSliderIndex = null
          this.modalSliderSrc = null
        },
    },
    mounted() {
      axios
      .get('https://festival-edy-dev.tomsk-it.ru/api/albums')
      .then( (gallery) => {
        this.galleryList=gallery.data.data.map(item=> {
          console.log(gallery.data.data)
          console.log(this.galleryList)
          return  {year: item.name, vkGroup: item.vk_link, list: item.photos}
        })
        this.galleryList.map(item => {
              return item.list =  item.list.reduce((arr, item) => {
              const result = [...arr];
              if(result[result.length-1] && !result[result.length-1].link2) {
              result[result.length-1].link2 = item.name
              } else {
              result.push({link1: item.name})
              }
              return result
              }, [])
        }
        )
        console.log(this.galleryList)
      })

      .catch(function (error) {
        // handle error
        console.log(error);
      })
    }
  }
</script>

<style lang="sass" scoped>
.sliderItemModalImg
  width: 100%
.wrapper
  padding: 0 120px
.modalSlider 
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  background: rgba(255,255,255,.5)
  padding: 20px 150px
  z-index: 10
.sliderImg
    max-width: 618px
    max-height: 368px
    width: 32vw
.arrow_right
    transform: rotate(180deg)
.arrow_right_gallery, .arrow_left_gallery
  margin-bottom: 56px
  &:hover
    border-radius: 48px
    background: rgba(37, 89, 70, 0.1)
  &:active
    background: rgba(37, 89, 70, 0.3)
  @media (max-width: 875px)
    display: none
.sliderBlock
    max-width: 80%
    display: flex
    align-items: center
.swiperSlide
    max-width: 618px
.yearAlbum
    display: flex
    align-items: center
    padding: 80px 0
.yearAndButton
  display: flex
  flex-direction: row
  justify-content: space-between
  margin:0 40px
.block
  padding: 56px 80px
.vkGroup
  border: 2px solid #255946
  padding: 16px
  border-radius: 8px
.swiperSlide
  display: flex
  flex-direction: column
  gap: 112px
</style>