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
  min-height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: "JetBrains Mono", sans-serif;
  color: #007c9f;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  box-sizing: border-box;
  gap: 30px;
}

.ibtcontainer, .container {
  width: 100%;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ibtcontainer h2, .container h2 {
  margin-bottom: 20px;
  color: #007c9f;
  font-weight: bold;
  font-size: 28px;
}

.text-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  margin-top: 20px;
  text-align: center;
  width: 100%;
  max-width: 1000px;
}

.text-grid p {
  font-size: 16px;
  color: #007c9f;
  line-height: 1.4;
  margin: 0;
  padding: 12px;
  background-color: #f0f8ff;
  border-radius: 8px;
}

.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

/* Адаптив только для телефонов (до 768px) */
@media (max-width: 768px) {
  .contact-page {
    padding: 0 10px;
    gap: 20px;
    margin-top: 20px;
  }

  .ibtcontainer h2, .container h2 {
    font-size: 22px;
    margin-bottom: 15px;
  }

  .text-grid {
    gap: 10px;
    margin-top: 15px;
  }

  .text-grid p {
    font-size: 14px;
    padding: 10px;
  }
}
</style>