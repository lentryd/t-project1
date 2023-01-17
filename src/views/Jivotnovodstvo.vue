<template>
  <Parallax
    :path="require('@/assets/img/parallax_pic5.jpg')"
    position="center bottom"
  >
    <h1 class="title__main">Животноводство</h1>
  </Parallax>

  <div class="animal">
    <div class="image">
      <img src="@/assets/img/animals/korova1.jpg" />
      <span
        >Айширская корова (1200 голов) <br />
        дают 5460 тон молока в год</span
      >
    </div>

    <div class="description">
      <ul>
        <li>1. Устойчивы к болезням</li>
        <li>2. Крепкое здоровье</li>
        <li>3. Устойчивы к холоду</li>
        <li>4. Качественное молоко</li>
      </ul>
    </div>
  </div>

  <div class="info">
    Технологии и затраты на них

    <ul>
      <li>1. Респондеры и ушные бирки -- 1 560 тыс + 96 тыс руб</li>
      <li>2. Программное управление стадом -- 40 тыс руб/месяц</li>
      <li>3. Стойловое оборудование -- 2 520 тыс руб</li>
      <li>4. Навозоудаление Дельта-скреперы -- 1 239 тыс</li>
      <li>5. Доильный зал типа "Параллель", размер 2x16 -- 10-15 млн руб</li>
      <li>6. Система охлаждения и хранения молока -- 2 514 тыс руб</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Jivotnovodstvo",
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

.animal {
  gap: 2rem;
  display: flex;
  margin-top: 36px;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  .image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;

    img {
      width: 100%;
      max-width: 400px;
      height: auto;
      border-radius: 10px;
    }

    span {
      font-size: 0.8rem;
      text-align: center;
      margin-top: 1rem;
      line-height: 1;
      font-weight: 300;
    }
  }

  .description {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;

      li {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 1rem;
      }
    }
  }
}
.info {
  padding: 16px 24px;
  font-size: 1.2rem;
  margin-top: 36px;
}
</style>
