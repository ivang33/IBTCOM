<template>
  <section class="contact-page">
    <div class="ibtcontainer">
      <h2>IBTCOM это:</h2>
      <img src="/what.png" alt="what" class="responsive-image">

      <!-- Добавленный текст под картинкой -->
      <div class="text-grid">
        <p>Высококвалифицированная помощь при выборе ПО</p>
        <p>Работа напрямую с крупнейшими дистрибьюторами и реселлерами ПО</p>
        <p>Продажа специализированного ПО</p>
        <p>Формирование пакета программ в зависимости от функции сотрудника</p>
      </div>
    </div>

    <div class="container">
      <h2>Наши партнеры:</h2>
      <img src="/partners.png" alt="partners" class="responsive-image">
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  min-height: 700px;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  text-align: center;
  font-family: "JetBrains Mono", sans-serif;
  color: #007c9f;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.ibtcontainer, .container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.ibtcontainer h2, .container h2 {
  margin-bottom: 25px;
  font-weight: bold;
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
}

.text-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
  text-align: center;
}

.text-grid p {
  font-size: clamp(0.9rem, 1.1vw, 1.2rem);
  color: #007c9f;
  line-height: 1.5;
}

.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>

<script setup lang="ts">
</script>