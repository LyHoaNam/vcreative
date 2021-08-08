<template>
  <div>
    <header class="mn-container flex-center">
      <div class="container flex-between">
        <div class="align-center">
          <nuxt-link to="/">
            <eleIcon
              :img-url="require('~/assets/images/Logo.png')"
              img-class="ic-logo"
            />
          </nuxt-link>
          <eleNav />
        </div>
        <menuChecked v-if="isMember" />
        <menuUnlogin v-else />
      </div>
    </header>
    <div class="mn-mock" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      isMember: this.$route.name !== 'index',
    };
  },
  watch: {
    '$route.name': {
      handler(name) {
        this.isMember = name !== 'index';
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>
