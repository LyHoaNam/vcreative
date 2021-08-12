<template>
  <ul class="breadcrumb pt-28">
    <li
      v-for="(item, idx) in ls.slice(0, ls.length - 1)"
      :key="`${idx}-breadcrumb`"
      class="breadcrumb-item"
    >
      <nuxt-link :to="item.link">{{ item.txt }}</nuxt-link>
    </li>
    <li class="breadcrumb-item">
      {{ ls[ls.length - 1].txt }}
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      ls: [
        { txt: 'Thiết kế xây dựng thương hiệu', link: '/' },
        { txt: 'Thiết kế Logo', link: '/' },
      ],
    };
  },
};
</script>
