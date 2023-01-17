<template>
  <Parallax
    :path="require('@/assets/img/parallax_pic2.jpg')"
    position="center bottom"
  >
    <h1 class="title__main">Растениеводство</h1>
  </Parallax>

  <div class="wrapper">
    <div class="plant">
      <img src="@/assets/img/plants/soya.png" />
      <span>
        Соя - Засеяно 4050 га, урожайность 70785 ц, комбикорм 9855 ц, продажа
        60930 ц
      </span>
    </div>

    <div class="plant">
      <img src="@/assets/img/plants/kartoshka.png" />
      <span> Картофель - Засяно 600 га, урожайность 110700 ц </span>
    </div>

    <div class="plant">
      <img src="@/assets/img/plants/kykyryz.png" />
      <span>
        Кукуруза (на зерно) - Засеяно 1000 га, урожайность 60300 ц <br />
        Кукуруза (на силос) - Засеяно 1000 га, урожайность 253800 ц, продажа
        24051 ц, комбикорм 10512 ц, корм 219000 ц
      </span>
    </div>

    <div class="plant">
      <img src="@/assets/img/plants/oves.png" />
      <span>
        Овёс - Засеяно 600 га, урожайность 12480 ц, комбикорм 6307 ц, продажа
        6173 ц
      </span>
    </div>

    <div class="plant">
      <img src="@/assets/img/plants/grechiha.png" />
      <span> Гречиха - Засеяно 600 га, урожайность 2580 ц </span>
    </div>

    <div class="plant">
      <img src="@/assets/img/plants/travi.png" />
      <span> Однолетние травы - Засяно 700 га, урожайность 20230 ц </span>
    </div>

    <div class="plant">
      <img src="@/assets/img/plants/yachmen.png" />
      <span>
        Яровой ячмень - Засеяно 550 га, урожайность 13145 ц, комбикорм 11038 ц,
        продажа 2107 ц
      </span>
    </div>

    <div class="plant">
      <img src="@/assets/img/plants/podsol.png" />
      <span>
        Подсолнух -- Засеяно 600 га, урожайность 14760 ц, комбикорм 6915 ц,
        продажа 7845 ц
      </span>
    </div>

    <div class="plant">
      <img src="@/assets/img/plants/travi2.png" />
      <span> Многолетние травы -- Засеяно 350 га, урожайность 7105 ц </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Rastenievodstvo",
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

.wrapper {
  gap: 2rem;
  margin: 0 auto;
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  max-width: 1200px;
  align-items: center;
  flex-direction: row;
  justify-content: center;

  .plant {
    flex-basis: 500px;
    margin: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;

    img {
      width: 300px;
      height: 300px;
      object-fit: cover;
      border-radius: 8px;
      margin-bottom: 1rem;
    }

    span {
      font-size: 1.2rem;
      text-align: center;
    }
  }
}
</style>
