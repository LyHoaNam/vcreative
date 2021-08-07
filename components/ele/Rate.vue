<template>
  <div class="align-center">
    <div class="flex icon-start-contain">
      <div v-for="(item, idx) in Math.round(rate)" :key="`${idx}-rate`">
        <eleIcon
          :img-url="require('~/assets/images/icon/icon-start.png')"
          img-class="ic-start"
        />
      </div>
      <div v-for="(item, idx) in 5 - Math.round(rate)" :key="`${idx}-rate`">
        <eleIcon
          :img-url="require('~/assets/images/icon/icon-start-black.png')"
          img-class="ic-start"
        />
      </div>
    </div>
    <div class="card-rate-txt pl-4 pr-4">
      {{ Math.round(rate * 10) / 10 }}
    </div>
    <div class="card-rate-txt-count">({{ countRate }})</div>
  </div>
</template>
<script>
export default {
  props: {
    rate: {
      type: Number,
      require: true,
      default: 5,
    },
    countRate: {
      type: Number,
      require: true,
      default: 0,
    },
  },
};
</script>