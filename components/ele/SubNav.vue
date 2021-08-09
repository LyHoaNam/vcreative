<template>
  <div class="mn-sub-nav">
    <div class="container flex">
      <div
        v-for="item in list"
        :key="`${item.key}-submenu`"
        :class="`mn-sub-nav-item align-center${
          keyActive === item.key ? ' sub-nav-active' : ''
        }`"
        @click="handleClick(item.key)"
      >
        {{ item.txt }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyActive: 1,
      list: [
        {
          txt: 'Tổng quan',
          key: 1,
        },
        {
          txt: 'Mô tả dịch vụ',
          key: 2,
        },
        {
          txt: 'Người cung cấp dịch vụ',
          key: 3,
        },
        {
          txt: 'Các gói dịch vụ',
          key: 4,
        },
        {
          txt: 'Đánh giá',
          key: 5,
        },
      ],
    };
  },
  methods: {
    handleClick(key) {
      this.keyActive = key;
    },
  },
};
</script>
