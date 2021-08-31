<template>
  <ul class="flex-center">
    <li class="mn-li align-center">
      <nuxt-link class="mn-checked" :to="siteMap.collaboratorsRegister">{{
        textLink
      }}</nuxt-link>
    </li>
    <li class="pl-11">
      <eleIcon
        :img-url="require('~/assets/images/icon/bell.png')"
        img-class="mn-icon"
      />
    </li>
    <li class="pl-26 pointer">
      <eleIcon
        :img-url="require('~/assets/images/icon/chat.png')"
        img-class="mn-icon"
      />
    </li>
    <li class="pl-26 pointer">
      <nuxt-link class="mn-checked" :to="siteMap.profileDetail">
        <eleIcon
          :img-url="require('~/assets/images/mock_avatar.png')"
          img-class="mn-avatar"
        />
      </nuxt-link>
    </li>
  </ul>
</template>
<script>
import { funcSiteMap } from '~/utils/sitemap.js';
export default {
  data() {
    return {
      siteMap: funcSiteMap(),
    };
  },
  computed: {
    textLink() {
      if (this.$route.name === 'collaborators-register-complete') {
        return 'Thêm dịch vụ';
      }
      return 'Trở thành cộng tác viên';
    },
  },
};
</script>
