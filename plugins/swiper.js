import { Swiper as SwiperClass, Navigation, Pagination } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import Vue from 'vue';
SwiperClass.use([Navigation, Pagination])
Vue.use(getAwesomeSwiper(SwiperClass))

