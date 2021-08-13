<template>
  <div class="container pt-56">
    <div class="row-pro pb-106">
      <div class="col-pro-left">
        <profileCardPro class="mb-32" />
        <profileCardDes />
      </div>
      <div class="col-pro-right">
        <EleHeadLine
          title="Các dịch vụ cung cấp"
          sub="Xem tất cả"
          href="/profile/service/123"
        />
        <div class="row row-32-40 card-w100">
          <div
            v-for="(item, index) in listCard"
            :key="`${index}-service-supplies`"
            class="col col-lg-4 col-32-40"
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
          </div>
        </div>
        <EleHeadLine
          title="Các sản phẩm đang bán"
          sub="Xem tất cả"
          href="/profile/service/123"
          class="mt-78"
        />
        <div class="row row-32-40 card-w100">
          <div
            v-for="(item, index) in listCardSell"
            :key="`${index}-service-supplies`"
            class="col col-lg-6 col-32-40"
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mockListCard, mockListCardSell } from '~/utils/common.js';
export default {
  data() {
    return {
      listCard: mockListCard(3),
      listCardSell: mockListCardSell(4),
    };
  },
};
</script>
