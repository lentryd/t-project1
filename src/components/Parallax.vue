<template>
  <div ref="el" class="parallax-wrapper" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Parallax",

  props: {
    path: { type: String, required: true },
    position: { type: String, default: "top center" },
  },

  computed: {
    style() {
      return {
        backgroundImage: `url(${this.path})`,
        backgroundPosition: this.position,
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.parallax-wrapper {
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-position: top center;
  background-attachment: fixed;
}
</style>
