<template>
  <tr class="table-more-service-tr cre-se-add-ser">
    <td class="table-more-service-td cre-se-add-ser-row">
      <div class="flex">
        <div class="cre-se-add-ser-checked">
          <label class="ip-box-con">
            <input
              type="checkbox"
              name="additional-services"
              class="ip-addmore-service"
              checked
            />
            <span class="ip-box-checkmark" />
          </label>
        </div>
        <div class="w-full">
          <input
            type="text"
            class="input-normal mb-16"
            placeholder="Nhập tên dịch vụ"
          />
          <textarea
            v-model="valueDes"
            type="text"
            placeholder="Mô tả dịch vụ"
            class="textarea-normal"
            length="150"
          />
          <p class="text-16-5 right">{{ valueDes.length }}/150</p>
          <div class="align-between pt-8 w-full">
            <div class="align-center">
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
            </div>
            <div class="align-center">
              <p class="text-16-7 mr-8">Thêm</p>
              <input type="number" min="1" step="any" class="input-normal" />
              <p class="text-16-7 ml-8">VND</p>
            </div>
          </div>
        </div>
      </div>
    </td>
  </tr>
</template>
<script>
import { listDay } from '~/utils/skill.js';
const lsDay = listDay();
export default {
  data() {
    return {
      valueDes: '',
      daySelected: lsDay[0],
      lsDay,
    };
  },
};
</script>
