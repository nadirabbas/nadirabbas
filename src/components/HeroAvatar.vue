<template>
  <div class="flex items-center flex-col justify-center">
    <MorphingAvatar src="/me.jpg" id="avatar" />

    <!-- Title -->
    <h1 class="text-2xl font-fond text-white mt-7">Full-Stack JavaScript Developer</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, nextTick } from "vue";
import MorphingAvatar from "@/components/ui/MorphingAvatar.vue";
import gsap from 'gsap'

export default defineComponent({
  name: 'HeroAvatar',
  setup() {

    // Animate avatar entry
    onMounted(() => {
      const avatar = document.getElementById('avatar')
      if (!avatar) return;
      gsap.fromTo(avatar, {
        y: -10,
        opacity: 0
      }, {
        duration: .5,
        opacity: 1,
        y: 0,
      })
    })


    return {
    }
  },
  components: {
    MorphingAvatar,
  }

})
</script>