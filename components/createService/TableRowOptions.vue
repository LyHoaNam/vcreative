<template>
  <tr class="tb-package-tr">
    <td class="tb-package-td">Số lượng tùy chọn (Options)</td>
    <td class="tb-package-td tb-cell-center">
      <client-only>
        <VSelect
          v-model="optionBasic"
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
          v-model="optionNormal"
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
          v-model="optionAdvanced"
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
export default {
  data() {
    return {
      optionBasic: lsOptions[0],
      optionNormal: lsOptions[0],
      optionAdvanced: lsOptions[0],
      lsOptions,
    };
  },
};
</script>
