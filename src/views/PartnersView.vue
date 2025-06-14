<template>
  <section class="contact-page">
    <div class="ibtcontainer">
      <h2>IBTCOM это:</h2>
      <img src="/what.png" alt="what">

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
      <img src="/partners.png" alt="partners">
    </div>
  </section>
</template>
<style scoped>
.ibtcontainer {
  width: 60%;
}
.ibtcontainer h2{
  margin-bottom: 25px;
  font-weight: bold;
}
.text-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 20px;
  text-align: center;
}

.text-grid p {
  font-size: 16px;
  color: #007c9f;
}
.contact-page {
  min-height: 700px;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  text-align: center;
  font-family: "JetBrains Mono", sans-serif;
  color: #007c9f;
  flex-wrap: wrap;
}
.contact-page h2{
font-weight: bold;
}

@media (max-width: 768px) {
  .contact-page {
    min-height: auto;
    padding: 40px 0;
  }
}
</style>
<script setup lang="ts">
</script>