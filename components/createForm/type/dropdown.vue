<template>
  <div class="bl-create-type mt-6">
    <client-only>
      <VSelect :options="ls" placeholder="Chọn">
        <!-- eslint-disable-next-line vue/no-unused-vars  -->
        <template #no-options="{ search, searching, loading }">
          Có vẻ như không có lựa chọn nào đúng với ký tự tìm của bạn
        </template>
      </VSelect>
    </client-only>
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
  },
};
</script>
