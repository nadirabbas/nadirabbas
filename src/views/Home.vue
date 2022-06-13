<template>
  <div class="home w-screen min-h-screen bg-accent select-none relative font-nun">
    <Header class="fixed top-0 left-0" />
    <Hero />
    <Projects />
    <Skills />
    <Testimonials />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Header from '@/components/Header.vue'
import Hero from './partials/Hero.vue'
import Projects from './partials/Projects.vue'
import Skills from './partials/Skills.vue'
import Testimonials from './partials/Testimonials.vue'

export default defineComponent({
  name: 'Home',
  setup() {
    return {}
  },
  components: {
    Hero,
    Projects,
    Skills,
    Testimonials,
    Header
  }
})
</script>