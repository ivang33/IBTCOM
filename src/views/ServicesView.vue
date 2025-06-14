<template>
  <section class="services-page">
    <div class="container">
      <h2>Подберем и оптимизируем ПО</h2>
      <div class="grid">
        <!-- Первая строка -->
        <div class="grid-item">
          <div class="icon-container">
            <img src="/consalt.png" alt="Консалтинговые услуги" />
          </div>
          <p>Консалтинговые услуги</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/vibor.png" alt="Выбор/закупка/установка/оптимизация ПО" />
          </div>
          <p>Выбор/закупка/установка/оптимизация ПО</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/upd.png" alt="Отслеживание необходимых обновлений" />
          </div>
          <p>Отслеживание необходимых обновлений</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/safe.png" alt="Ведение перечня существующего ПО" />
          </div>
          <p>Ведение перечня существующего ПО</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/SAm.png" alt="Организация системы управления программным обеспечением (SAM)" />
          </div>
          <p>Организация системы управления программным обеспечением (SAM)</p>
        </div>

        <!-- Вторая строка -->
        <div class="grid-item">
          <div class="icon-container">
            <img src="/program.png" alt="Программирование" />
          </div>
          <p>Программирование</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/web.png" alt="Web-технологии (MS SharePoint, MS IIS, Apache, Nginx)" />
          </div>
          <p>Web-технологии<br />(MS SharePoint, MS IIS, Apache, Nginx)</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/internet.png" alt="Программные шлюзы в сеть Интернет" />
          </div>
          <p>Программные шлюзы в сеть Интернет</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/serv.png" alt="Настройка файлового сервера" />
          </div>
          <p>Настройка файлового сервера</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/based.png" alt="Работы с базами данных" />
          </div>
          <p>Работы с базами данных</p>
        </div>

        <!-- Третья строка -->
        <div class="grid-item">
          <div class="icon-container">
            <img src="/mail.png" alt="Настройка почтовой системы" />
          </div>
          <p>Настройка почтовой системы</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/syst.png" alt="Настройка сетевых хранилищ" />
          </div>
          <p>Настройка сетевых хранилищ</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/webset.png" alt="Установка систем визуализации" />
          </div>
          <p>Установка систем визуализации</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/PO.png" alt="Системы безопасности" />
          </div>
          <p>Системы безопасности</p>
        </div>
        <div class="grid-item">
          <div class="icon-container">
            <img src="/user tabgle.png" alt="Службы удаленных рабочих столов" />
          </div>
          <p>Службы удаленных рабочих столов</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.services-page {
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url('/bgprog.jpg'); /* Фоновое изображение */
  background-size: cover;
  background-position: center;
  color: #007c9f; /* Цвет текста */
  font-family: 'JetBrains Mono', sans-serif;
}

.container {
  max-width: 1200px;
  padding: 40px;
}

h2 {
  font-size: 40px;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10%;
}

.grid-item:hover {
  transform: scale(1.1);
  background-color: white;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  border-radius: 10%;
}

.icon-container {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.icon-container img {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5)); /* Тень для иконки */
}

.grid-item p {
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  margin-top: 10px;
}
</style>