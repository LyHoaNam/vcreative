<template>
  <div :class="`${imgClass} ic-base`">
    <img :src="imgUrl" :alt="imgAlt" :width="imgW" :height="imgH" />
  </div>
</template>
<script>
export default {
  props: {
    imgClass: {
      type: String,
      require: false,
      default: 'icon-con',
    },
    imgUrl: {
      type: String,
      require: true,
      default: '',
    },
    imgAlt: {
      type: String,
      require: false,
      default: 'icon',
    },
    imgW: {
      type: Number,
      require: false,
      default: 10,
    },
    imgH: {
      type: Number,
      require: false,
      default: 10,
    },
  },
};
</script>
