<template>
  <client-only>
    <modal name="SignIn" classes="modal-login" width="400px" height="auto">
      <p class="text-24-8-m text-center mb-32">Đăng ký</p>
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
        <p v-if="!isFocusEmail && messEmail" class="pb-8 text-14-w1 mt-ne-4">
          {{ messEmail }}
        </p>
        <div class="rel mb-8">
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
        <p v-if="!isFocusPas && messPass" class="pb-8 text-14-w1 mt-ne-4">
          {{ messPass }}
        </p>
        <div class="rel mb-16">
          <input
            v-model="valueConfirm"
            :type="isShowConfirm ? 'text' : 'password'"
            size="30"
            class="input-pass"
            placeholder="Xác nhận mật khẩu"
            autocomplete="current-password"
            @focus="isFocusCofirm = true"
            @blur="isFocusCofirm = false"
          />
          <label
            :class="`input-pass-ic ic-eye${isShowConfirm ? '' : '-off'}`"
            @click="isShowConfirm = !isShowConfirm"
          />
        </div>
        <p
          v-if="!isFocusCofirm && messConfirm"
          class="pb-16 text-14-w1 mt-ne-14"
        >
          {{ messConfirm }}
        </p>
        <button
          class="btn-primary mb-12"
          :disabled="!isMailCorrect || !isPassCorrect || !isConfirmCorrect"
        >
          Đăng ký
        </button>
        <p class="text-12-6 text-center">
          Khi Đăng ký bạn đã đồng ý
          <span class="text-12-c2 pointer">Điều khoản Dịch vụ</span> của
          VCreative và nhận email từ chúng tôi
        </p>
      </form>
      <p class="text-14-8 text-center">
        Bạn đã có tài khoản?
        <span class="text-14-c2 pointer" @click="handleClickLogin"
          >Đăng nhập ngay</span
        >
      </p>
    </modal>
  </client-only>
</template>
<script>
import { validateEmail } from '~/utils/common.js';
export default {
  name: 'SignIn',
  data() {
    return {
      isShowPass: false,
      isShowConfirm: false,
      valueEmail: '',
      valuePass: '',
      valueConfirm: '',
      messEmail: '',
      messPass: '',
      messConfirm: '',
      isMailCorrect: false,
      isPassCorrect: false,
      isConfirmCorrect: false,
      isFocusEmail: true,
      isFocusPas: true,
      isFocusCofirm: true,
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
    valueConfirm: {
      handler(value) {
        if (value !== this.valuePass) {
          this.messConfirm = 'Mật khẩu xác nhận chưa khớp';
          this.isConfirmCorrect = false;
        } else {
          this.messConfirm = '';
          this.isConfirmCorrect = true;
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
      this.$modal.hide('SignIn');
    },
    handleClickLogin() {
      this.$modal.hide('SignIn');
      this.$modal.show('Login');
    },
  },
};
</script>
