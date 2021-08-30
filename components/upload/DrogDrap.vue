<template>
  <div class="upload">
    <dropzone id="foo" ref="el" :options="options" :destroy-dropzone="true"
      >Kéo thả<br />
      hoặc<br />
      chọn tệp {{ textContent }}</dropzone
    >
  </div>
</template>
<script>
import Dropzone from 'nuxt-dropzone';
import 'nuxt-dropzone/dropzone.css';
export default {
  components: {
    Dropzone,
  },
  props: {
    isVideo: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  data() {
    return {
      textContent: this.isVideo ? 'video' : 'hình ảnh',
      options: {
        url: 'http://httpbin.org/anything',
        acceptedFiles: this.isVideo
          ? 'video/mp4,video/x-m4v,video/*'
          : 'image/*',
      },
    };
  },
};
</script>
