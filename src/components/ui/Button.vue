<template>
  <button class="button" v-on="$attrs" v-bind="$attrs" :class="classes">
    <slot />
  </button>
</template>


<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from "vue";

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
  },
  setup(props) {
    const { variant, tile, flat } = toRefs(props)

    return {
      variant, classes: computed(() => ({
        'font-nun py-[10px] px-[30px] cursor-pointer select-none text-sm': true,
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