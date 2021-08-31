<template>
  <div class="container-xsm pt-40 pb-106">
    <div class="cre-se-container">
      <h1 class="text-32-8 mb-12">Xem lại dưới góc nhìn của khách hàng</h1>
      <h3 class="text-16-6 font-regular co-pro-des">
        Xem lại các thông tin dịch vụ của bạn trước khi quảng cáo đến khách hàng
        của bạn
      </h3>
      <div class="co-pro-hr mt-56 cre-se-container" />
      <eleBreadCrumb />
      <serviceDetailBillboard />
      <serviceDetailDescription />
      <serviceDetailSupplier />
      <serviceDetailPackage />
      <div class="flex-between mt-56">
        <div />
        <div class="flex">
          <nuxt-link
            :to="siteMap.createServicePictures"
            class="btn-line-5 mr-24 cre-se-cancel"
          >
            Quay lại
          </nuxt-link>
          <button class="btn-primary cre-se-submit" @click="handleSubmit">
            Hoàn thành
          </button>
        </div>
      </div>
    </div>
    <modalComplete />
  </div>
</template>
<script>
import { funcSiteMap } from '~/utils/sitemap.js';
const siteMap = funcSiteMap();
export default {
  layout: 'service',
  data() {
    return {
      siteMap,
    };
  },
  methods: {
    handleSubmit() {
      this.$modal.show('CreateServiceComplete');
    },
  },
};
</script>
