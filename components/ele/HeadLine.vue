<template>
  <div class="align-between mb-26">
    <h1 class="title">{{ title }}</h1>
    <nuxt-link :to="href" class="block link-normal">
      {{ sub }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: '',
    },
    sub: {
      type: String,
      require: true,
      default: '',
    },
    href: {
      type: String,
      require: true,
      default: '',
    },
  },
};
</script>
