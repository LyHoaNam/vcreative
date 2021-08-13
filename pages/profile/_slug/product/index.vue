<template>
  <div class="container pt-30 pb-106">
    <nuxt-link to="/profile/123" class="btn-see-more block mb-30"
      >Quay lại
    </nuxt-link>
    <profileBarPro class="mb-40" />
    <div class="row row-32-40 p-p-card-sell">
      <div
        v-for="(item, index) in listCard"
        :key="`${index}-profile-product`"
        class="col col-lg-3 col-32-40"
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
</template>
<script>
import { mockListCardSell } from '~/utils/common.js';
export default {
  data() {
    return {
      listCard: mockListCardSell(20),
    };
  },
};
</script>
