<template>
  <div class="container-xsm pt-40 pb-106">
    <h1 class="text-32-8 mb-12">Tổng quan</h1>
    <h3 class="text-16-6 font-regular co-pro-des">
      Hãy cho chúng tôi biết về tổng quan dịch vụ mà bạn cung cấp để hiển thị
      đến khách hàng
    </h3>
    <div class="co-pro-hr mt-26 mb-24">
      <span class="text-16-w1">* </span
      ><span class="text-16-6 font-itaclic">Trường bắt buộc</span>
    </div>
    <form class="pb-106 cre-se-su-content" @submit.prevent="handleSubmit">
      <div class="flex mb-20">
        <div class="co-pro-col-left">
          <p class="text-16-8">Tiêu đề<span class="text-16-w1"> *</span></p>
        </div>
        <div class="co-pro-col-right flex">
          <div class="cre-se-su-center">
            <textarea
              v-model="valueDes"
              class="textarea-normal"
              placeholder="Tôi có thể thiết kế logo nhanh và hiện đại"
              maxlength="80"
            />
            <div class="align-between mt-8">
              <p />
              <p class="text-16-5">{{ valueDes.length }} / 80</p>
            </div>
          </div>
          <p class="text-16-6 ml-42 cre-se-su-des">
            Hãy cho chúng tôi biết về tổng quan dịch vụ mà bạn cung cấp để hiển
            thị đến khách hàng
          </p>
        </div>
      </div>
      <div class="flex mb-42">
        <div class="co-pro-col-left">
          <p class="text-16-8">Danh mục<span class="text-16-w1"> *</span></p>
        </div>
        <div class="co-pro-col-right">
          <div class="flex-between cre-se-su-center">
            <div class="cre-se-su-select">
              <client-only>
                <VSelect
                  v-model="categorySelected"
                  :options="skillAndService"
                  label="txt"
                  placeholder="Chọn danh mục"
                >
                  <!-- eslint-disable-next-line vue/no-unused-vars  -->
                  <template #no-options="{ search, searching, loading }">
                    Có vẻ như không có tỉnh thành nào đúng với ký tự tìm của bạn
                  </template>
                </VSelect>
              </client-only>
            </div>
            <div class="cre-se-su-select">
              <client-only>
                <VSelect
                  v-model="typeSelected"
                  :options="lsType"
                  label="txt"
                  placeholder="Chọn thể loại"
                >
                  <!-- eslint-disable-next-line vue/no-unused-vars  -->
                  <template #no-options="{ search, searching, loading }">
                    Có vẻ như không có tỉnh thành nào đúng với ký tự tìm của bạn
                  </template>
                </VSelect>
              </client-only>
            </div>
          </div>
        </div>
      </div>
      <div class="flex mb-22">
        <div class="co-pro-col-left">
          <p class="text-16-8">Định dạng file</p>
        </div>
        <div class="co-pro-col-right">
          <div class="row cre-se-su-files">
            <div
              v-for="(file, idx) in listFiles"
              :key="`${idx}-file`"
              class="col col-lg-6 mb-22"
            >
              <label class="ip-box-con">
                {{ file.txt }}
                <input
                  v-model="checkedFile"
                  type="checkbox"
                  name="save-login"
                  class="ip-create-service-profile"
                  :value="file.key"
                />
                <span class="ip-box-checkmark" />
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="co-pro-col-left">
          <p class="text-16-8">Từ khóa tìm kiếm</p>
        </div>
        <div class="co-pro-col-right flex">
          <div class="cre-se-su-center">
            <textarea
              v-model="valueDes"
              class="textarea-normal cre-se-su-search"
            />
            <p class="right text-14-5">
              Tối đa 5 từ khóa. Sử dùng chữ cái và số.
            </p>
          </div>
        </div>
      </div>
      <div class="flex mt-56">
        <div class="co-pro-col-left" />
        <div class="cre-se-su-center">
          <div class="right flex">
            <button class="btn-line-5 mr-24 cre-se-cancel">Hủy</button>
            <button class="btn-primary cre-se-submit">
              Lưu &#38; Tiếp tục
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { skillAndService } from '~/utils/skill.js';
import { LIST_FILES } from '~/utils/constant.js';
export default {
  layout: 'service',
  data() {
    return {
      valueDes: '',
      categorySelected: '',
      skillAndService,
      typeSelected: '',
      lsType: ['Cơ bản', 'Tiêu chuẩn', 'Nâng cao'],
      listFiles: LIST_FILES,
      checkedFile: [],
    };
  },
};
</script>
