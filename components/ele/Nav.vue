<template>
  <nav class="mn-nav">
    <ul class="flex-center">
      <li v-for="(item, index) in lsNav" :key="index" class="mn-li flex-center">
        <nuxt-link class="mn-link" :to="item.url">{{ item.txt }}</nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script>
import { funcSiteMap } from '~/utils/sitemap.js';
const siteMap = funcSiteMap();
export default {
  data() {
    return {
      lsNav: [
        {
          txt: 'Dịch vụ',
          url: siteMap.services,
        },
        {
          txt: 'Chợ thiết kế',
          url: siteMap.servicesDetail,
        },
        {
          txt: 'Mẹo hay',
          url: siteMap.profileDetail,
        },
        {
          txt: 'Tin tức',
          url: siteMap.profileProduct,
        },
        {
          txt: 'Phản hồi',
          url: siteMap.collaboratorsRegister,
        },
        {
          txt: 'Tuyển dụng',
          url: siteMap.createServiceSummary,
        },
        {
          txt: 'Hỗ trợ',
          url: siteMap.collaboratorsRegisterComplete,
        },
      ],
    };
  },
};
</script>
