<template>
  <label class="ip-check-con"
    >{{ text }}
    <input
      type="radio"
      checked="checked"
      :name="name"
      :class="name"
      :value="value"
    />
    <span class="ip-check-checkmark" />
  </label>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      require: false,
      default: '',
    },
    value: {
      type: String,
      require: true,
      default: '',
    },
    name: {
      type: String,
      require: true,
      default: '',
    },
  },
};
</script>
