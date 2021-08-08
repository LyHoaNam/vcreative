<template>
  <section class="pt-26 container pb-64">
    <div class="row">
      <div
        v-for="(item, idx) in listData"
        :key="`${idx}-top-category`"
        class="col col-lg-2"
      >
        <eleCategory :img="item.img" :txt="item.txt" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      listData: [
        {
          img: require('~/assets/images/category.jpg'),
          txt: 'Thiết kế xây dựng thương hiệu',
          url: '/',
        },
        {
          img: require('~/assets/images/web.jpg'),
          txt: 'Thiết kế Website & App',
          url: '/',
        },
        {
          img: require('~/assets/images/illustration.jpg'),
          txt: 'Vẽ minh họa',
          url: '/',
        },
        {
          img: require('~/assets/images/social-media.jpg'),
          txt: 'Thiết kế truyền thông',
          url: '/',
        },
        {
          img: require('~/assets/images/print-design.jpg'),
          txt: 'Thiết kế in ấn',
          url: '/',
        },
        {
          img: require('~/assets/images/3d.jpg'),
          txt: 'Thiết kế 3D',
          url: '/',
        },
      ],
    };
  },
};
</script>
