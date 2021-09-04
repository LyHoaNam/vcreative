<template>
  <table class="tb-package cre-se-table">
    <thead>
      <tr class="tb-package-head">
        <th class="tb-package-th first" />
        <th class="tb-package-th cre-se-table-header">CƠ BẢN</th>
        <th class="tb-package-th cre-se-table-header">TIÊU CHUẨN</th>
        <th class="tb-package-th cre-se-table-header">NÂNG CAO</th>
      </tr>
    </thead>
    <tbody>
      <tr class="tb-package-tr" height="100">
        <td class="tb-package-td tb-cell-center" rowspan="2">
          Các gói dịch vụ
        </td>
        <td class="tb-package-td" height="100">
          <textarea
            class="cre-se-table-ip"
            placeholder="Nhập tên gói"
            :value="getTitleTable('basic')"
            @change="handleChangePackage($event, 'basic')"
          />
        </td>
        <td class="tb-package-td" height="100">
          <textarea
            class="cre-se-table-ip"
            placeholder="Nhập tên gói"
            :value="getTitleTable('normal')"
            @change="handleChangePackage($event, 'normal')"
          />
        </td>
        <td class="tb-package-td" height="100">
          <textarea
            class="cre-se-table-ip"
            placeholder="Nhập tên gói"
            :value="getTitleTable('advanced')"
            @change="handleChangePackage($event, 'advanced')"
          />
        </td>
      </tr>
      <tr class="tb-package-tr">
        <td class="tb-package-td p8" height="220">
          <textarea
            class="cre-se-table-ip"
            placeholder="Mô tả ngắn gói dịch vụ của bạn"
            :value="getTitleTable('basic', false)"
            @change="handleChangePackage($event, 'basic', false)"
          />
        </td>
        <td class="tb-package-td" height="220">
          <textarea
            class="cre-se-table-ip"
            placeholder="Mô tả ngắn gói dịch vụ của bạn"
            :value="getTitleTable('normal', false)"
            @change="handleChangePackage($event, 'normal', false)"
          />
        </td>
        <td class="tb-package-td" height="220">
          <textarea
            class="cre-se-table-ip"
            placeholder="Mô tả ngắn gói dịch vụ của bạn"
            :value="getTitleTable('advanced', false)"
            @change="handleChangePackage($event, 'advanced', false)"
          />
        </td>
      </tr>
      <!-- giao hang -->
      <createServiceTableRowDelivery />
      <!-- options -->
      <createServiceTableRowOptions />
      <!-- file goc -->
      <tr class="tb-package-tr">
        <td class="tb-package-td">File gốc</td>
        <td class="tb-package-td">
          <div class="flex-center w-full">
            <label class="ip-box-con">
              <input
                v-model="checkedOriginalFile"
                type="checkbox"
                name="original-file"
                class="ip-original-file"
                value="basic"
              />
              <span class="ip-box-checkmark" />
            </label>
          </div>
        </td>
        <td class="tb-package-td">
          <div class="flex-center w-full">
            <label class="ip-box-con">
              <input
                v-model="checkedOriginalFile"
                type="checkbox"
                name="original-file"
                class="ip-original-file"
                value="normal"
              />
              <span class="ip-box-checkmark" />
            </label>
          </div>
        </td>
        <td class="tb-package-td">
          <div class="flex-center w-full">
            <label class="ip-box-con">
              <input
                v-model="checkedOriginalFile"
                type="checkbox"
                name="original-file"
                class="ip-original-file"
                value="advanced"
              />
              <span class="ip-box-checkmark" />
            </label>
          </div>
        </td>
      </tr>
      <!-- so luong thay doi -->
      <createServiceTableRowChange />
      <!-- gia -->
      <tr class="tb-package-tr">
        <td class="tb-package-td">Giá</td>
        <td class="tb-package-td">
          <div class="align-between">
            <input
              type="number"
              min="1"
              step="any"
              class="input-normal cre-se-table-price"
              :value="getPriceTable('basic')"
              @input="handleChangePrice($event, 'basic')"
            />
            <p class="text-16-7">VND</p>
          </div>
        </td>
        <td class="tb-package-td">
          <div class="align-between">
            <input
              type="number"
              min="1"
              step="any"
              class="input-normal cre-se-table-price"
              :value="getPriceTable('normal')"
              @input="handleChangePrice($event, 'normal')"
            />
            <p class="text-16-7">VND</p>
          </div>
        </td>
        <td class="tb-package-td">
          <div class="align-between">
            <input
              type="number"
              min="1"
              step="any"
              class="input-normal cre-se-table-price"
              :value="getPriceTable('advanced')"
              @input="handleChangePrice($event, 'advanced')"
            />
            <p class="text-16-7">VND</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { mapActions } from 'vuex';
import {
  NAME_STORE as namePriceList,
  GET_TITLE_TABLE,
  ADD_PACKAGE_TABLE,
  GET_DES_TABLE,
  SET_ORIGINAL_FILE,
  GET_ORIGINAL_FILE,
  GET_PRICE_TABLE,
  SET_PRICE_TABLE,
} from '~/store/create_service_price_list';
const TYPE_BASE = ['basic', 'normal', 'advanced'];
export default {
  computed: {
    checkedOriginalFile: {
      get() {
        return this.$store.getters[`${namePriceList}/${GET_ORIGINAL_FILE}`];
      },
      set(value) {
        const result = value.filter((item) => TYPE_BASE.includes(item));
        return this.$store.commit(
          `${namePriceList}/${SET_ORIGINAL_FILE}`,
          result
        );
      },
    },
  },
  methods: {
    ...mapActions({
      addTitlePackage: `${namePriceList}/${ADD_PACKAGE_TABLE}`,
    }),
    getTitleTable(type, isTitle = true) {
      if (isTitle)
        return this.$store.getters[`${namePriceList}/${GET_TITLE_TABLE}`](type);
      return this.$store.getters[`${namePriceList}/${GET_DES_TABLE}`](type);
    },
    handleChangePackage(e, key, isTitle = true) {
      const params = {
        isTitle,
        key,
        value: e.target.value,
      };
      this.addTitlePackage(params);
    },
    getPriceTable(type) {
      return this.$store.getters[`${namePriceList}/${GET_PRICE_TABLE}`](type);
    },
    handleChangePrice(e, key) {
      this.$store.commit(`${namePriceList}/${SET_PRICE_TABLE}`, {
        key,
        value: e.target.value,
      });
    },
  },
};
</script>
