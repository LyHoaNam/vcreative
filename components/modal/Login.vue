<template>
  <client-only>
    <modal name="Login" classes="modal-login" width="400px" height="auto">
      <p class="text-24-8-m text-center mb-32">Đăng nhập</p>
      <button class="btn-fb mb-8" @click="handleFb">
        Tiếp tục bằng Facbook
      </button>
      <button class="btn-google" @click="handleGG">Tiếp tục bằng Google</button>
      <div class="ct-break-con pt-40 pb-42">
        <p class="ct-break">HOẶC</p>
      </div>
      <form class="form-login" @submit.prevent="handleSubmit">
        <input
          v-model="valueEmail"
          class="input-normal mb-8"
          type="email"
          size="30"
          placeholder="Email / Tên đăng nhập"
          @focus="isFocusEmail = true"
          @blur="isFocusEmail = false"
        />
        <p v-if="!isFocusEmail" class="pb-8 text-14-w1 mt-ne-4">
          {{ messEmail }}
        </p>
        <div class="rel mb-4">
          <input
            v-model="valuePass"
            :type="isShowPass ? 'text' : 'password'"
            size="30"
            class="input-pass"
            placeholder="Mật khẩu"
            autocomplete="current-password"
            @focus="isFocusPas = true"
            @blur="isFocusPas = false"
          />
          <label
            :class="`input-pass-ic ic-eye${isShowPass ? '' : '-off'}`"
            @click="isShowPass = !isShowPass"
          />
        </div>
        <p v-if="!isFocusPas" class="pb-16 text-14-w1">
          {{ messPass }}
        </p>
        <button
          class="btn-primary mb-12"
          :disabled="!isMailCorrect || !isPassCorrect"
        >
          Đăng nhập
        </button>
        <div class="align-between">
          <label class="ip-box-con">
            Ghi nhớ mật khẩu
            <input type="checkbox" name="save-login" class="ip-box-login" />
            <span class="ip-box-checkmark" />
          </label>
          <label class="pointer text-14-c2">Quên mật khẩu?</label>
        </div>
      </form>
      <p class="text-14-8 text-center">
        Chưa có tài khoản?<span
          class="text-14-c2 pointer"
          @click="handleClickSignin"
        >
          Đăng ký ngay</span
        >
      </p>
    </modal>
  </client-only>
</template>
<script>
import { validateEmail } from '~/utils/common.js';
export default {
  name: 'Login',
  middleware: 'auth',
  data() {
    return {
      isShowPass: false,
      valueEmail: '',
      valuePass: '',
      messEmail: '',
      messPass: '',
      isMailCorrect: false,
      isPassCorrect: false,
      isFocusEmail: true,
      isFocusPas: true,
    };
  },
  watch: {
    valueEmail: {
      handler(value) {
        if (!value) {
          this.messEmail = 'Bạn chưa nhập email';
          this.isMailCorrect = false;
        } else if (!validateEmail(value)) {
          this.messEmail = 'Email không đúng, vui lòng thử lại';
          this.isMailCorrect = false;
        } else {
          this.messEmail = '';
          this.isMailCorrect = true;
        }
      },
      deep: true,
    },
    valuePass: {
      handler(value) {
        if (!value) {
          this.messPass = 'Bạn chưa nhập mật khẩu';
          this.isPassCorrect = false;
        } else {
          this.messPass = '';
          this.isPassCorrect = true;
        }
      },
      deep: true,
    },
  },
  methods: {
    handleFb() {
      this.$auth.loginWith('facebook', { params: {} }).then((response) => {
        console.log(response);
      });
    },
    handleGG() {
      this.$auth.loginWith('google', { params: {} }).then((response) => {
        console.log(response);
      });
    },
    handleSubmit() {
      this.$modal.hide('Login');
      this.$router.push({ path: '/services' });
    },
    handleClickSignin() {
      this.$modal.show('SignIn');
    },
  },
};
</script>
