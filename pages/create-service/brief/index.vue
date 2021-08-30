<template>
  <div class="container-xsm pt-40 pb-106">
    <div class="cre-se-container">
      <h1 class="text-32-8 mb-12">Tóm tắt yêu cầu</h1>
      <h3 class="text-16-6 font-regular co-pro-des">
        Thêm câu hỏi để giúp người mua cung cấp cho bạn chính xác những gì bạn
        cần để bắt đầu thực hiện đơn đặt hàng của họ.
      </h3>
      <div class="co-pro-hr mt-26 mb-64 cre-se-container" />
      <div v-for="(comp, idx) in lsComp" :key="`${idx}-comp`">
        <createFormShow :index-comp="idx" />
      </div>
      <createFormBase />
      <div class="flex-between mt-56">
        <div />
        <div class="flex">
          <nuxt-link
            to="/create-service/descriptions"
            class="btn-line-5 mr-24 cre-se-cancel"
            >Quay lại</nuxt-link
          >
          <nuxt-link
            to="/create-service/pictures"
            class="btn-primary cre-se-submit"
            >Lưu &#38; Tiếp tục</nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import {
  NAME_STORE as nameBrief,
  GET_QUES_LIST_COMPONENT,
} from '~/store/create_service_brief.js';
export default {
  layout: 'service',
  computed: {
    ...mapGetters({
      lsComp: `${nameBrief}/${GET_QUES_LIST_COMPONENT}`,
    }),
  },
};
</script>
