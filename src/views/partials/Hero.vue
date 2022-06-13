<template>
  <div class="hero flex items-center justify-center w-full h-screen">
    <MorphingAvatar src="/me.jpg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MorphingAvatar from "../../components/ui/MorphingAvatar.vue";

export default defineComponent({
  name: "Hero",
  components: { MorphingAvatar }
})
</script>