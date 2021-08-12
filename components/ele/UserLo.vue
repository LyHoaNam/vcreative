<template>
  <div class="flex">
    <div class="avatar-cmt" :style="{ backgroundImage: `url(${avatar})` }" />
    <div class="pl-12 pt-4">
      <div class="flex">
        <p class="text-16-8-m">{{ name }}</p>
        <p class="text-14-5 pl-14">{{ location }}</p>
      </div>
      <p class="text-14-5 pt-4">{{ date }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    avatar: {
      type: String,
      require: true,
      default: '',
    },
    name: {
      type: String,
      require: true,
      default: '',
    },
    date: {
      type: String,
      require: true,
      default: '',
    },
    location: {
      type: String,
      require: true,
      default: '',
    },
  },
};
</script>
