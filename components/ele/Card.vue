<template>
  <div class="card">
    <div class="card-thumbnail" :style="{ backgroundImage: `url(${img})` }" />
    <div class="card-content">
      <slot name="user" />
      <p class="txt-14-7 mt-6 mb-8 card-txt-hover">
        {{ description }}
      </p>
      <div class="card-bot">
        <slot name="rate" />
        <div class="align-between mt-8">
          <p class="txt-14-7">
            Từ
            <span class="font-bold">{{ amount.toLocaleString('de-VI') }}</span>
          </p>
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
  props: {
    img: {
      type: String,
      require: true,
      default: '',
    },
    description: {
      type: String,
      require: true,
      default: '',
    },
    amount: {
      type: Number,
      require: true,
      default: 0,
    },
  },
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
