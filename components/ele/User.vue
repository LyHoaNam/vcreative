<template>
  <div class="flex">
    <div class="avatar" :style="{ backgroundImage: `url(${avatar})` }" />
    <div class="pl-8">
      <p class="txt-el-user-name">{{ name }}</p>
      <p v-if="ontop" class="txt-el-user-note">{{ ontop }}</p>
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
    ontop: {
      type: String,
      require: false,
      default: '',
    },
  },
};
</script>
