<template>
  <div class="container-xsm pt-40 pb-106">
    <div class="cre-se-container">
      <h1 class="text-32-8 mb-12">Giới thiệu hình ảnh dịch vụ của bạn</h1>
      <h3 class="text-16-6 font-regular co-pro-des mb-56">
        Thêm hình ảnh về dịch vụ của bạn
      </h3>
      <div class="co-pro-hr pt-26 mb-32 cre-se-container" />
      <h4 class="text-24-8-m mb-12">Thêm vào hình ảnh (Tối đa 3)</h4>
      <p class="text-16-6 mb-30">Thêm vào hình ảnh (Tối đa 3)</p>
      <div class="row row-update">
        <div class="col col-lg-4 col-update">
          <uploadDrogDrap />
        </div>
        <div class="col col-lg-4 col-update">
          <uploadDrogDrap />
        </div>
        <div class="col col-lg-4 col-update">
          <uploadDrogDrap />
        </div>
      </div>
      <h4 class="text-24-8-m mb-12 mt-64">Thêm video</h4>
      <p class="text-16-6 mb-30">Video tối đa 4M</p>
      <div class="row row-update">
        <div class="col col-lg-4 col-update">
          <uploadDrogDrap is-video />
        </div>
      </div>
      <div class="flex-between mt-56">
        <div />
        <div class="flex">
          <nuxt-link
            to="/create-service/brief"
            class="btn-line-5 mr-24 cre-se-cancel"
            >Quay lại</nuxt-link
          >
          <nuxt-link
            to="/create-service/review"
            class="btn-primary cre-se-submit"
            >Lưu &#38; Tiếp tục</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'service',
};
</script>
