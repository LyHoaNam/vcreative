<template>
  <div class="container-sm pt-40 pb-106">
    <h1 class="text-32-8 mb-12">Thông tin cá nhân</h1>
    <h3 class="text-16-6 font-regular co-pro-des">
      Hãy cho chúng tôi biết một chút về thông tin của bạn. Thông tin này sẽ
      định danh cá nhân bạn và bảo mật tài khoản của bạn
    </h3>
    <div class="co-pro-hr mt-26 mb-24">
      <span class="text-16-w1">* </span
      ><span class="text-16-6 font-itaclic">Trường bắt buộc</span>
    </div>
    <form class="co-pro-content pb-106">
      <div class="align-center">
        <div class="co-pro-col-left">
          <p class="text-16-8">
            Ảnh đại diện<span class="text-16-w1"> *</span>
          </p>
          <p class="text-12-5">
            Dung lượng &lt; 1MB. Định dạng hỗ trợ: jpg, jpeg, png, gif.
          </p>
        </div>
        <div class="co-pro-col-right">
          <client-only>
            <image-uploader
              :preview="true"
              :class-name="['fileinput']"
              capture="environment"
              :debug="1"
              do-not-resize="gif"
              :auto-rotate="true"
              output-format="verbose"
              class="co-pro-avatar"
              @input="setImage"
            >
              <label
                slot="upload-label"
                for="fileInput"
                :class="`co-pro-avatar-thumb flex-center${
                  hasImg ? ' op-hide' : ''
                }`"
              >
                <figure class="text-center">
                  <p class="text-32-6">+</p>
                  <p class="text-12-6">thêm ảnh</p>
                </figure>
              </label>
            </image-uploader>
          </client-only>
        </div>
      </div>
      <div class="align-center mt-40">
        <div class="co-pro-col-left">
          Họ và tên<span class="text-16-w1"> *</span>
        </div>
        <div class="co-pro-col-right">
          <input class="input-normal" placeholder="Ví dụ: Nguyễn Phan Anh" />
        </div>
      </div>
      <div class="align-center mt-24">
        <div class="co-pro-col-left">
          Ngày sinh<span class="text-16-w1"> *</span>
        </div>
        <div class="co-pro-col-right">
          <input class="input-normal" placeholder="dd/mm/yyy" type="email" />
        </div>
      </div>
      <div class="align-center mt-24">
        <div class="co-pro-col-left">
          Điện thoại<span class="text-16-w1"> *</span>
        </div>
        <div class="co-pro-col-right">
          <input
            class="input-normal"
            placeholder="Ví dụ: 0333 456 789"
            type="tel"
            pattern="[0-9]*"
            inputmode="tel"
          />
        </div>
      </div>
      <div class="align-center mt-24">
        <div class="co-pro-col-left">
          CMND/CCCD<span class="text-16-w1"> *</span>
        </div>
        <div class="co-pro-col-right">
          <input
            class="input-normal"
            placeholder=""
            type="number"
            pattern="[0-9]*"
            inputmode="numeric"
          />
        </div>
      </div>
      <div class="align-center mt-24">
        <div class="co-pro-col-left">
          Khu vực<span class="text-16-w1"> *</span>
        </div>
        <div class="co-pro-col-right">
          <client-only>
            <VSelect
              v-model="provicenSelected"
              :options="province"
              label="name"
              placeholder="Chọn tỉnh thành"
            >
              <!-- eslint-disable-next-line vue/no-unused-vars  -->
              <template #no-options="{ search, searching, loading }">
                Có vẻ như không có tỉnh thành nào đúng với ký tự tìm của bạn
              </template>
            </VSelect>
          </client-only>
        </div>
      </div>
      <div class="align-center mt-24">
        <div class="co-pro-col-left">
          Giới thiệu bản thân<span class="text-16-w1"> *</span>
        </div>
        <div class="co-pro-col-right">
          <textarea
            v-model="valueDes"
            class="textarea-normal"
            placeholder="Chia sẻ một chút về bản thân và kinh nghiệm làm việc, những dự án thú vị mà bạn đã hoàn thành trong lĩnh vực chuyên môn của bạn "
            maxlength="600"
          />
          <div class="align-between mt-8">
            <p class="text-16-5">Tối thiểu 150 ký tự</p>
            <p class="text-16-5">{{ valueDes.length }} / 600</p>
          </div>
        </div>
      </div>
      <button class="btn-primary co-pro-continue">Tiếp tục</button>
    </form>
  </div>
</template>
<script>
import { province } from '~/utils/provinces.js';
export default {
  layout: 'collaborators',
  data() {
    return {
      valueDes: '',
      provicenSelected: '',
      hasImg: false,
      province,
    };
  },
  methods: {
    setImage(output) {
      this.image = output;
      this.hasImg = true;
    },
  },
};
</script>
