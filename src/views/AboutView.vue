<template>
  <section class="about-page">
    <div class="content-wrapper">
      <h2 class="section-title">Сократим затраты на сотовую связь</h2>
      <div class="advantages-image">
        <img src="/icons.png" alt="Преимущества" />
      </div>
      <!-- Текст под иконками -->
      <div class="advantages-text">
        <div class="text-item">
          <p>Доступ к специальным тарифам</p>
        </div>
        <div class="text-item">
          <p>Не нужно менять номер</p>
        </div>
        <div class="text-item">
          <p>Среднее снижение затрат 30%</p>
        </div>
        <div class="text-item">
          <p>Смена оператора и тарифа в течение 8 дней</p>
        </div>
      </div>
      <div class="process">
        <h3 class="section-subtitle">Как мы сократим затраты</h3>
        <div class="process-content">
          <img :src="'/how.png'" alt="Процесс" class="process-image" />
          <div class="steps">
            <div class="step">
              <p>Позвоните нам по номеру +7(3822) 97-79-97</p>
            </div>
            <div class="step">
              <p>Мы проанализируем ваши затраты и подберем оптимальный тариф</p>
            </div>
            <div class="step">
              <p>Оформим пакет документов</p>
            </div>
            <div class="step">
              <p>Перевод на новый тариф в течение 8 дней</p>
            </div>
            <div class="step">
              <p>Вы сэкономите до 30% благодаря подключению к новому тарифу</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#callbackModal">
          Оставить заявку
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.about-page {
  font-family: "JetBrains Mono", sans-serif;
  background-color: #f9f9f9;
  padding: 40px 15px;
  color: #333;
  display: flex;
  justify-content: center;
}
.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}
.section-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #007c9f;
}
.advantages-image {
  text-align: center;
  margin-bottom: 20px;
}
.advantages-image img {
  width: 100%;
  max-width: 800px;
  height: auto;
  display: block;
  margin: 0 auto;
}
.advantages-text {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
}
.text-item {
  flex: 1 1 200px;
  min-width: 150px;
  text-align: center;
  font-size: 16px;
  color: #333;
  background-color: #ffffff;
  border: 2px solid #007c9f;
  border-radius: 8px;
  padding: 15px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}
.text-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  border-color: #e67e22;
}
.text-item p {
  margin: 0;
}
.process {
  text-align: center;
  margin-bottom: 30px;
}
.section-subtitle {
  font-size: 22px;
  font-weight: bold;
  color: #007c9f;
  margin-bottom: 20px;
}
.process-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.process-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  display: block;
}
.steps {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
.step p {
  font-size: 15px;
  margin: 8px 0;
  padding: 12px 15px;
  background-color: #eef9ff;
  border-left: 4px solid #007c9f;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}
.btn-primary {
  background: #007c9f;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 8px rgba(255, 152, 0, 0.2);
  width: 100%;
  max-width: 300px;
}
.btn-primary:hover {
  background-color: #e67e22;
}
.text-center {
  text-align: center;
  margin-top: 30px;
}
/* Адаптивность для телефонов*/
@media (max-width: 768px) {
  .about-page {
    padding: 30px 10px;
  }
  .section-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .advantages-text {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
  }
  .text-item {
    flex: 1 1 auto;
    width: 100%;
    padding: 12px;
    font-size: 15px;
  }
  .section-subtitle {
    font-size: 20px;
  }
  .step p {
    font-size: 14px;
    padding: 10px 12px;
  }
  .btn-primary {
    padding: 10px 20px;
    font-size: 15px;
    max-width: 100%;
  }
}
</style>