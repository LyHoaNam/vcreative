<template>
  <div class="mt-42">
    <div class="bl-info mb-16">
      <div class="row">
        <div
          v-for="item in lsHeader"
          :key="item.key"
          :class="`col col-lg-4 flex-center bl-info-header pointer${
            keyActive === item.key ? ' b-if-h-active' : ''
          }`"
          @click="handleClickHeader(item.key)"
        >
          <p class="text-16-6-m">{{ item.txt }}</p>
        </div>
      </div>
      <div class="bl-info-content">
        <div class="flex-between mt-20 mb-16">
          <p class="text-16-8-m">{{ title[keyActive] }}</p>
          <p class="text-16-c2">{{ mockAmount.toLocaleString('de-VI') }}</p>
        </div>
        <div class="text-14-8 pb-32">
          <p
            v-for="(line, idx) in mockDes.split('\n')"
            :key="`${idx}-line-des`"
            class="text-14-8"
          >
            {{ line }}
          </p>
        </div>
        <div class="flex pb-46">
          <div class="align-center pr-26">
            <div class="ic-clock" />
            <p class="pl-8 text-14-8-m">Giao hàng 1 ngày</p>
          </div>
          <div class="align-center">
            <div class="ic-edit" />
            <p class="pl-8 text-14-8-m">Chỉnh sửa không giới hạn</p>
          </div>
        </div>
        <div class="align-between">
          <p class="text-14-8-m">Bao gồm</p>
          <div
            :class="`bl-info-drop-down${isDropDown ? ' ic-down' : ''}`"
            @click="handleDropDown"
          >
            <div class="ic-chevron-right" />
          </div>
        </div>
        <div
          :class="`dropdown-content${
            isDropDown ? ' dropdown-content-active' : ''
          }`"
        >
          <div
            v-for="(record, idx) in mockLsFile"
            :key="`${idx}-file`"
            class="flex pb-8"
          >
            <div class="ic-green-check" />
            <p class="text-14-n pl-12">{{ record }}</p>
          </div>
        </div>
      </div>
      <div class="bl-info-footer">
        <button class="btn-primary">Tiếp tục</button>
        <div class="pt-24 flex-center">
          <span class="text-16-c2 pointer">So sánh các gói dịch vụ</span>
        </div>
      </div>
    </div>
    <button class="btn-line-5 bl-info-contact">Liên hệ tôi</button>
  </div>
</template>
<script>
import { HEADER_INFO_BLOCK, TITLE_INFO_BLOCK } from '~/utils/constant.js';
export default {
  data() {
    return {
      lsHeader: HEADER_INFO_BLOCK,
      title: TITLE_INFO_BLOCK,
      keyActive: HEADER_INFO_BLOCK[0].key,
      mockAmount: 700000,
      mockDes:
        'Thiết kế logo với 1 bản demo và chỉnh sửa không giới hạn\nNeque porro quisquam est qui dolorem ipsum quia dolor sit ame',
      isDropDown: false,
      mockLsFile: ['File gốc', 'Mockup'],
    };
  },
  methods: {
    handleClickHeader(key) {
      this.keyActive = key;
    },
    handleDropDown() {
      this.isDropDown = !this.isDropDown;
    },
  },
};
</script>
