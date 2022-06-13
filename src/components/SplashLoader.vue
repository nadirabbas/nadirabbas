<template>
  <div class="flex items-center justify-center fixed left-0 z-20 top-0 w-screen h-screen bg-accent loader">
    <img src="/name.png" class="w-40 z-20" />

    <div class="h-[2px] w-full absolute left-0 top-1/2 transform -translate-y-1/2 bg-white mt-2" id="p-bar"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import gsap from 'gsap'
import { useEmitter } from '../composables/useEmitter'

export default defineComponent({
  name: 'SplashLoader',
  setup() {

    const emitter = useEmitter()

    const pTimeline = gsap.timeline({
      onComplete() {
        emitter.emit('loading-complete')
      },
      onStart() {
        emitter.emit('loading-start')
      }
    })

    onMounted(() => {
      const pBar = document.getElementById('p-bar')
      if (!pBar) return

      pBar.style.width = '0%'

      pTimeline.from(pBar, {
        width: 0
      }).to(pBar, {
        width: "90%",
        duration: .3,
      })
        .to(pBar, {
          width: "100%",
          duration: 1,

        })
        .to(".loader", {
          display: "none",
          duration: .1,
          opacity: 0
        })

    })

    return {}
  }
})
</script>