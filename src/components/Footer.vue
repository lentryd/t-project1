<template>
  <footer>
    <img class="logo" src="@/assets/img/logo.png" />

    <div class="location">
      <div class="location__title">
        <span class="material-symbols-rounded"> location_on </span>
        <span>РОСТОВ-НА-ДОНУ</span>
      </div>
      <span class="location__description">
        344002, Ростов-на-Дону, Соборный пер., д. 19
        <br />
        Тел: +7 (863) 309-07-10
        <br />
        info@ahstep.ru
      </span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<style lang="scss" scoped>
footer {
  gap: 36px;
  display: flex;
  padding: 16px;
  margin-top: 36px;
  border-top: 1.5px solid #e0e0e0;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  .logo {
    width: 100px;
    height: 100px;
  }

  .location {
    display: flex;
    flex-direction: column;

    .location__title {
      display: flex;
      align-items: center;
      font-size: 20px;
      font-weight: 500;
    }

    .location__description {
      font-size: 12px;
      padding-left: 4px;
    }
  }
}
</style>
