<template>
  <div>
    <div class="align-center">
      <div class="co-pro-col-left">
        <p class="text-16-8">
          Lĩnh vực chuyên môn<span class="text-16-w1"> *</span>
        </p>
      </div>
      <div class="co-pro-col-right align-center">
        <div class="co-ske-select">
          <client-only>
            <VSelect
              v-model="skillSelected"
              :options="major"
              label="txt"
              placeholder="Chọn lỉnh vực"
            >
              <!-- eslint-disable-next-line vue/no-unused-vars  -->
              <template #no-options="{ search, searching, loading }">
                Có vẻ như không có tỉnh thành nào đúng với ký tự tìm của bạn
              </template>
            </VSelect>
          </client-only>
        </div>
        <input class="input-normal co-ske-year mr-16 ml-16" type="number" />
        <p class="text-16-8">
          Năm kinh nghiệm<span class="text-16-w1"> *</span>
        </p>
      </div>
    </div>
    <div class="flex mt-28">
      <div class="co-pro-col-left">
        <p class="text-16-8">
          Kỹ năng/Dịch vụ<span class="text-16-w1"> *</span>
        </p>
      </div>
      <div class="co-pro-col-right">
        <collaboratorsCheckedS />
      </div>
    </div>
    <div class="flex mt-56">
      <div class="co-pro-col-left">
        <p class="text-16-8 mt-8">Chứng nhận/Bằng cấp</p>
        <p class="text-12-5">
          Bao gồm bất kỳ chứng chỉ, giải thưởng hoặc bằng cấp nào có liên quan
          đến dịch vụ bạn đang cung cấp
        </p>
      </div>
      <div class="co-pro-col-right flex-between">
        <input
          class="input-normal co-ske-evidence-ip"
          placeholder="Giấy chứng nhận/Giải thưởng/ Bằng cấp"
        />
        <div class="co-ske-evidence-year">
          <client-only>
            <VSelect v-model="yearSelected" :options="lsYear" placeholder="Năm">
              <!-- eslint-disable-next-line vue/no-unused-vars  -->
              <template #no-options="{ search, searching, loading }">
                Có vẻ như không có tỉnh thành nào đúng với ký tự tìm của bạn
              </template>
            </VSelect>
          </client-only>
        </div>
        <button class="btn-see-more co-ske-evidence-btn" @click.prevent="">
          Thêm mới
        </button>
      </div>
    </div>
    <div class="co-ske-hr" />
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
      major,
    };
  },
};
</script>
