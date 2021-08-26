<template>
  <table class="table-more-service">
    <tr class="table-more-service-tr">
      <td class="table-more-service-td">
        <label class="ip-box-con">
          Giao hàng nhanh
          <input type="checkbox" name="save-login" class="ip-addmore-service" />
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
          <input type="checkbox" name="save-login" class="ip-addmore-service" />
          <span class="ip-box-checkmark" />
        </label>
      </td>
    </tr>
    <tr class="table-more-service-tr">
      <td class="table-more-service-td">
        <label class="ip-box-con">
          Thêm Style
          <input type="checkbox" name="save-login" class="ip-addmore-service" />
          <span class="ip-box-checkmark" />
        </label>
      </td>
    </tr>
  </table>
</template>
