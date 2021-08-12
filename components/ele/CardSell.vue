<template>
  <div class="card-sell">
    <div class="card-thumbnail" :style="{ backgroundImage: `url(${img})` }" />
    <div class="card-content">
      <slot name="user" />
      <p class="text-14-7 mt-6 mb-8 card-txt-hover">
        {{ description }}
      </p>
      <div class="card-bot">
        <div class="card-sell-lb flex pb-10">
          <div
            v-for="(lb, idx) in lsLabel"
            :key="`${idx}-${Math.random()}-label`"
            class="card-sell-lb-item"
          >
            <label class="label-nm">
              {{ lb }}
            </label>
          </div>
        </div>
        <slot name="rate" />
        <div class="align-between mt-16">
          <p class="text-14-7 text-16-w2">
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
    lsLabel: {
      type: Array,
      require: true,
      default: () => {
        return [];
      },
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
