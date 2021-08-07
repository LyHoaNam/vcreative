<template>
  <div class="card">
    <div
      class="card-thumbnail"
      :style="{ backgroundImage: `url(${backgroundUrl})` }"
    />
    <div class="card-content">
      <eleUser />
      <p class="txt-14-7 mt-6 mb-8">
        Tôi sẽ thiết kế logo doanh nghiệp hiện đại, đơn giản trong 24 giờ
      </p>
      <div class="card-bot">
        <eleRate :rate="3.5678" :count-rate="235" />
        <div class="flex-between mt-8">
          <p class="txt-14-7">Từ <span class="font-bold">1.000.000</span></p>
          <eleIcon
            :img-url="isLike ? iconLike : iconUnlike"
            img-class="ic-like"
            @click.native="setLike()"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      backgroundUrl:
        'https://images.pexels.com/photos/1958734/pexels-photo-1958734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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