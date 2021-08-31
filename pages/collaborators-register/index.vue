<template>
  <div class="container-xsm pt-40 pb-106">
    <h1 class="text-32-8">Để tạo hồ sơ thành công</h1>
    <p class="text-16-6">
      Lưu ý tạo ấn tượng cho hồ sơ của bạn và những điều cần tránh
    </p>
    <div class="row co-intro">
      <div class="col col-lg-6 co-intro-col-left">
        <div class="align-center ml-50">
          <div class="ic-co-intro-should-be" />
          <h2 class="text-32-8-b ml-20">Tạo ấn tượng</h2>
        </div>
        <div class="row mt-56">
          <div
            v-for="(item, idx) in lsShouldBe"
            :key="`${idx}-should-be`"
            class="col col-lg-6 co-intro-col-item"
          >
            <eleIcon :img-url="item.img" img-class="co-intro-ic" />
            <p class="text-16-8 co-intro-des mt-8">{{ item.txt }}</p>
          </div>
        </div>
      </div>
      <div class="col col-lg-6 co-intro-col-right">
        <div class="align-center co-intro-title-not">
          <div class="ic-co-intro-did-not" />
          <h2 class="text-32-8-b ml-20">Cần tránh</h2>
        </div>
        <div class="row mt-56">
          <div
            v-for="(item, idx) in lsDidnt"
            :key="`${idx}-did-not`"
            class="col col-lg-6 co-intro-col-item co-intro-item-r"
          >
            <div class="co-intro-des">
              <eleIcon :img-url="item.img" img-class="co-intro-ic" />
              <p class="text-16-8 mt-8">{{ item.txt }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link
      :to="siteMap.collaboratorsRegisterProfile"
      class="btn-primary co-intro-btn-continue"
    >
      Tiếp tục
    </nuxt-link>
  </div>
</template>
<script>
import { funcSiteMap } from '~/utils/sitemap.js';
const siteMap = funcSiteMap();
export default {
  layout: 'collaborators',
  data() {
    return {
      siteMap,
      lsShouldBe: [
        {
          txt: 'Dành thời gian của bạn trong việc tao hồ sơ của bạn để nó chính xác',
          img: require('~/assets/images/icon/s-step1.png'),
        },
        {
          txt: 'Mô tả chính xác các kỹ năng chuyên môn của bạn để giúp bạn nhận được nhiều việc hơn',
          img: require('~/assets/images/icon/s-step2.png'),
        },
        {
          txt: 'Tải lên ảnh hồ sơ cho thấy rõ khuôn mặt của bạn',
          img: require('~/assets/images/icon/s-step3.png'),
        },
        {
          txt: 'Thêm uy tín bằng cách liên kết các mạng chuyên nghiệp có liên quan của bạn',
          img: require('~/assets/images/icon/s-step1.png'),
        },
      ],
      lsDidnt: [
        {
          txt: 'Cung cấp bất kỳ thông tin sai lệch hoặc không chính xác về danh tính của bạn',
          img: require('~/assets/images/icon/u-step1.png'),
        },
        {
          txt: 'Hãy đảm bảo chắc chắn rằng những dự án bạn cung cấp là của chính bạn, không copy, sao chép ',
          img: require('~/assets/images/icon/u-step2.png'),
        },
        {
          txt: 'Không thực hiện liên lạc và thanh toán bên ngoài VCreative',
          img: require('~/assets/images/icon/u-step3.png'),
        },
        {
          txt: 'Không mở tài khoản trùng lặp. Bạn hoàn toàn có thể thêm nhiều dịch vụ để cung cấp. ',
          img: require('~/assets/images/icon/u-step1.png'),
        },
      ],
    };
  },
};
</script>
