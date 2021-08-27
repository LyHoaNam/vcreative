<template>
  <div class="cre-se-more-row">
    <p class="text-16-7-m cre-se-more-title">{{ category }}</p>
    <p class="text-16-7 cre-se-more-title">Giao hàng nhanh</p>
    <div class="cre-se-more-dropdown mr-20">
      <client-only>
        <VSelect
          v-model="daySelected"
          :options="lsDay"
          label="txt"
          :clearable="false"
        >
          <!-- eslint-disable-next-line vue/no-unused-vars  -->
          <template #no-options="{ search, searching, loading }">
            Có vẻ như không có ngày nào đúng với ký tự tìm của bạn
          </template>
        </VSelect>
      </client-only>
    </div>
    <p class="text-16-7 mr-8">Thêm</p>
    <input type="number" min="1" step="any" class="input-normal" />
    <p class="text-16-7 ml-8">VND</p>
  </div>
</template>
<script>
import { listDay } from '~/utils/skill.js';
const lsDay = listDay();
export default {
  props: {
    category: {
      type: String,
      require: true,
      default: '',
    },
  },
  data() {
    return {
      daySelected: lsDay[0],
      lsDay,
    };
  },
};
</script>
