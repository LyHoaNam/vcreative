<template>
  <tr class="tb-package-tr">
    <td class="tb-package-td">Giao hàng</td>
    <td class="tb-package-td">
      <client-only>
        <VSelect
          v-model="deliveryBasic"
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
    </td>
    <td class="tb-package-td">
      <client-only>
        <VSelect
          v-model="deliveryNormal"
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
    </td>
    <td class="tb-package-td">
      <client-only>
        <VSelect
          v-model="deliveryAdvanced"
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
    </td>
  </tr>
</template>
<script>
import { listDay } from '~/utils/skill.js';
const lsDay = listDay();
export default {
  data() {
    return {
      deliveryBasic: lsDay[0],
      deliveryNormal: lsDay[0],
      deliveryAdvanced: lsDay[0],
      lsDay,
    };
  },
};
</script>
