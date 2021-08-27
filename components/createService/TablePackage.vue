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
          <textarea class="cre-se-table-ip" placeholder="Nhập tên gói" />
        </td>
        <td class="tb-package-td" height="100">
          <textarea class="cre-se-table-ip" placeholder="Nhập tên gói" />
        </td>
        <td class="tb-package-td" height="100">
          <textarea class="cre-se-table-ip" placeholder="Nhập tên gói" />
        </td>
      </tr>
      <tr class="tb-package-tr">
        <td class="tb-package-td p8" height="220">
          <textarea
            class="cre-se-table-ip"
            placeholder="Mô tả ngắn gói dịch vụ của bạn"
          />
        </td>
        <td class="tb-package-td" height="220">
          <textarea
            class="cre-se-table-ip"
            placeholder="Mô tả ngắn gói dịch vụ của bạn"
          />
        </td>
        <td class="tb-package-td" height="220">
          <textarea
            class="cre-se-table-ip"
            placeholder="Mô tả ngắn gói dịch vụ của bạn"
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
                name="save-login"
                class="ip-price-ls-checked"
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
                name="save-login"
                class="ip-price-ls-checked"
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
                name="save-login"
                class="ip-price-ls-checked"
                value="advanced"
              />
              <span class="ip-box-checkmark" />
            </label>
          </div>
        </td>
      </tr>
      <!-- so luong thay doi -->
      <createServiceTableRowChange />
      <tr class="tb-package-tr">
        <td class="tb-package-td">File gốc</td>
        <td class="tb-package-td">
          <div class="align-between">
            <input
              type="number"
              min="1"
              step="any"
              class="input-normal cre-se-table-price"
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
            />
            <p class="text-16-7">VND</p>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data() {
    return {
      checkedOriginalFile: [],
    };
  },
};
</script>
