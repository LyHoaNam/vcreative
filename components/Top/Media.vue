<template>
  <section class="con-horizontal media">
    <EleHeadLine
      title="Top dịch vụ thiết kế truyền thông"
      sub="Xem tất cả"
      href="#"
    />
    <div class="rel">
      <swiper key="media" :options="swiperOptions">
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
      <div slot="button-prev" class="swiper-button-prev-media" />
      <div slot="button-next" class="swiper-button-next-media" />
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
          nextEl: '.swiper-button-next-media',
          prevEl: '.swiper-button-prev-media',
        },
      },
    };
  },
};
</script>
