<template>
  <div class="mt-64 mb-32">
    <p class="text-32-8-m mb-12">Mô tả dịch vụ</p>
    <div>
      <p
        v-for="(line, idx) in valueDes.split('\n')"
        :key="`${idx}-line-des`"
        class="text-14-8"
      >
        {{ line }}
      </p>
    </div>
  </div>
</template>
<script>
import {
  NAME_STORE as nameDes,
  GET_DESCRIPTION_SV,
} from '~/store/create_service_des.js';
export default {
  data() {
    return {
      des: 'Xin chào! Mình tên là Tạ Quốc Bảo và là một graphic designer đã có kinh nghiệm trên 2 năm trong ngành Thiết kế đồ họa.\nMình nhận thiết kế các sản phẩm về đồ họa, in ấn như:\n\nLogo - bộ nhận diện thương hiệu\nBanner website, facebook\nPoster, flyer\nName card visit\nStandee\nBrochure | Profile\nCatalogue\n...\n\nNếu bạn đang tìm kiếm 1 freelance để tạo ra 1 sản phẩm mang tính sáng tạo cao, thu hút và chất lượng\nHãy liên hệ với mình nhé',
    };
  },
  computed: {
    valueDes() {
      if (this.$route.name === 'create-service-review') {
        return this.$store.getters[`${nameDes}/${GET_DESCRIPTION_SV}`];
      }
      return this.des;
    },
  },
};
</script>
