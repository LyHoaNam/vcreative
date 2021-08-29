<template>
  <div class="bl-create">
    <div class="flex-between mb-8">
      <p class="text-16-8">Câu hỏi</p>
      <div class="align-center">
        <label class="switch">
          <input v-model="mandatory" type="checkbox" />
          <span class="switch-slider" />
        </label>
        <p class="text-16-8 ml-16">Bắt buộc</p>
      </div>
    </div>
    <div class="mb-32 bl-create-ques">
      <textarea
        v-model="ques"
        class="textarea-normal"
        placeholder="Nhập câu hỏi"
      />
    </div>
    <p class="text-16-8 mb-8">Loại câu trả lời</p>
    <div class="bl-create-type mb-16">
      <client-only>
        <VSelect
          v-model="typeBrief"
          :options="lsTypeBrief"
          label="type"
          :clearable="false"
        >
          <!-- eslint-disable-next-line vue/no-unused-vars  -->
          <template #no-options="{ search, searching, loading }">
            Có vẻ như không có tỉnh thành nào đúng với ký tự tìm của bạn
          </template>
        </VSelect>
      </client-only>
    </div>
    <component
      :is="planActive[typeBrief.key]"
      v-bind="{ typeItem: typeBrief.key }"
    />
    <div class="flex-between">
      <div />
      <button class="btn-primary bl-create-btn" @click="handleAddMore">
        Thêm
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import ItemList from './ItemList';
import NullComp from './NullComp';
import { lsTypeBrief } from '~/utils/constant.js';
import {
  NAME_STORE as nameBrief,
  ADD_ITEM_LIST_CPN,
} from '~/store/create_service_brief.js';
const PLAN_ACTIVE = {
  [lsTypeBrief[0].key]: NullComp,
  [lsTypeBrief[2].key]: NullComp,
  [lsTypeBrief[2].key]: ItemList,
  [lsTypeBrief[3].key]: ItemList,
  [lsTypeBrief[4].key]: ItemList,
};
export default {
  data() {
    return {
      lsTypeBrief,
      typeBrief: lsTypeBrief[0],
      planActive: PLAN_ACTIVE,
      mandatory: true,
      ques: '',
    };
  },
  methods: {
    ...mapActions({
      UPDATE_LATEST_DATE: `${nameBrief}/${ADD_ITEM_LIST_CPN}`,
    }),
    handleAddMore() {
      const params = {
        ques: this.ques,
        mandatory: this.mandatory,
        type: this.typeBrief.key,
      };
      this.ques = '';
      this.UPDATE_LATEST_DATE(params);
    },
  },
};
</script>
