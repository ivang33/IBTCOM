<template>
  <section class="solutions-page">
    <div class="container">
      <h2>Подберем и произведем монтаж аппаратного обеспечения</h2>
      <!-- Сетка с иконками и текстом -->
      <div class="grid">
        <div class="grid-item">
          <div class="icon-container">
            <img src="/ATC.png" alt="Консалтинговые услуги" />
          </div>
          <p>Консалтинговые услуги</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/postroen.png" alt="Выбор / закупка / монтаж / настройка аппаратного обеспечения" />
          </div>
          <p>Выбор / закупка / монтаж / настройка аппаратного обеспечения</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/vidsys.png" alt="Организация систем видеонаблюдения" />
          </div>
          <p>Организация систем видеонаблюдения</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/montaje.png" alt="Построение и проектирование локальных вычислительных сетей" />
          </div>
          <p>Построение и проектирование локальных вычислительных сетей</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/zakup.png" alt="Работа с АТС. Настройка, эксплуатация" />
          </div>
          <p>Работа с АТС. Настройка, эксплуатация</p>
        </div>
      </div>
      <p class="description">
        Компания предоставляет бесплатные консалтинговые услуги при выборе аппаратного обеспечения<br />
        и предлагает пакеты программ в зависимости от функции сотрудника
      </p>
    </div>
  </section>
</template>
<style scoped>
.solutions-page {
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url('/bgaparat.jpg');
  background-size: cover;
  background-position: center;
  color: #007c9f;
  font-family: "JetBrains Mono", sans-serif;
}
.container {
  max-width: 1200px;
  padding: 40px;
}
h2 {
  font-size: 35px;
  font-weight: bold;
  margin-bottom: 40px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}
.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  border-radius: 10%;
}
@media (hover: hover) {
  .grid-item:hover {
    transform: scale(1.1);
    background-color: white;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
}
.icon-container {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
}
.icon-container img {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
}
.grid-item p {
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  margin-top: 10px;
}
.description {
  margin-top: 40px;
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: #007c9f;
  height: 70px;
  border-radius: 15px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
/* Адаптивность для телефонов*/
@media (max-width: 768px) {
  .solutions-page {
    min-height: auto;
    padding: 30px 0;
  }
  .container {
    padding: 20px;
  }
  h2 {
    font-size: 28px;
    margin-bottom: 30px;
  }
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-item {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
  }
  .icon-container {
    width: 50px;
    height: 50px;
  }
  .icon-container img {
    width: 35px;
    height: 35px;
  }
  .grid-item p {
    font-size: 0.9rem;
  }
  .description {
    margin-top: 30px;
    padding: 15px;
    height: auto;
    font-size: 0.9rem;
  }
}
</style>