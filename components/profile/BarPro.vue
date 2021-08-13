<template>
  <section class="bar-profile flex">
    <nuxt-link
      v-for="(bar, idx) in lsBar"
      :key="`${idx}-bar`"
      :to="`/profile/123/${bar.key}`"
      :class="`bar-profile-tab align-center${
        bar.key === barActive ? ' bar-active' : ''
      }`"
      @click="handleClick(bar.key)"
    >
      <p class="text-16-5-m">
        {{ bar.txt }}
      </p>
    </nuxt-link>
  </section>
</template>
<script>
const BAR = [
  {
    txt: 'Dịch vụ',
    key: 'service',
  },
  {
    txt: 'Sản phẩm',
    key: 'product',
  },
  {
    txt: 'Tài khoản',
    key: 'account',
  },
];
export default {
  data() {
    return {
      lsBar: BAR,
    };
  },
  computed: {
    barActive() {
      if (!this.$route.name) {
        return BAR[0].key;
      }
      const lsPath = this.$route.name.split('-');
      return lsPath[lsPath.length - 1];
    },
  },
};
</script>
