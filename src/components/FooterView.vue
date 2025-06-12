<template>
  <footer class="site-footer">
    <div class="footer-content container">
      <!-- Левая часть -->
      <div class="contact-info">
        <p>+7 (3822) 97-79-97</p>
        <p>ibtcom@ibtcom.ru</p>
      </div>

      <!-- Правая часть -->
      <div class="legal-info">
        <p>© 2010 - {{ year }}, ООО «Компания Инновационных Бизнес Технологий». Все права защищены.</p>
        <p>ИНН 7017275599 / КПП 701701001</p>
      </div>

      <!-- Соцсети -->
      <div class="socials">
        <h5>Наши соцсети</h5>
        <a href="https://t.me/your_telegram"  target="_blank" class="telegram-button">
          <img src="/telegram.png" alt="Telegram" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style scoped>
.site-footer {
  background-color: #007c9f;
  color: white;
  font-family: "JetBrains Mono", monospace, sans-serif;
  padding: 2.3rem 1rem;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr auto;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  text-align: left;
}

.contact-info p,
.legal-info p {
  margin: 0;
  font-size: 14px;
}

/* Заголовок соцсетей */
.socials h5 {
  margin-bottom: 0.5rem;
  font-size: 16px;
  font-weight: bold;
}

/* Кнопка Telegram */
.telegram-button {
  background-color: transparent;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.telegram-button img {
  width: 30px;
  height: 30px;
}

.telegram-button:hover {
  background-color: white;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    row-gap: 1rem;
  }

  .socials {
    order: -1; /* Перемещаем блок выше остального контента */
    text-align: center;
  }

  .telegram-button {
    margin: 0 auto;
  }
}
</style>