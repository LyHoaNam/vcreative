<template>
  <div>
    <p class="text-32-8-m mb-24">Các Tags liên quan</p>
    <div class="label-rel-con row">
      <div
        v-for="(label, idx) in lsLabel"
        :key="`${idx}-label-rel`"
        class="label-rel-item"
      >
        <label class="label-rel">
          {{ label }}
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lsLabel: ['Thiết kế Logo', 'Nhận diện thương hiệu'],
    };
  },
};
</script>
