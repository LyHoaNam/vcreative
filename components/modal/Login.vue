<template>
  <client-only>
    <modal name="Login" classes="modal-login" width="400px" height="auto">
      <p class="text-24-8-m text-center mb-32">Đăng nhập</p>
      <button class="btn-fb mb-8">Tiếp tục bằng Facbook</button>
      <button class="btn-google">Tiếp tục bằng Google</button>
      <div class="ct-break-con pt-40 pb-42">
        <p class="ct-break">HOẶC</p>
      </div>
      <form class="form-login">
        <input
          class="input-normal mb-8"
          type="email"
          size="30"
          placeholder="Email / Tên đăng nhập"
        />
        <div class="rel mb-16">
          <input
            :type="isShowPass ? 'text' : 'password'"
            size="30"
            class="input-pass"
            placeholder="Mật khẩu"
            autocomplete="current-password"
          />
          <label
            :class="`input-pass-ic ic-eye${isShowPass ? '' : '-off'}`"
            @click="isShowPass = !isShowPass"
          />
        </div>
        <button class="btn-primary mb-12" disabled>Đăng nhập</button>
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
        Chưa có tài khoản?<span class="text-14-c2 pointer"> Đăng ký ngay</span>
      </p>
    </modal>
  </client-only>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      isShowPass: false,
    };
  },
  methods: {
    show() {
      this.$modal.show('my-first-modal');
    },
    hide() {
      this.$modal.hide('my-first-modal');
    },
  },
  mount() {
    this.show();
  },
};
</script>
