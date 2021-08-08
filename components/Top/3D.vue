<template>
  <section class="con-horizontal 3D">
    <EleHeadLine title="Top dịch vụ thiết kế 3D" sub="Xem tất cả" href="#" />
    <div class="rel">
      <swiper key="3D" :options="swiperOptions">
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
      <div slot="button-prev" class="swiper-button-prev-3D" />
      <div slot="button-next" class="swiper-button-next-3D" />
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
          nextEl: '.swiper-button-next-3D',
          prevEl: '.swiper-button-prev-3D',
        },
      },
    };
  },
};
</script>
