<template>
  <div class="pb-106">
    <EleHeadLine title="Có thể bạn thích" sub="Xem tất cả" href="#" />
    <div class="row row-32-40">
      <div
        v-for="(item, idx) in lsLiked"
        :key="`${idx}-liked`"
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
import { mockCardSell } from '~/utils/common.js';
const ls = [];
for (let i = 0; i < 8; i++) {
  ls.push(mockCardSell());
}
export default {
  data() {
    return {
      lsLiked: ls,
    };
  },
};
</script>
