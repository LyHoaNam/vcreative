<template>
  <div class="align-end">
    <div class="flex icon-start-contain">
      <eleIcon
        v-for="(item, idx) in Math.round(rateStart)"
        :key="`${idx}-${Math.random()}-rate`"
        :img-url="require('~/assets/images/icon/icon-start.png')"
        img-class="ic-start"
      />
      <div
        v-for="(item, idx) in 5 - Math.round(rateStart)"
        :key="`${idx}-${Math.random()}-rate-bl`"
      >
        <eleIcon
          :img-url="require('~/assets/images/icon/icon-start-black.png')"
          img-class="ic-start"
        />
      </div>
    </div>
    <div class="card-rate-txt pl-4 pr-4">
      {{ Math.round(rateStart * 10) / 10 }}
    </div>
    <div class="card-rate-txt-count">({{ countRate }})</div>
  </div>
</template>
<script>
export default {
  props: {
    rateStart: {
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
