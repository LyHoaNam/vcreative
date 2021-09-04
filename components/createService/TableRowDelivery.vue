<template>
  <tr class="tb-package-tr">
    <td class="tb-package-td">Giao hàng</td>
    <td class="tb-package-td">
      <client-only>
        <VSelect
          :value="getDelivery('basic')"
          :options="lsDay"
          label="txt"
          :clearable="false"
          @input="handleBasic"
        >
          <!-- eslint-disable-next-line vue/no-unused-vars  -->
          <template #no-options="{ search, searching, loading }">
            Có vẻ như không có ngày nào đúng với ký tự tìm của bạn
          </template>
        </VSelect>
      </client-only>
    </td>
    <td class="tb-package-td">
      <client-only>
        <VSelect
          :value="getDelivery('normal')"
          :options="lsDay"
          label="txt"
          :clearable="false"
          @input="handleNormal"
        >
          <!-- eslint-disable-next-line vue/no-unused-vars  -->
          <template #no-options="{ search, searching, loading }">
            Có vẻ như không có ngày nào đúng với ký tự tìm của bạn
          </template>
        </VSelect>
      </client-only>
    </td>
    <td class="tb-package-td">
      <client-only>
        <VSelect
          :value="getDelivery('advanced')"
          :options="lsDay"
          label="txt"
          :clearable="false"
          @input="handleAdvanced"
        >
          <!-- eslint-disable-next-line vue/no-unused-vars  -->
          <template #no-options="{ search, searching, loading }">
            Có vẻ như không có ngày nào đúng với ký tự tìm của bạn
          </template>
        </VSelect>
      </client-only>
    </td>
  </tr>
</template>
<script>
import { listDay } from '~/utils/skill.js';
import {
  NAME_STORE as namePriceList,
  GET_DELIVERY_TABLE,
  SET_DELIVERY_TABLE,
} from '~/store/create_service_price_list';

const lsDay = listDay();
export default {
  data() {
    return {
      lsDay,
    };
  },
  methods: {
    getDelivery(type) {
      return this.$store.getters[`${namePriceList}/${GET_DELIVERY_TABLE}`](
        type
      );
    },
    handleSelected(key, val) {
      this.$store.commit(`${namePriceList}/${SET_DELIVERY_TABLE}`, {
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
