import { Swiper as SwiperClass, Navigation, Pagination, Autoplay } from 'swiper/core'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'
import Vue from 'vue';
SwiperClass.use([Navigation, Pagination, Autoplay])
Vue.use(getAwesomeSwiper(SwiperClass))

