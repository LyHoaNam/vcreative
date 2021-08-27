<template>
  <tr class="tb-package-tr">
    <td class="tb-package-td">Số lần chỉnh sửa</td>
    <td class="tb-package-td tb-cell-center">
      <client-only>
        <VSelect
          v-model="changeBasic"
          :options="lsOptions"
          label="txt"
          :clearable="false"
        >
          <!-- eslint-disable-next-line vue/no-unused-vars  -->
          <template #no-options="{ search, searching, loading }">
            Có vẻ như không có số lượng tùy chọn nào đúng với ký tự tìm của bạn
          </template>
        </VSelect>
      </client-only>
    </td>
    <td class="tb-package-td tb-cell-center">
      <client-only>
        <VSelect
          v-model="changeNormal"
          :options="lsOptions"
          label="txt"
          :clearable="false"
        >
          <!-- eslint-disable-next-line vue/no-unused-vars  -->
          <template #no-options="{ search, searching, loading }">
            Có vẻ như không có số lượng tùy chọn nào đúng với ký tự tìm của bạn
          </template>
        </VSelect>
      </client-only>
    </td>
    <td class="tb-package-td tb-cell-center">
      <client-only>
        <VSelect
          v-model="changeAdvanced"
          :options="lsOptions"
          label="txt"
          :clearable="false"
        >
          <!-- eslint-disable-next-line vue/no-unused-vars  -->
          <template #no-options="{ search, searching, loading }">
            Có vẻ như không có số lượng tùy chọn nào đúng với ký tự tìm của bạn
          </template>
        </VSelect>
      </client-only>
    </td>
  </tr>
</template>
<script>
import { listOptions } from '~/utils/skill.js';
const lsOptions = listOptions();
lsOptions.unshift({ txt: 'Không giới hạn', key: 'unlimit' });
export default {
  data() {
    return {
      changeBasic: lsOptions[0],
      changeNormal: lsOptions[0],
      changeAdvanced: lsOptions[0],
      lsOptions,
    };
  },
};
</script>
