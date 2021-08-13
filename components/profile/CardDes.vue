<template>
  <div class="card-pro-des">
    <p class="text-20-8-m mb-14">Mô tả</p>
    <div class="mb-40">
      <p
        v-for="(line, idx) in des.split('\n')"
        :key="`${idx}-line-des`"
        class="text-14-7"
      >
        {{ line }}
      </p>
    </div>
    <p class="text-20-8-m mb-14">Kỹ năng</p>
    <div class="row label-rel-con">
      <div
        v-for="(label, idx) in lsLabel"
        :key="`${idx}-label-skill`"
        class="label-rel-item"
      >
        <label class="label-rel">
          {{ label }}
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      des: 'Xin chào! Mình tên là Tạ Quốc Bảo và là một graphic designer đã có kinh nghiệm trên 2 năm trong ngành Thiết kế đồ họa.\nMình nhận thiết kế các sản phẩm về đồ họa, in ấn như:\n\nLogo - bộ nhận diện thương hiệu\nBanner website, facebook\nPoster, flyer\nName card visit\nStandee\nBrochure | Profile\nCatalogue\n...\n\nNếu bạn đang tìm kiếm 1 freelance để tạo ra 1 sản phẩm mang tính sáng tạo cao, thu hút và chất lượng\nHãy liên hệ với mình nhé',
      lsLabel: [
        'Thiết kế Logo ',
        'Thiết kế Website',
        'Thiết kế Infographic',
        'Thiết kế Banner',
        'Thiết kế Bộ nhận dạng Thương hiệu',
      ],
    };
  },
};
</script>
