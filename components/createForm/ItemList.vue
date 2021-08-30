<template>
  <div>
    <div
      v-for="(record, idx) in lsBase"
      :key="`${idx}-radio-create-form`"
      class="align-center mb-16"
    >
      <div
        v-if="typeItem === KEY_BRIEF.radio"
        class="bl-create-ic-check round"
      />
      <div v-if="typeItem === KEY_BRIEF.checked" class="bl-create-ic-check" />
      <p v-if="typeItem === KEY_BRIEF.dropdown" class="text-16-8">
        {{ idx + 1 + '. ' }}
      </p>
      <input
        :value="lsBase[idx]"
        class="input-normal bl-create-ip"
        placeholder="Nhập tùy chọn"
        type="text"
        @input="handleInput($event, idx)"
      />
      <div
        v-if="lsBase.length > 1"
        class="ic-plus-x pointer"
        @click="handleRemoveRecord(idx)"
      />
    </div>
    <div class="btn-see-more" @click="handleAddRecord">Thêm tùy chọn</div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { KEY_BRIEF } from '~/utils/constant.js';
import {
  NAME_STORE as nameBrief,
  SET_LS_IN_BASE,
  GET_LS_IN_BASE,
} from '~/store/create_service_brief.js';
export default {
  props: {
    typeItem: {
      type: String,
      require: true,
      default: KEY_BRIEF.radio,
    },
  },
  data() {
    return {
      KEY_BRIEF,
    };
  },
  computed: {
    ...mapGetters({
      lsBase: `${nameBrief}/${GET_LS_IN_BASE}`,
    }),
  },
  methods: {
    handleAddRecord() {
      const newlist = [...this.lsBase, ''];
      this.$store.commit(`${nameBrief}/${SET_LS_IN_BASE}`, newlist);
    },
    handleRemoveRecord(idxRemove) {
      if (this.lsBase.length > 1) {
        const newlist = this.lsBase.filter((_, idx) => idx !== idxRemove);
        this.$store.commit(`${nameBrief}/${SET_LS_IN_BASE}`, newlist);
      }
    },
    handleInput(e, index) {
      const newlist = this.lsBase;
      newlist[index] = e.target.value;
      this.$store.commit(`${nameBrief}/${SET_LS_IN_BASE}`, newlist);
    },
  },
};
</script>
