<template>
  <div class="flex items-center justify-center relative p-6 blob bg-accent-fg">
    <span class="rounded-full block" :style="{
      width, height, background: 'url(' + src + ') no-repeat center / cover'
    }"></span>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'MorphingAvatar',
  props: {
    src: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '160px'
    },
    height: {
      type: String,
      default: '160px'
    }
  },
})
</script>

<style lang="scss">
.blob {
  border-radius: 55% 45% 40% 50% / 40% 45% 55% 50%;
  animation: blob 5s linear infinite;

  span {
    box-shadow: 0 0 50px 0 #373737;
  }

  @keyframes blob {
    0% {
      border-radius: 55% 45% 40% 50% / 40% 45% 55% 50%;
    }

    25% {
      border-radius: 65% 40% 50% 50% / 40% 45% 55% 50%;
    }

    50% {
      border-radius: 60% 40% 43% 55% / 60% 45% 55% 50%;
    }
  }

}
</style>