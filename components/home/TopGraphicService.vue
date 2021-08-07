<template>
  <section class="con-horizontal">
    <EleHeadLine
      title="Top Dịch vụ thiết kế đồ họa"
      sub="Xem tất cả"
      href="#"
    />
    <div class="rel">
      <swiper ref="swiperNews" :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in listCard"
          :key="`${index}-${Math.random()}-tgpv`"
        >
          <EleCard />
        </swiper-slide>
      </swiper>
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </div>
  </section>
</template>
<script>
import { swiperOptions } from '~/utils/constant.js';
export default {
  data() {
    return {
      listCard: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
      swiperOptions,
    };
  },
};
</script>
