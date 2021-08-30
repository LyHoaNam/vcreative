<template>
  <div>
    <header class="mn-container">
      <div class="container-sm align-center">
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
            :class="`mn-step-item align-center ${classStep(step.key, idx)}`"
            @click.stop=""
          >
            <div class="mn-step-icon">
              <span class="mn-step-count">{{ idx + 1 }}</span>
            </div>
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
          key: 'collaborators-register-profile',
          txt: 'Thông tin cá nhân',
        },
        {
          key: 'collaborators-register-skill-experience',
          txt: 'Kỹ năng và kinh nghiệm',
        },
        {
          key: 'collaborators-register-link-security',
          txt: 'Liên kết và bảo mật tài khoản',
        },
      ],
    };
  },
  methods: {
    classStep(key, index) {
      const namePage = this.$route.name;
      if (key === namePage) {
        return 'stepActive';
      }
      const indexActive = this.lsStep
        .map((step) => {
          return step.key;
        })
        .indexOf(namePage);
      if (index < indexActive) {
        return 'stepComplete';
      }
      return '';
    },
  },
};
</script>
