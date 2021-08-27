<template>
  <table class="table-more-service">
    <tbody>
      <tr class="table-more-service-tr">
        <td class="table-more-service-td">
          <label class="ip-box-con">
            Giao hàng nhanh
            <input
              type="checkbox"
              name="save-login"
              class="ip-addmore-service"
            />
            <span class="ip-box-checkmark" />
          </label>
        </td>
      </tr>
      <tr class="table-more-service-tr">
        <td class="table-more-service-td cre-se-more-con">
          <createServiceRowPackage category="Gói cơ bản" />
          <createServiceRowPackage category="Gói tiêu chuẩn" />
          <createServiceRowPackage category="Gói nâng cao" />
        </td>
      </tr>
      <tr class="table-more-service-tr">
        <td class="table-more-service-td">
          <label class="ip-box-con">
            Thêm số lượng tùy chọn (Options)
            <input
              type="checkbox"
              name="save-login"
              class="ip-addmore-service"
            />
            <span class="ip-box-checkmark" />
          </label>
        </td>
      </tr>
      <tr class="table-more-service-tr">
        <td class="table-more-service-td">
          <label class="ip-box-con">
            Thêm Style
            <input
              type="checkbox"
              name="save-login"
              class="ip-addmore-service"
            />
            <span class="ip-box-checkmark" />
          </label>
        </td>
      </tr>
      <createServiceAdditionalServices
        v-for="(record, idx) in lsAdditionalServices"
        :key="`${idx}-addition-services`"
      />
      <tr class="table-more-service-tr">
        <td class="table-more-service-td">
          <div class="align-center pointer" @click="handleAddAdditionalService">
            <div class="ic-plus-square" />
            <p class="text-16-c2 ml-22 line-h-1">Thêm dịch vụ bổ sung</p>
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
      lsAdditionalServices: [],
    };
  },
  methods: {
    handleAddAdditionalService() {
      const indexService = this.lsAdditionalServices.length + 1;
      this.lsAdditionalServices.push(indexService);
    },
  },
};
</script>
