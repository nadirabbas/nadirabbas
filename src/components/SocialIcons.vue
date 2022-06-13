<template>
  <div class="flex flex-col social-icons">
    <a :href="item.link" class="block flex items-center group mb-4 transform transition-transform hover:translate-x-1.5"
      target="_blank" v-for="item in items" :key="item.link">
      <img :src="`/social-icons/${item.icon}`" class="w-[25px] social-icon" />

      <span class="opacity-0 group-hover:opacity-100 text-white transition-opacity ml-4">{{ item.name }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'SocialIcons',
  setup() {
    return {
      items: [
        {
          name: 'GitHub',
          link: 'https://github.com/nadirabbas',
          icon: 'github.svg'
        },
        {
          name: 'Stackoverflow',
          link: 'https://stackoverflow.com/users/9937150/nadir-abbas',
          icon: 'stackoverflow.svg'
        },
        {
          name: 'YouTube',
          link: 'https://www.youtube.com/channel/UC3bsw_BB-f9GChhB_bEFqzg',
          icon: 'youtube.svg'
        },
        {
          name: 'Mail',
          link: 'mailto:nadirabbasforwork@gmail.com',
          icon: 'mail.png',
        },

      ]
    }
  }
})
</script>

<style module>
</style>