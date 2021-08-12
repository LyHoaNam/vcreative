<template>
  <div>
    <p class="text-32-8-m mb-24">Đánh giá dịch vụ</p>
    <eleRate
      :rate-start="4.6"
      :count-rate="123"
      class="p-s-d-feedback-rate mb-24"
    />
    <div class="label-fb-con">
      <div
        v-for="(lb, idx) in lsLabel"
        :key="`${idx}-label-fb`"
        class="label-fb-item"
      >
        <label
          :class="`label-fb${fbActive === lb.key ? '-active' : ''}`"
          @click="handleClickFb(lb.key)"
          >{{ lb.txt }}</label
        >
      </div>
    </div>
    <div class="p-s-d-feedback-hr" />
    <div>
      <eleComment :ls-img="lsImgCmt">
        <template slot="rate">
          <EleRate :rate-start="3.6" class="p-s-d-feedback-cm-rate" />
        </template>
        <template slot="child">
          <eleComment :is-child="true" />
        </template>
      </eleComment>
      <eleComment :ls-img="lsImgCmt">
        <template slot="rate">
          <EleRate :rate-start="3.6" class="p-s-d-feedback-cm-rate" />
        </template>
        <template slot="child">
          <eleComment :is-child="true" />
        </template>
      </eleComment>
    </div>
    <div v-if="isSeeMore" class="mt-32">
      <eleComment :ls-img="lsImgCmt">
        <template slot="rate">
          <EleRate :rate-start="3.6" class="p-s-d-feedback-cm-rate" />
        </template>
        <template slot="child">
          <eleComment :is-child="true" />
        </template>
      </eleComment>
      <eleComment :ls-img="lsImgCmt">
        <template slot="rate">
          <EleRate :rate-start="3.6" class="p-s-d-feedback-cm-rate" />
        </template>
        <template slot="child">
          <eleComment :is-child="true" />
        </template>
      </eleComment>
    </div>
    <button class="btn-see-more p-s-d-feedback-see-more" @click="hanldeSeeMore">
      Xem thêm
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fbActive: 'all',
      isSeeMore: false,
      lsImgCmt: [
        'https://images.pexels.com/photos/1145720/pexels-photo-1145720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        'https://images.pexels.com/photos/3063362/pexels-photo-3063362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      ],
      lsLabel: [
        {
          txt: 'Tất cả',
          key: 'all',
        },
        {
          txt: '5 Sao (100)',
          key: '5sao',
        },
        {
          txt: '4 Sao (23)',
          key: '4sao',
        },
        {
          txt: '3 Sao (0)',
          key: '3sao',
        },
        {
          txt: '2 Sao (0)',
          key: '2sao',
        },
        {
          txt: '1 Sao (0)',
          key: '1sao',
        },
        {
          txt: 'Đánh giá có hình ảnh',
          key: 'image',
        },
      ],
    };
  },
  methods: {
    handleClickFb(key) {
      this.fbActive = key;
    },
    hanldeSeeMore() {
      this.isSeeMore = true;
    },
  },
};
</script>
