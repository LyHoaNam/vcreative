<template>
  <div class="bl-create mb-16">
    <div class="align-between mb-8">
      <p class="text-16-8">
        {{ getShow.ques }}
        <span v-show="getShow.mandatory" class="text-16-w1">*</span>
      </p>
      <button class="btn-see-more" @click="handleRemove">Xóa</button>
    </div>
    <component
      :is="planActive[getShow.type]"
      v-bind="{ ls: getShow.ls, id: getShow.id }"
    />
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import longInput from './type/longInput';
import shortInput from './type/shortInput';
import checked from './type/checked';
import dropdown from './type/dropdown';
import radio from './type/radio';
import {
  NAME_STORE,
  GET_ITEM_LIST_CPN,
  REMOVE_RECORD_FROM_LS_CMP,
} from '~/store/create_service_brief.js';
import { KEY_BRIEF } from '~/utils/constant.js';
const PLAN_ACTIVE = {
  [KEY_BRIEF.shortInput]: shortInput,
  [KEY_BRIEF.longInput]: longInput,
  [KEY_BRIEF.radio]: radio,
  [KEY_BRIEF.checked]: checked,
  [KEY_BRIEF.dropdown]: dropdown,
};
export default {
  props: {
    indexComp: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  data() {
    return {
      planActive: PLAN_ACTIVE,
    };
  },
  computed: {
    getShow() {
      return this.$store.getters[`${NAME_STORE}/${GET_ITEM_LIST_CPN}`](
        this.indexComp
      );
    },
  },
  methods: {
    ...mapActions({
      removeRecord: `${NAME_STORE}/${REMOVE_RECORD_FROM_LS_CMP}`,
    }),
    handleRemove() {
      this.removeRecord(this.getShow.id);
    },
  },
};
</script>
