<template>
  <section class="con-horizontal topsell">
    <EleHeadLine title="Top bán chạy" sub="Xem tất cả" href="#" />
    <div class="rel">
      <swiper key="topsell" :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in listCard"
          :key="`${index}-${Math.random()}-tsv`"
        >
          <EleCardSell
            :img="item.img"
            :description="item.description"
            :rate="item.rate"
            :rate-count="item.rateCount"
            :amount="item.amount"
            :ls-label="item.label"
          >
            <template slot="user">
              <EleUser
                :avatar="item.avatar"
                :name="item.name"
                :ontop="item.ontop"
              />
            </template>
            <template slot="rate">
              <eleRate
                :rate-start="item.rate"
                :count-rate="item.rateCount"
                :is-sell="true"
              />
            </template>
          </EleCardSell>
        </swiper-slide>
      </swiper>
      <div slot="button-prev" class="swiper-button-prev-topsell" />
      <div slot="button-next" class="swiper-button-next-topsell" />
    </div>
  </section>
</template>
<script>
import { swiperOptions } from '~/utils/constant.js';
import { mockListCardSell } from '~/utils/common.js';
export default {
  data() {
    return {
      listCard: mockListCardSell(),
      swiperOptions: {
        ...swiperOptions,
        slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next-topsell',
          prevEl: '.swiper-button-prev-topsell',
        },
      },
    };
  },
};
</script>
