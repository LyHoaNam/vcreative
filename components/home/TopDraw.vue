<template>
  <section class="con-horizontal">
    <EleHeadLine title="Top dịch vụ vẽ minh họa" sub="Xem tất cả" href="#" />
    <div class="rel">
      <swiper :options="swiperOptions">
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
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
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
      },
    };
  },
};
</script>
