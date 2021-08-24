<template>
  <div class="container-xsm pt-40 pb-106">
    <h1 class="text-32-8 mb-12">Kỹ năng và kinh nghiệm</h1>
    <h3 class="text-16-6 font-regular co-pro-des">
      Đây là thời điểm bạn để bạn tỏa sáng. Cho người mua tiềm năng biết bạn làm
      tốt nhất điều gì và các kỹ năng, kinh nghiệm của bạn
    </h3>
    <div class="co-pro-hr mt-26 mb-24">
      <span class="text-16-w1">* </span
      ><span class="text-16-6 font-itaclic">Trường bắt buộc</span>
    </div>
    <form class="co-pro-content pb-106" @submit.prevent="handleSubmit">
      <collaboratorsContentS
        v-for="(con, idx) in listContent"
        :key="`${idx}-content-s`"
      />
      <button class="btn-secondary" @click.prevent="addMoreMajor">
        Thêm lĩnh vực khác
      </button>
      <button class="btn-primary co-pro-continue">Tiếp tục</button>
    </form>
  </div>
</template>
<script>
import { major, listYear } from '~/utils/skill.js';

export default {
  layout: 'collaborators',
  data() {
    return {
      skillSelected: '',
      yearSelected: '',
      lsYear: listYear(),
      listContent: [1],
      major,
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push({ path: '/collaborators-register/link-security' });
    },
    addMoreMajor() {
      const newValue = this.listContent[this.listContent.length - 1];
      this.listContent.push(newValue);
    },
  },
};
</script>
