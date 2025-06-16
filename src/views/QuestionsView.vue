<template>
  <section class="questions-page">
    <div class="container">
      <h2>Часто задаваемые вопросы</h2>
      <!-- Вопросы и ответы -->
      <div class="faq-items">
        <div class="faq-item">
          <div class="question">
            <img src="/q.png" alt="Значок вопроса" class="question-icon" />
            <p>Работаете ли вы с частными лицами?</p>
          </div>
          <div class="answer">
            К сожалению, мы работаем только с юридическими лицами.
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <img src="/q.png" alt="Значок вопроса" class="question-icon" />
            <p>Как долго действуют тарифы, которые вы предлагаете?</p>
          </div>
          <div class="answer">
            У тарифных планов нет сроков действия. Согласно законодательству сотовый оператор не может менять условия тарифного плана, на который вы уже подключились ранее.
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <img src="/q.png" alt="Значок вопроса" class="question-icon" />
            <p>Занимаетесь ли вы спутниковой связью?</p>
          </div>
          <div class="answer">
            Да, мы готовы предложить любые отраслевые решения, вплоть до организации магистральных каналов.
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <img src="/q.png" alt="Значок вопроса" class="question-icon" />
            <p>Бывало ли, что клиенты жаловались на качество ваших работ?</p>
          </div>
          <div class="answer">
            Нет. Были замечания по графику работы. Но это выбор нашей компании. Мы стараемся уважать личную жизнь наших клиентов и сотрудников, и поэтому работаем только с 9:00 до 18:00.
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <img src="/q.png" alt="Значок вопроса" class="question-icon" />
            <p>Какие формы оплаты принимаете?</p>
          </div>
          <div class="answer">
            Мы принимаем к оплате только безналичный расчёт.
          </div>
        </div>
        <div class="faq-item">
          <div class="question">
            <img src="/q.png" alt="Значок вопроса" class="question-icon" />
            <p>Как долго вы работаете?</p>
          </div>
          <div class="answer">
            Организация работает на рынке информационных технологий более 5 лет.
          </div>
        </div>
      </div>
      <div class="faq-item">
        <div class="question">
          <img src="/q.png" alt="Значок вопроса" class="question-icon" />
          <p>Что необходимо для перехода на новые тарифы телефонии?</p>
        </div>
        <div class="answer">
          Для организаций достаточно прислать заявку на адрес электронной почты со своими реквизитами и информацией о имеющихся абонентах (номера, операторы, затраты, ФИО абонентов).
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#callbackModal">
          Задать свой вопрос
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.questions-page {
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #f9f9f9;
  font-family: "JetBrains Mono", sans-serif;
}
.container {
  margin: 0 auto;
  padding: 40px 20px;
}
#app > section > div > h2{
  color: #007c9f;
  font-weight: bold;
  font-size: 35px;
}
.faq-items {
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Адаптивная сетка */
  grid-template-rows: repeat(4, auto); /* 4 строки */
}
.faq-item {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 20px;
}
p{
  margin: 0;
}
.question {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  color: #007c9f;
  margin: 0;
  font-size: 16px;
}
.question-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #eef9ff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.answer {
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
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
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.2);
}
.btn-primary:hover {
  background: #e67e22;
  transform: translateY(-2px);
}
.text-center {
  text-align: center;
  margin-top: 40px;
}
</style>