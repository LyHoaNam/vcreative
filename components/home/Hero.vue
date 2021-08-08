<template>
  <section class="con-hero">
    <swiper :options="swiperOptions">
      <swiper-slide
        v-for="(item, index) in mockData"
        :key="`${index}-${Math.random()}-tsv`"
      >
        <div
          class="hero-thumbnail"
          :style="{ backgroundImage: `url(${item})` }"
        />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </section>
</template>
<script>
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 3000,
        },
      },
      mockData: [
        'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/2179483/pexels-photo-2179483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
    };
  },
};
</script>
