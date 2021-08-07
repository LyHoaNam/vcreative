<template>
  <section class="con-horizontal">
    <EleHeadLine
      title="Top Dịch vụ thiết kế đồ họa"
      sub="Xem tất cả"
      href="#"
    />
    <div class="rel">
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in listCard"
          :key="`${index}-${Math.random()}-tsv`"
        >
          <EleCard
            :img="item.img"
            :description="item.description"
            :rate="item.rate"
            :rate-count="item.rateCount"
            :amout="item.amout"
          />
        </swiper-slide>
      </swiper>
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
    </div>
  </section>
</template>
<script>
import { swiperOptions } from '~/utils/constant.js';
import { mockListCard } from '~/utils/common.js';
export default {
  data() {
    return {
      listCard: mockListCard(),
      swiperOptions,
    };
  },
};
</script>
