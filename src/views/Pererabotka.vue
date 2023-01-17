<template>
  <Parallax
    :path="require('@/assets/img/parallax_pic6.jpg')"
    position="center bottom"
  >
    <h1 class="title__main">Переработка</h1>
  </Parallax>

  <div class="product">
    <span class="product__title">Молоко</span>

    <span class="product__description">
      <strong>1 год</strong> - Молоко 3000, Сыр 50, Творог 200, Сухое молоко 40
      <br /><strong>3 года</strong>- Молоко 9000, Сыр 150, Творог 600, Сухое
      молоко 120</span
    >
  </div>

  <div class="product">
    <span class="product__title">Работа с молоком</span>

    <span class="product__description">
      1. Пастеризация -- Внутри установки поддерживается отсутствие кислородаи
      75-80 °C. Процедура длится около часа, 2000л/час <br />2. Пластинчатые
      охладители -- Производительность охладителей 10000л/час при температуре
      2-6 °C</span
    >
  </div>

  <div class="product">
    <span class="product__title">Стоимость оборудования</span>

    <span class="product__description">
      Пастеризатор - за 2 шт 2 757 тыс руб <br />
      Пластинчатый охладитель - за 1 шт 240 тыс руб След блок <br />
      Мясная продукция - 400 голов, мясо 120 тонн <br /><br />
      Прибыль <strong>48 млн 960 тыс руб</strong></span
    >
  </div>

  <div class="product">
    <span class="product__title">Состав комбикорма</span>

    <span class="product__description">
      Ячмень 210кг <br />
      Овес 119 кг<br />
      Кукуруза 200 кг<br />
      Шрот подсолнечный 50 кг<br />
      Шрот соевый 150 кг<br />
      Отруби пшеничные 150 кг<br />
      Дрожжи кормовые 50 кг<br />Меласса 30 кг<br />Соль 10кг<br />Премикс
      П60-6м 10кг<br />Мел 5кг<br />Монокалий фосфат 14кг</span
    >
  </div>

  <div class="product">
    <span class="product__title">Растительная продукция</span>

    <span class="product__description">
      Подсолнечное масло - 196 250 кг, прибыль 18 млн 251 тыс руб<br />
      Пшеничная мука - 393 750 кг, прибыль 11 млн 812 тыс руб <br />Крахмал - 1
      млн 992 тыс кг, прибыль 193 млн 282 тыс<br />
      Кукуруза на силос - 2 405 тонн, прибыль 43 млн 291 тыс руб
      <br />Кукурузное масло - 1 млн 620 тыс кг, прибыль 186 млн 393 тыс руб
      <br />
      Общая прибыль - 634 млн 893 тыс руб</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Pererabotka",
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

.product {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__title {
    font-size: 2rem;
    font-weight: 700;
  }

  &__description {
    font-size: 1.2rem;
    font-weight: 400;
  }
}
</style>
