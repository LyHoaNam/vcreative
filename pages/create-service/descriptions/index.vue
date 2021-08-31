<template>
  <div class="container-xsm pt-40 pb-106">
    <h1 class="text-32-8 mb-12">Mô tả dịch vụ</h1>
    <h3 class="text-16-6 font-regular co-pro-des">
      Mô tả cho khách hàng biết tại sao khách hàng nên lựa chọ dịch vụ của bạn
    </h3>
    <div class="co-pro-hr mt-26 mb-64 cre-se-container">
      <span class="text-16-w1">* </span
      ><span class="text-16-6 font-itaclic">Trường bắt buộc</span>
    </div>
    <div class="cre-se-container mb-6">
      <p class="text-16-8">Tiêu đề<span class="text-16-w1"> *</span></p>
      <textarea
        v-model="valueDes"
        class="textarea-normal cre-se-des-textarea"
        length="1200"
        placeholder="Mô tả cho khách hàng vì sao nên chọn dịch vụ của bạn"
      />
      <p class="text-16-5 right">{{ valueDes.length }}/1200</p>
      <div class="flex-between mt-56">
        <div />
        <div class="flex">
          <nuxt-link
            :to="siteMap.createServicePriceList"
            class="btn-line-5 mr-24 cre-se-cancel"
            >Quay lại</nuxt-link
          >
          <nuxt-link
            :to="siteMap.createServiceBrief"
            class="btn-primary cre-se-submit"
            >Lưu &#38; Tiếp tục</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { funcSiteMap } from '~/utils/sitemap.js';
const siteMap = funcSiteMap();
export default {
  layout: 'service',
  data() {
    return {
      valueDes: '',
      siteMap,
    };
  },
};
</script>
