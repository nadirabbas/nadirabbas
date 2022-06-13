<template>
  <div>
    <a ref="button" v-on="$attrs" v-bind="$attrs" :href="href" @mouseenter="pauseFlicker" @mouseleave="resumeFlicker"
      :class="classes">
      <slot />
    </a>
  </div>
</template>


<script lang="ts">
import { computed, defineComponent, onMounted, PropType, ref, toRefs } from "vue";
import gsap from 'gsap'
export default defineComponent({
  name: 'Button',
  props: {
    variant: {
      type: String as PropType<'light'>,
      default: 'light'
    },
    tile: {
      type: Boolean,
      default: false
    },
    flat: {
      type: Boolean,
      default: false
    },
    flicker: {
      type: Boolean,
      default: false
    },
    href: String
  },
  setup(props) {
    const { variant, tile, flat, flicker } = toRefs(props)
    const button = ref<null | HTMLButtonElement>(null)

    const flickerTimeline = gsap.timeline({
      repeatRefresh: true,
      repeat: -1,
    });

    onMounted(() => {
      if (!flicker.value) return
      if (!button.value) return

      // Flicker effect
      flickerTimeline.fromTo(button.value, {
        opacity: .96
      }, {
        duration: .2,
        opacity: 1,
      })
    })

    return {
      button,
      pauseFlicker() {
        flickerTimeline.pause()
      },
      resumeFlicker() {
        flickerTimeline.resume()
      },
      variant, classes: computed(() => ({
        'font-nun py-[10px] px-[30px] cursor-pointer select-none text-sm block': true,
        'rounded-[5px]': !tile.value,
        'bg-white text-accent': variant.value === 'light',
        'shadow-primary-light hover:shadow-primary-light-big': variant.value === 'light' && !flat.value,
      }))
    }
  }
})
</script>

<style lang="scss">
.button {
  transition: box-shadow 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>