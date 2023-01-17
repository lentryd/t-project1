<template>
  <Parallax
    :path="require('@/assets/img/parallax_pic4.jpg')"
    position="center bottom"
  >
    <h1 class="title__main">Рыболовство</h1>
  </Parallax>

  <div class="location">
    <img
      class="location__image"
      src="@/assets/img/aqua/ozero.jpg"
      alt="Озеро"
    />

    <div class="location__description">
      <ul>
        <li>1. Расположен водоем на высоте 59 метров над уровнем моря</li>
        <li>2. Пресная вода в озере мутная, светло-желтого цвета</li>
        <li>
          3. Максимальная глубина озера - 10,6 метров, средняя глубина - 4,5
          метра
        </li>
        <li>
          4. Протяженность вдоль береговой линии составляет примерно 95 км
        </li>
      </ul>
    </div>
  </div>

  <div class="fish">
    <img class="fish__image" src="@/assets/img/aqua/sadok1.jpg" />

    <img class="fish__image" src="@/assets/img/aqua/sadok2.jpg" />
  </div>

  <div class="info">
    Затраты:

    <ul>
      <li>175 тыс руб - закупка мальков</li>
      <li>490 тыс руб - закупка корма</li>
      <li>2'562 тыс руб - закупка садков</li>
      <li>5'400 тыс руб - оплата труда рабочих</li>
      <li>540 тыс руб - налоги</li>
    </ul>
    Продажа c учетом потери рыбы выходит 350000 карасей через 3 года, что
    составит <strong>33 млн 355 тыс</strong> рублей прибыли. Чистая прибыль
    <strong>24 млн 362 тыс руб</strong>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Rybolovstvo",
});
</script>

<style lang="scss" scoped>
.title__main {
  color: #fff;
  padding: 1rem;
  font-size: 2.8rem;
  text-align: center;
  font-weight: 700;
}

.location,
.fish {
  gap: 24px;
  display: flex;
  padding: 16px 24px;
  margin-top: 36px;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 850px) {
    flex-direction: column;
  }

  > .location__image,
  .fish__image {
    width: 100%;
    height: auto;
    max-width: 400px;
    object-fit: cover;
    border-radius: 16px;
  }

  > .location__description > ul,
  .fish__description > ul {
    padding: 0 16px;
    font-size: 1.2rem;
    list-style: none;
  }
}

.info {
  padding: 16px 24px;
  font-size: 1.2rem;
  margin-top: 36px;
}
</style>
