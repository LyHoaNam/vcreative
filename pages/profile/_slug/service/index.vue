<template>
  <div class="container pt-30 pb-106">
    <nuxt-link :to="siteMap.profileDetail" class="btn-see-more block mb-30"
      >Quay lại
    </nuxt-link>
    <profileBarPro class="mb-40" />
    <div class="row row-32-40 p-p-card">
      <div
        v-for="(item, index) in listCard"
        :key="`${index}-profile-service`"
        class="col col-special-5 col-32-40"
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
  </div>
</template>
<script>
import { mockListCard } from '~/utils/common.js';
import { funcSiteMap } from '~/utils/sitemap.js';
const siteMap = funcSiteMap();
export default {
  data() {
    return {
      listCard: mockListCard(5),
      siteMap,
    };
  },
};
</script>
