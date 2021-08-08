<template>
  <div class="category">
    <div
      class="category-thumbnail"
      :style="{ backgroundImage: `url(${img})` }"
    />
    <p class="text-16-8 pt-16">{{ txt }}</p>
  </div>
</template>
<script>
export default {
  props: {
    txt: {
      type: String,
      require: true,
      default: '',
    },
    img: {
      type: String,
      require: true,
      default: '',
    },
  },
};
</script>
