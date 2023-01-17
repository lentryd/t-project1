<template>
  <Header />

  <router-view v-slot="{ Component, route }">
    <Transition mode="out-in" name="show-route">
      <main :key="route.name ?? ''">
        <Component :is="Component" />
      </main>
    </Transition>
  </router-view>

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,0,0");

html {
  margin: 0;
  font-size: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  width: 100%;
  color: #060911b3;
  margin: 0;
  height: auto;
  font-size: 1rem;
  font-style: normal;
  line-height: 2;
  font-weight: 300;
  font-family: "NOTO SANS", Roboto, sans-serif;
  background-color: #fffeea;
}

*,
:after,
:before {
  box-sizing: inherit;
}

.show-route-enter-active,
.show-route-leave-active {
  transition: opacity 0.35s ease-in-out, transform 0.35s ease-in-out;
}
.show-route-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
.show-route-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
</style>
