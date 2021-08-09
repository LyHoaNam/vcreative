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
export default {
  data() {
    return {
      lsNav: [
        {
          txt: 'Dịch vụ',
          url: '/services',
        },
        {
          txt: 'Chợ thiết kế',
          url: '#',
        },
        {
          txt: 'Mẹo hay',
          url: '#',
        },
        {
          txt: 'Tin tức',
          url: '#',
        },
        {
          txt: 'Phản hồi',
          url: '#',
        },
        {
          txt: 'Tuyển dụng',
          url: '#',
        },
        {
          txt: 'Hỗ trợ',
          url: '#',
        },
      ],
    };
  },
};
</script>
