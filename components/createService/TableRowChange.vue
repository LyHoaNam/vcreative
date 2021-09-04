<template>
  <tr class="tb-package-tr">
    <td class="tb-package-td">Số lần chỉnh sửa</td>
    <td class="tb-package-td tb-cell-center">
      <client-only>
        <VSelect
          :options="lsOptions"
          label="txt"
          :clearable="false"
          :value="getChangeTable('basic')"
          @input="handleBasic"
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
          :options="lsOptions"
          label="txt"
          :clearable="false"
          :value="getChangeTable('normal')"
          @input="handleNormal"
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
          :options="lsOptions"
          label="txt"
          :clearable="false"
          :value="getChangeTable('advanced')"
          @input="handleAdvanced"
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
import { listOptions, HEAD_CHANGE_OPT } from '~/utils/skill.js';
import {
  NAME_STORE as namePriceList,
  GET_CHANGE_TABLE,
  SET_CHANGE_TABLE,
} from '~/store/create_service_price_list';
const lsOptions = listOptions();
lsOptions.unshift(HEAD_CHANGE_OPT);

export default {
  data() {
    return {
      lsOptions,
    };
  },
  methods: {
    getChangeTable(type) {
      return this.$store.getters[`${namePriceList}/${GET_CHANGE_TABLE}`](type);
    },
    handleSelected(key, val) {
      this.$store.commit(`${namePriceList}/${SET_CHANGE_TABLE}`, {
        key,
        value: val,
      });
    },
    handleBasic(val) {
      this.handleSelected('basic', val);
    },
    handleNormal(val) {
      this.handleSelected('normal', val);
    },
    handleAdvanced(val) {
      this.handleSelected('advanced', val);
    },
  },
};
</script>
