<template>
  <div>
    <header class="mn-container">
      <div class="container-sm align-center">
        <nuxt-link to="/">
          <eleIcon
            :img-url="require('~/assets/images/Logo.png')"
            img-class="ic-logo"
          />
        </nuxt-link>
        <ul class="ml-44 mn-step flex">
          <li v-for="(step, idx) in lsStep" :key="`${idx}-step-collaborators`">
            <div
              :class="`mn-step-item align-center ${classStep(step.key, idx)}`"
              @click.stop=""
            >
              <div class="mn-step-icon">
                <span class="mn-step-count">{{ idx + 1 }}</span>
              </div>
              <p class="ml-12 text-16-5">{{ step.txt }}</p>
            </div>
          </li>
        </ul>
      </div>
    </header>
    <div class="mn-mock" />
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      lsStep: [
        {
          key: 'summary',
          txt: 'Tổng quan',
        },
        {
          key: 'price-list',
          txt: 'Bảng giá ',
        },
        {
          key: 'service-description',
          txt: 'Mô tả dịch vụ',
        },
        {
          key: 'request-summary',
          txt: 'Tóm tắt yêu cầu',
        },
        {
          key: 'pictures',
          txt: 'Hình ảnh',
        },
        {
          key: 'review',
          txt: 'Xem lại',
        },
      ],
    };
  },
  methods: {
    classStep(key, index) {
      const namePage = this.$route.name;
      if (key === namePage) {
        return 'stepActive';
      }
      const indexActive = this.lsStep
        .map((step) => {
          return step.key;
        })
        .indexOf(namePage);
      if (index < indexActive) {
        return 'stepComplete';
      }
      return '';
    },
  },
};
</script>
