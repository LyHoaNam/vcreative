<template>
  <section class="con-horizontal topgraphicdesign">
    <EleHeadLine
      title="Top Dịch vụ thiết kế đồ họa"
      sub="Xem tất cả"
      href="#"
    />
    <div class="rel">
      <swiper key="topgraphicdesign" :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in listCard"
          :key="`${index}-${Math.random()}-tsv`"
        >
          <EleCard
            :img="item.img"
            :description="item.description"
            :rate="item.rate"
            :rate-count="item.rateCount"
            :amount="item.amount"
          >
            <template slot="user">
              <EleUser
                :avatar="item.avatar"
                :name="item.name"
                :ontop="item.ontop"
              />
            </template>
            <template slot="rate">
              <eleRate :rate-start="item.rate" :count-rate="item.rateCount" />
            </template>
          </EleCard>
        </swiper-slide>
      </swiper>
      <div slot="button-prev" class="swiper-button-prev-topgraphic" />
      <div slot="button-next" class="swiper-button-next-topgraphic" />
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
      swiperOptions: {
        ...swiperOptions,
        navigation: {
          nextEl: '.swiper-button-next-topgraphic',
          prevEl: '.swiper-button-prev-topgraphic',
        },
      },
    };
  },
};
</script>
