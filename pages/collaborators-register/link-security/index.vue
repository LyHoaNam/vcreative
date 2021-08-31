<template>
  <div class="container-xsm pt-40 pb-106">
    <h1 class="text-32-8 mb-12">Liên kết và bảo mật</h1>
    <h3 class="text-16-6 font-regular co-pro-des">
      Chúng tôi khuyến khích bạn thêm các liên kết mạng xã hội để đảm bảo bảo
      mật và tránh trường hợp giả mạo tài khoản
    </h3>
    <div class="co-pro-hr mt-26 mb-24">
      <span class="text-16-w1">* </span
      ><span class="text-16-6 font-itaclic">Trường bắt buộc</span>
    </div>
    <form class="co-pro-content pb-106" @submit.prevent="handleSubmit">
      <div class="flex mb-64">
        <div class="co-pro-col-left">
          <p class="text-16-8">
            Ảnh đại diện<span class="text-16-w1"> *</span>
          </p>
        </div>
        <div class="co-pro-col-right">
          <div
            v-for="(item, idx) in lsLink"
            :key="`${idx}-link`"
            class="align-between mb-24"
          >
            <div class="align-center">
              <eleIcon :img-url="item.icon" img-class="co-link-icon" />
              <p class="text-16-7 ml-14">{{ item.txt }}</p>
            </div>
            <input type="text" class="input-normal co-link-ip" />
          </div>
        </div>
      </div>
      <div class="flex mt16">
        <div class="co-pro-col-left">
          <p class="text-16-8">
            Câu hỏi bảo mật<span class="text-16-w1"> *</span>
          </p>
        </div>
        <div class="co-pro-col-right">
          <p class="text-16-8 mb-8">Công việc mơ ước của bạn là gì?</p>
          <input type="text" class="input-normal" placeholder="Trả lời" />
          <p class="text-16-8 mb-8 mt-24">
            Tên ở nhà hoặc tên tiếng Anh của bạn là gì?
          </p>
          <input type="text" class="input-normal" placeholder="Trả lời" />
        </div>
      </div>
      <nuxt-link
        :to="siteMap.collaboratorsRegisterComplete"
        class="btn-primary co-pro-continue"
        >Tiếp tục</nuxt-link
      >
    </form>
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
      lsLink: [
        {
          icon: require('~/assets/images/icon/ic_web.png'),
          placeholder: 'Link website cá nhân',
          txt: 'Website cá nhân',
        },
        {
          icon: require('~/assets/images/icon/ic_fb.png'),
          placeholder: 'Facebook link',
          txt: 'Link Facebook cá nhân',
        },
        {
          icon: require('~/assets/images/icon/ic_be.png'),
          placeholder: 'Behance link',
          txt: 'Link behance cá nhân',
        },
        {
          icon: require('~/assets/images/icon/ic_drip.png'),
          placeholder: 'Dribbble link',
          txt: 'Link Dribble cá nhân',
        },
      ],
    };
  },
};
</script>
