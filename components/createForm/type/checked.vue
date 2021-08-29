<template>
  <div class="mt-6">
    <div
      v-for="(record, idx) in ls"
      :key="`${idx}-record-radio`"
      class="box-type-record"
    >
      <label class="ip-box-con">
        {{ record }}
        <input type="checkbox" :name="id" :class="`ip-checked-${id}}`" />
        <span class="ip-box-checkmark" />
      </label>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ls: {
      type: Array,
      require: true,
      default: () => {
        return [];
      },
    },
    id: {
      type: String,
      require: true,
      default: '',
    },
  },
};
</script>
