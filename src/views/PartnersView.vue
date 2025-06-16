<template>
  <section class="contact-page">
    <div class="ibtcontainer">
      <h2>IBTCOM это:</h2>
      <img src="/what.png" alt="what" class="responsive-image">
      <!-- Текст под картинкой -->
      <div class="text-grid">
        <div class="text-item">
          <p>Высококвалифицированная помощь при выборе ПО</p>
        </div>
        <div class="text-item">
          <p>Работа напрямую с крупнейшими дистрибьюторами и реселлерами ПО</p>
        </div>
        <div class="text-item">
          <p>Продажа специализированного ПО</p>
        </div>
        <div class="text-item">
          <p>Формирование пакета программ в зависимости от функции сотрудника</p>
        </div>
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
  flex-direction: column;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "JetBrains Mono", sans-serif;
  color: #007c9f;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;
  box-sizing: border-box;
  gap: 40px;
}
.ibtcontainer, .container {
  width: 110%;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ibtcontainer h2, .container h2 {
  margin-bottom: 25px;
  color: #007c9f;
  font-weight: bold;
  font-size: 35px;
}
.text-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);;
  gap: 30px;
  margin-top: 30px;
  text-align: center;
  width: 100%;
  max-width: 1000px;
  margin-right: 40px;
}
.text-grid p {
  font-size: 19px;
  color: #007c9f;
  line-height: 1.5;
  margin: 0;
}
.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>