<template>
  <div>
    <ul class="flex-center">
      <li class="mn-li flex-center">
        <nuxt-link class="mn-link" to="#">Trở thành cộng tác viên</nuxt-link>
      </li>
      <li class="mn-li flex-center">
        <button class="btn-line" @click="handleLogin">Đăng nhập</button>
      </li>
    </ul>
    <modalLogin />
  </div>
</template>
<script>
export default {
  methods: {
    handleLogin() {
      this.$modal.show('Login');
    },
  },
};
</script>
