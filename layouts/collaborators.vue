<template>
  <div>
    <header class="mn-container">
      <div class="container align-center">
        <nuxt-link to="/">
          <eleIcon
            :img-url="require('~/assets/images/Logo.png')"
            img-class="ic-logo"
          />
        </nuxt-link>
        <ul class="ml-44 mn-step flex">
          <li
            v-for="(step, idx) in lsStep"
            :key="`${idx}-step-collaborators`"
            class="mn-step-item align-center"
          >
            <div class="mn-step-icon">{{ step.key }}</div>
            <p class="ml-12 text-16-5">{{ step.txt }}</p>
          </li>
        </ul>
      </div>
    </header>
    <div class="mn-mock" />
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return {
      lsStep: [
        {
          key: '1',
          txt: 'Thông tin cá nhân',
        },
        {
          key: '2',
          txt: 'Kỹ năng và kinh nghiệm',
        },
        {
          key: '3',
          txt: 'Liên kết và bảo mật tài khoản',
        },
      ],
    };
  },
};
</script>
