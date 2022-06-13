<template>
  <div class="hero flex items-center justify-center w-full h-screen">
    <HeroAvatar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroAvatar from "../../components/HeroAvatar.vue";


export default defineComponent({
  name: "Hero",
  components: { HeroAvatar },
  setup() {
    return {
    }
  }
})
</script>