<template>
  <section class="card-pro">
    <eleIcon
      :img-url="isLike ? iconLike : iconUnlike"
      img-class="card-pro-like"
      @click.native="setLike()"
    />
    <div class="card-pro-content align-col-center">
      <eleIcon
        img-url="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        img-class="card-pro-avatar"
      />
      <p class="tt-status-online mt-8 mb-8">Online</p>
      <p class="text-20-n-m mb-2">Thuan Nguyen</p>
      <p class="text-14-6 mb-10">Graphic designer</p>
      <div class="align-center card-pro-rate mb-16">
        <eleRate :rate-start="4.5" />
        <p class="text-14-6 ml-5 line-h-1">(123 Đánh giá)</p>
      </div>
      <div class="align-center">
        <div class="ic-flat" />
        <p class="text-14-6 ml-7">Báo cáo</p>
      </div>
      <button class="btn-primary card-pro-btn">Liên hệ tôi</button>
    </div>
    <div class="mt-42 align-between mb-16">
      <div class="align-center">
        <div class="ic-pro-map" />
        <p class="text-14-6 ml-19">Khu vực</p>
      </div>
      <p class="text-14-7-m">Tp Hồ Chí Minh</p>
    </div>
    <div class="align-between mb-16">
      <div class="align-center">
        <div class="ic-pro-clock" />
        <p class="text-14-6 ml-19">Thời gian phản hồi</p>
      </div>
      <p class="text-14-7-m">95% (trong vòng 1 giờ)</p>
    </div>
    <div class="align-between mb-16">
      <div class="align-center">
        <div class="ic-pro-profile" />
        <p class="text-14-6 ml-19">Tham gia</p>
      </div>
      <p class="text-14-7-m">20/07/2021</p>
    </div>
    <div class="align-between">
      <div class="align-center">
        <div class="ic-pro-tran" />
        <p class="text-14-6 ml-19">Số lượng giao dịch</p>
      </div>
      <p class="text-14-7-m">123</p>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      iconLike: require('~/assets/images/icon/heart.png'),
      iconUnlike: require('~/assets/images/icon/heart-gray.png'),
      isLike: false,
    };
  },
  methods: {
    setLike() {
      this.isLike = !this.isLike;
    },
  },
};
</script>
