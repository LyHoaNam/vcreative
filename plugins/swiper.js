import {
  Swiper as SwiperClass,
  Navigation,
  Pagination,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper/core';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
import Vue from 'vue';
SwiperClass.use([Navigation, Pagination, Autoplay, Thumbs, Controller]);
Vue.use(getAwesomeSwiper(SwiperClass));
