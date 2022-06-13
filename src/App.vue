<template>
  <Home />
  <SplashLoader />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from '@/views/Home.vue'
import SplashLoader from '@/components/SplashLoader.vue'

export default defineComponent({
  name: 'App',
  components: {
    Home,
    SplashLoader
  }
})
</script>