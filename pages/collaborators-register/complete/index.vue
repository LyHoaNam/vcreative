<template>
  <div class="container">
    <div class="co-complete-hero" />
    <h1 class="co-complete-title">Chúc mừng bạn!!</h1>
    <p class="text-24-8 co-complete-des">
      Hồ sơ của bạn đã hoàn thành! Hãy bắt đầu thêm dịch vụ của bạn để sẵn sàng
      quảng cáo đến khách hàng
    </p>
    <nuxt-link to="/services" class="btn-primary co-complete-btn"
      >Bắt đầu thêm dịch vụ</nuxt-link
    >
  </div>
</template>
<script>
export default {
  layout: 'onlyheader',
};
</script>
