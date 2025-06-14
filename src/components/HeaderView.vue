<template>
  <header class="site-header">
    <div class="container">
      <router-link to="/"><img src="/logo.png" alt="logo.png"/></router-link>
      <p>Компания Инновационных<br> Бизнес Технологий</p>
      <div class="butcontainer">
        <p>+7(3822)97-79-97<br>ibtcom@ibtcom.ru</p>
        <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#callbackModal"
        >
          Заказать звонок
        </button>
      </div>
    </div>
  </header>

  <!-- Модальное окно -->
  <div
      class="modal fade"
      id="callbackModal"
      tabindex="-1"
      aria-labelledby="callbackModalLabel"
      aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content custom-modal">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="callbackModalLabel">Оставьте заявку</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="text-white mb-4">И наши менеджеры свяжутся с вами в ближайшее время</p>
          <form>
            <!-- Имя -->
            <div class="mb-3">
              <label for="nameInput" class="form-label text-white">Имя</label>
              <input
                  type="text"
                  class="form-control bg-light"
                  id="nameInput"
                  placeholder="Введите ваше имя"
                  required
              />
            </div>

            <!-- Телефон -->
            <div class="mb-3">
              <label for="phoneInput" class="form-label text-white">Телефон</label>
              <input
                  type="tel"
                  class="form-control bg-light"
                  id="phoneInput"
                  placeholder="Введите ваш номер телефона"
                  required
              />
            </div>

            <!-- Email -->
            <div class="mb-3">
              <label for="emailInput" class="form-label text-white">E-Mail</label>
              <input
                  type="email"
                  class="form-control bg-light"
                  id="emailInput"
                  placeholder="Введите ваш e-mail"
                  required
              />
            </div>
            <div class="mb-3 form-check">
              <input
                  type="checkbox"
                  class="form-check-input"
                  id="privacyCheckbox"
                  required
              />
              <label class="form-check-label text-white" for="privacyCheckbox">
                Я согласен(а) с
                <a href="#" @click.prevent="closeModalAndNavigate('/politics')">Политикой конфиденциальности</a>
              </label>
            </div>
            <button type="submit" class="btn btn-warning w-100">Оставить заявку</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.site-header {
  color: #007c9f;
  font-family: "JetBrains Mono", sans-serif;
  width: 100%;
}
.site-header .container a img {
  transition: all 0.3s ease;
  border-radius: 8px;
}

.site-header .container a:hover img {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
.container {
  position: relative;
  display: grid;
  grid-template-columns: 300px 300px 300px;
  gap: 25px;
  align-items: center;
}
p{
  margin: 0;
}
.butcontainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.butcontainer button {
  background: #007c9f;
  height: 50px;
  font-family: "JetBrains Mono", sans-serif;
  color: white;
  border: none;
  border-radius: 8px; /* Закругление */
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  margin: 10px;
  display: flex;
  align-items: center;

}
.butcontainer button:hover {
  background: #e67e22;
  transform: translateY(-2px);
}
.custom-modal {
  background-color: #007c9f; /* Голубой фон */
  font-family: "JetBrains Mono", sans-serif;
}

/* Заголовок модального окна */
.modal-title {
  font-size: 24px;
  font-weight: bold;
}

/* Кнопка закрытия (X) */
.btn-close-white {
  filter: invert(1); /* Белый крест */
}
#nameInput{
  border: none;
}
#phoneInput{
  border: none;
}
#emailInput{
  border: none;
}
.form-control {
  border: none; /* Убираем границу */
  box-shadow: none; /* Убираем тень от bootstrap */
  background-color: #f8f9fa; /* Светлый фон */
  transition: background-color 0.3s ease, outline 0.3s ease;
}
.form-control:focus {
  border: none;
  outline: none;
  box-shadow: 0 0 0 1px rgba(230, 126, 34, 1);
}
.form-control:hover {
  border-color: #e67e22;
}
.form-check-label {
  font-size: 14px;
}
.btn-warning {
  background-color: white;
  border-color: transparent;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease;
  color: #007c9f;

  &:hover {
    background-color: #e67e22;
  }
}
.text-white {
  color: white;
}
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    row-gap: 10px;
    text-align: left;
  }

  .butcontainer {
    flex-direction: column;
    align-items: flex-start;
  }
}
#callbackModal > div > div > div.modal-body > form > div.mb-3.form-check > label > a{
  color: white;
}
</style>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const closeModalAndNavigate = (path) => {
  const modalElement = document.getElementById('callbackModal');
  if (modalElement) {
    const modalInstance = bootstrap.Modal.getInstance(modalElement);
    if (modalInstance) {
      modalInstance.hide();
    }
  }
  router.push(path);
};
</script>