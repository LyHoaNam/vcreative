<template>
  <footer class="ft-container">
    <div class="container flex-between">
      <div class="ft-left">
        <eleIcon
          :img-url="require('~/assets/images/Logo.png')"
          img-class="ic-logo"
        />
        <div class="pt-39 pb-16">
          <p class="ft-txt-desciption">Điện thoại: 0393024336</p>
          <p class="ft-txt-desciption pb-16">Email: support@vcreative.vn</p>
          <eleIcon
            :img-url="require('~/assets/images/dadangky.png')"
            img-class="ft-img-lin"
          />
        </div>
      </div>
      <div class="ft-right row">
        <div
          v-for="(col, idx) in footer"
          :key="`${idx}-ft`"
          class="col col-lg-3"
        >
          <div
            v-for="(item, itemIdx) in col"
            :key="`${itemIdx}-item-ft`"
            class="ft-record"
          >
            <nuxt-link :to="item.link" :class="`ft-txt ${item.class}`">
              {{ item.txt }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <div class="container ft-bot">
      <p class="ft-txt-license">© 2021 VCreative., Ltd. All Rights Reserved.</p>
      <div class="flex">
        <eleIcon
          :img-url="require('~/assets/images/icon/icon-fb.png')"
          img-class="ft-icon"
        />
        <eleIcon
          :img-url="require('~/assets/images/icon/icon-insta.png')"
          img-class="ft-icon pl-30 pr-30"
        />
        <eleIcon
          :img-url="require('~/assets/images/icon/icon-lin.png')"
          img-class="ft-icon"
        />
      </div>
    </div>
  </footer>
</template>
<script>
import { footer } from '../utils/footer'
export default {
  data() {
    return {
      footer,
    }
  },
}
</script>