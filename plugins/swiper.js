import { Swiper as SwiperClass, Navigation } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import Vue from 'vue';
SwiperClass.use([Navigation])
Vue.use(getAwesomeSwiper(SwiperClass))

