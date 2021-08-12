<template>
  <div :class="isChild ? 'ml-48' : 'p-s-d-feedback-cmt'">
    <div class="align-between">
      <eleUserLo
        avatar="https://images.pexels.com/photos/3131809/pexels-photo-3131809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        name="dlt206"
        location="Hồ Chí Minh"
        date="20/07/2021"
      />
      <slot name="rate" />
    </div>
    <div class="pt-8 ml-46 mb-36">
      <p
        v-for="(line, idx) in cmt.split('\n')"
        :key="`${idx}-line-des`"
        class="text-14-7"
      >
        {{ line }}
      </p>
      <div v-if="lsImg" class="img-cmt-con row">
        <div
          v-for="(img, idx) in lsImg"
          :key="`${idx}-cmt-img`"
          class="img-cmt-item"
        >
          <div class="img-cmt" :style="{ backgroundImage: `url(${img})` }" />
        </div>
      </div>
    </div>
    <slot name="child" />
  </div>
</template>
<script>
export default {
  props: {
    isChild: {
      type: Boolean,
      require: false,
      default: false,
    },
    lsImg: {
      type: Array,
      require: false,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      // eslint-disable-next-line quotes
      cmt: `It was great working with seller this was my first purchase here on fiverr. Very easy to work with and I'm happy with the finished product. I also liked how quick they were to respond to my corrections that I wanted. I would recomend them to someone else in the future`,
    };
  },
};
</script>
