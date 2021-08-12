<template>
  <div class="align-end">
    <div class="flex ic-start-contain">
      <div v-if="roundStart > 0" class="flex">
        <div
          v-for="(start, idx) in roundStart"
          :key="`${idx}-start-bl`"
          class="ic-start ic-img-start"
        />
      </div>
      <div v-if="blackStart > 0" class="flex">
        <div
          v-for="(start, idx) in blackStart"
          :key="`${idx}-start-bl`"
          class="ic-start ic-img-start-black"
        />
      </div>
    </div>
    <p class="card-rate-txt ml-8 pr-4">
      {{ Math.round(rateStart * 10) / 10 }}
    </p>
    <p v-if="countRate" class="card-rate-txt-count">({{ countRate }})</p>
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
      require: false,
      default: 0,
    },
    isSell: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  computed: {
    roundStart() {
      return Math.round(this.rateStart);
    },
    blackStart() {
      if (!this.rateStart) {
        return 0;
      }
      return 5 - Math.round(this.rateStart);
    },
  },
};
</script>
