<template>
  <div class="container-xsm pt-40 pb-106">
    <h1 class="text-32-8 mb-12">Phạm vi và bảng giá</h1>
    <h3 class="text-16-6 font-regular co-pro-des">
      Bạn có thể cung cấp cho người mua phạm vi công việc và tùy chọn giao hàng
      trong tối đa 90 ngày
    </h3>
    <div class="co-pro-hr mt-26 mb-64 cre-se-container">
      <span class="text-16-w1">* </span
      ><span class="text-16-6 font-itaclic">Trường bắt buộc</span>
    </div>
    <div class="mt-8 flex">
      <div class="cre-se-container">
        <createServiceTablePackage />
        <h1 class="text-32-8 mb-32">Dịch vụ bổ sung</h1>
        <createServiceMoreService />
        <div class="flex-between mt-56">
          <div />
          <div class="flex">
            <nuxt-link
              to="/create-service/summary"
              class="btn-line-5 mr-24 cre-se-cancel"
              >Quay lại</nuxt-link
            >
            <nuxt-link
              to="/create-service/descriptions"
              class="btn-primary cre-se-submit"
            >
              Lưu &#38; Tiếp tục
            </nuxt-link>
          </div>
        </div>
      </div>
      <p class="text-16-6 ml-42">
        Hãy cho chúng tôi biết về tổng quan dịch vụ mà bạn cung cấp để hiển thị
        đến khách hàng
      </p>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'service',
};
</script>
