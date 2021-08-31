<template>
  <client-only>
    <modal
      name="CreateServiceComplete"
      classes="modal-sv-complete"
      width="900"
      height="636"
    >
      <h1 class="modal-sv-complete-title mb-42">Hoàn thành</h1>
      <p class="text-20-8 modal-sv-complete-text">
        Dịch vụ của bạn đã được tạo thành công. Vui lòng đợi trong 24h chúng tôi
        sẽ xác thực dịch vụ của bạn và thông báo cho bạn sớm nhất. Trong thời
        gian này bạn cũng có thể tạo thêm các dịch vụ mà bạn cung cấp.
      </p>
      <div class="flex-between modal-sv-complete-bot">
        <nuxt-link to="/services" class="btn-line">Về trang chủ</nuxt-link>
        <nuxt-link to="/create-service/summary" class="btn-primary">
          Tạo dịch vụ mới
        </nuxt-link>
      </div>
    </modal>
  </client-only>
</template>
<script>
export default {
  name: 'CreateServiceComplete',
};
</script>
