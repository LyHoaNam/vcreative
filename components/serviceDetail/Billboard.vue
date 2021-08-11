<template>
  <div>
    <p class="text-32-8-m">Tôi sẽ thiết kế Logo theo yêu cầu trong 3 ngày</p>
    <div class="rel mt-30">
      <swiper ref="swiperTop" key="billboard" :options="swiperOptions">
        <swiper-slide
          v-for="(img, index) in ls"
          :key="`${index}-${Math.random()}-billboard`"
        >
          <div class="billboard" :style="{ backgroundImage: `url(${img})` }" />
        </swiper-slide>
      </swiper>
      <div slot="button-prev" class="swiper-button-prev-billboard" />
      <div slot="button-next" class="swiper-button-next-billboard" />
    </div>
    <div class="pt-16">
      <swiper
        ref="swiperThumbs"
        :options="swiperOptionThumbs"
        class="swiper-thumbs"
      >
        <swiper-slide
          v-for="(img, index) in ls"
          :key="`${index}-${Math.random()}-billboard-progress`"
        >
          <div
            class="billboard-thunbs"
            :style="{ backgroundImage: `url(${img})` }"
          />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { mockImg } from '~/utils/common.js';
export default {
  data() {
    return {
      ls: mockImg,
      swiperOptions: {
        loopedSlides: mockImg.length,
        navigation: {
          nextEl: '.swiper-button-next-billboard',
          prevEl: '.swiper-button-prev-billboard',
        },
      },
      swiperOptionThumbs: {
        freeMode: true,
        slidesPerView: 'auto',
        loopedSlides: mockImg.length,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slideToClickedSlide: true,
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>
