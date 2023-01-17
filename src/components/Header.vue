<template>
  <header>
    <div></div>

    <router-link to="/" class="logo__link">
      <img src="@/assets/img/logo.png" />
    </router-link>

    <nav>
      <router-link v-for="l in links" :to="l.path" v-text="l.title" />
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",

  data: () => ({
    title: "Т22СХ2-08",
    links: [
      {
        title: "Основная",
        path: "/",
      },
      {
        title: "Категории",
        path: { path: "/", hash: "#category" },
      },
    ],
  }),
});
</script>

<style lang="scss">
header {
  $header-padding-top: 20px;
  $header-padding-left: 16px;
  $header-padding-right: 16px;
  $header-padding-bottom: 28px;

  width: calc(100% - ($header-padding-left + $header-padding-right));
  display: flex;
  padding: $header-padding-top $header-padding-right $header-padding-bottom
    $header-padding-left !important;
  align-items: flex-end;
  flex-direction: row;
  background-color: #fffeea;
  transition: transform 0.5s ease-in-out, backdrop-filter 0.3s ease-in-out,
    background-color 0.3s ease-in-out;

  @media (max-width: 768px) {
    gap: 16px;
    align-items: center;
    flex-direction: column;

    > * {
      width: fit-content !important;
    }

    img {
      height: 120px !important;
    }
  }

  > * {
    width: calc(100% / 3);
  }

  > .title {
    color: rgba(6, 9, 17, 0.7);
    font-size: 28px;
    font-weight: 400;
    line-height: 36px;
    font-family: "NOTO SANS", Helvetica, Arial, sans-serif;
  }

  img {
    height: 95px;
    margin: 0 auto;
    pointer-events: none;
  }

  > nav {
    gap: 16px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    > a {
      color: rgba(6, 9, 17, 0.7);
      z-index: 1;
      position: relative;
      font-size: 15px;
      transition: color 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
      font-weight: 900;
      padding-bottom: 6px;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      text-decoration: none;

      &::after {
        left: 0;
        width: 100%;
        bottom: 0;
        height: 2px;
        content: "";
        z-index: -1;
        position: absolute;
        transform: scaleX(0);
        background: rgba(6, 9, 17, 0.7);
        transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        transform-origin: right center;
      }

      &:hover::after,
      &.active::after {
        transform: scaleX(1);
        transform-origin: left center;
      }
    }
  }
}

.title__link {
  text-decoration: none;
}
.logo__link {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
