<template>
  <div class="flex items-start justify-between p-5 z-3 w-full">
    <SocialIcons />
    <Button href="https://www.upwork.com/freelancers/~0160a837184d1e92ab" target="_blank" flicker>HIRE ME</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./ui/Button.vue";
import SocialIcons from "./SocialIcons.vue";

export default defineComponent({
  name: "Header",
  setup() {
    return {};
  },
  components: { Button, SocialIcons }
})
</script>