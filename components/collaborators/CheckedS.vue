<template>
  <div>
    <div class="row co-ske-s-con">
      <div
        v-for="(item, idx) in skillAndService"
        :key="`${idx}-checked-s`"
        class="col col-lg-4 co-ske-s-item"
      >
        <label class="ip-box-con">
          {{ item.txt }}
          <input
            v-model="checkedSkill"
            type="checkbox"
            name="save-login"
            class="ip-box-collaborators"
            :value="item.key"
          />
          <span class="ip-box-checkmark" />
        </label>
      </div>
    </div>
    <div class="co-ske-s-ip-con flex mt-12">
      <input
        v-model="newSkill"
        type="text"
        placeholder="Nhập kỹ năng khác của bạn"
      />
      <button class="btn-primary" @click.prevent="handleNewSkill">Thêm</button>
    </div>
  </div>
</template>
<script>
import { skillAndService } from '~/utils/skill.js';
export default {
  data() {
    return {
      skillAndService,
      newSkill: '',
      checkedSkill: [],
    };
  },
  methods: {
    handleNewSkill() {
      const key = this.newSkill.replace(/\s/g, '');
      skillAndService.push({
        txt: this.newSkill,
        key,
      });
      this.newSkill = '';
    },
  },
};
</script>
