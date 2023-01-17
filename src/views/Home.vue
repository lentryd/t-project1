<template>
  <Parallax
    :path="require('@/assets/img/parallax_pic2.jpg')"
    position="bottom center"
  >
    <div class="parallax__text">
      Агрохолдинг «ВЕЛЕС» расположен в благоприятном регионе с точки зрения
      климата и урожайности: в Приморском крае, Ханкайского района
      <br />
      <br />
      Климат: Резко континентальный, муссонный
      <br />
      Зима морозная, со средней температурой января -14 °C
      <br />
      Лето жаркое и влажное со средней температурой июля +22 °C
    </div>
  </Parallax>

  <h1 id="category">Категории</h1>

  <div class="category">
    <router-link
      v-for="c in category"
      :to="c.link"
      custom
      v-slot="{ navigate }"
    >
      <div class="item" @click="navigate">
        <div class="item__image">
          <img :src="c.image" />
        </div>
        <div class="item__title" v-text="c.title" />
      </div>
    </router-link>
  </div>

  <Parallax :path="require('@/assets/img/parallax_pic1.jpg')" position="center">
    <div class="parallax__text">
      ВЕЛЕС — Самый современный и продуманный Агрохолдинг
      <br />
      <br />
      Самая лучшая рыба!
      <br />
      Самое вкусное молоко!
      <br />
      Самые плодородные земли!
      <br />
      Самая крутая система переработки!
    </div>
  </Parallax>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  data: () => ({
    category: [
      {
        link: "/rybolovstvo",
        title: "Рыболовство",
        image: require("@/assets/img/fish.svg"),
      },
      {
        link: "/jivotnovodstvo",
        title: "Животноводство",
        image: require("@/assets/img/cow.svg"),
      },
      {
        link: "/rastenievodstvo",
        title: "Растениеводство",
        image: require("@/assets/img/plant.svg"),
      },
      {
        link: "/pererabotka",
        title: "Переработка",
        image: require("@/assets/img/milk.svg"),
      },
    ],
  }),
});
</script>

<style lang="scss" scoped>
#category {
  width: fit-content;
  margin: 0 auto;
  padding: 0;
  font-size: 32px;
  margin-top: 36px;
  font-weight: 500;
}
.category {
  gap: 24px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 36px;
  flex-direction: row;
  justify-content: center;
  .item {
    gap: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    flex-direction: column;
    &:hover {
      .item__image img {
        opacity: 1;
      }
      .item__title {
        color: #060911;
      }
    }
    .item__image {
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
        opacity: 0.7;
        object-fit: contain;
        transition: opacity 0.35s ease-in-out;
      }
    }
    .item__title {
      font-size: 20px;
      transition: color 0.35s ease-in-out;
      font-weight: 400;
    }
  }
}
.parallax__text {
  color: #fff;
  padding: 50px 60px;
  font-size: 26px;
  text-align: center;
  line-height: 32px;
}
</style>
