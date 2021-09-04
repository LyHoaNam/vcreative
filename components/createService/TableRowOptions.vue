<template>
  <tr class="tb-package-tr">
    <td class="tb-package-td">Số lượng tùy chọn (Options)</td>
    <td class="tb-package-td tb-cell-center">
      <client-only>
        <VSelect
          :options="lsOptions"
          label="txt"
          :clearable="false"
          :value="getNumberTable('basic')"
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
          :value="getNumberTable('normal')"
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
          :value="getNumberTable('advanced')"
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
import { listOptions } from '~/utils/skill.js';
import {
  NAME_STORE as namePriceList,
  GET_NUMBER_TABLE,
  SET_NUMBER_TABLE,
} from '~/store/create_service_price_list';
const lsOptions = listOptions();
export default {
  data() {
    return {
      lsOptions,
    };
  },
  methods: {
    getNumberTable(type) {
      return this.$store.getters[`${namePriceList}/${GET_NUMBER_TABLE}`](type);
    },
    handleSelected(key, val) {
      this.$store.commit(`${namePriceList}/${SET_NUMBER_TABLE}`, {
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
