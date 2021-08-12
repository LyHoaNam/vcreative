<template>
  <div>
    <p class="text-32-8-m mb-12">Về người cung cấp dịch vụ</p>
    <div class="bl-supplier flex">
      <div
        class="bl-supplier-avatar"
        :style="{
          backgroundImage: `url(https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
        }"
      />
      <div class="bl-supplier-right">
        <div class="align-between">
          <div>
            <div class="align-center">
              <p class="text-20-n-0 bl-supplier-name">TaQuocBao</p>
              <p class="text-16-6">Đà Nẵng</p>
            </div>
            <p class="text-16-6 mb-8">Graphic designer</p>
            <eleRate :rate-start="4.6" :count-rate="23" />
          </div>
          <button class="btn-line-5 bl-supplier-btn">Liên hệ tôi</button>
        </div>
        <div class="mt-16 text-des">
          <p
            v-for="(line, idx) in des.split('\n')"
            :key="`${idx}-supplier-des`"
            class="text-14-8"
          >
            {{ line }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      des: 'Xin chào! Mình tên là Tạ Quốc Bảo và là một graphic designer đã có kinh nghiệm trên 2 năm trong ngành Thiết kế đồ họa.\nMình nhận thiết kế các sản phẩm về đồ họa, in ấn như:\n\nLogo - bộ nhận diện thương hiệu\nBanner website, facebook\nPoster, flyer',
    };
  },
};
</script>
