<template>
  <div class="mt-6 box-type-radio">
    <div
      v-for="(record, idx) in ls"
      :key="`${idx}-record-radio`"
      class="box-type-record"
    >
      <EleChecked :text="record" :name="id" :value="`${id}-${idx}`" />
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
