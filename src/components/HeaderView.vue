<template>
  <header class="site-header">
    <div class="container">
      <router-link to="/" class="logo-link">
        <img src="/logo.png" alt="logo.png" class="logo"/>
      </router-link>
      <p class="company-name">Компания Инновационных<br> Бизнес Технологий</p>
      <div class="butcontainer">
        <p class="contact-info">+7(3822)97-79-97<br>ibtcom@ibtcom.ru</p>
        <button type="button" class="btn btn-primary callback-btn" data-bs-toggle="modal" data-bs-target="#callbackModal">
          Заказать звонок
        </button>
      </div>
    </div>
  </header>
  <!-- Модальное окно -->
  <div class="modal fade" id="callbackModal" tabindex="-1" aria-labelledby="callbackModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content custom-modal">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="callbackModalLabel">Оставьте заявку</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="text-white mb-4">И наши менеджеры свяжутся с вами в ближайшее время</p>
          <form class="callback-form">
            <div class="mb-3">
              <label for="nameInput" class="form-label text-white">Имя</label>
              <input type="text" class="form-control bg-light" id="nameInput" placeholder="Введите ваше имя" required/>
            </div>
            <div class="mb-3">
              <label for="phoneInput" class="form-label text-white">Телефон</label>
              <input type="tel" class="form-control bg-light" id="phoneInput" placeholder="Введите ваш номер телефона" required/>
            </div>
            <div class="mb-3">
              <label for="emailInput" class="form-label text-white">E-Mail</label>
              <input type="email" class="form-control bg-light" id="emailInput" placeholder="Введите ваш e-mail" required/>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="privacyCheckbox" required/>
              <label class="form-check-label text-white" for="privacyCheckbox">
                Я согласен(а) с
                <a href="#" @click.prevent="closeModalAndNavigate('/politics')" class="privacy-link">
                  Политикой конфиденциальности
                </a>
              </label>
            </div>
            <button type="submit" class="btn btn-warning w-100 submit-btn">Оставить заявку</button>
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
  padding: 10px 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1000;
}

.container {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 900px;
}

.logo {
  width: 100%;
  max-width: 150px;
  height: auto;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.logo-link:hover .logo {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.company-name {
  margin: 0;
  font-size: 16px;
  text-align: center;
}

.butcontainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
}

.contact-info {
  font-size: 16px;
  line-height: 1.4;
  text-align: right;
  margin: 0;
}

.callback-btn {
  background: #007c9f;
  height: 50px;
  font-family: "JetBrains Mono", sans-serif;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  padding: 0 20px;
  white-space: nowrap;
  font-size: clamp(12px, 1.3vw, 16px);
}

.callback-btn:hover {
  background: #e67e22;
  transform: translateY(-2px);
}

.custom-modal {
  background-color: #007c9f;
  font-family: "JetBrains Mono", sans-serif;
  border-radius: 10px;
  overflow: hidden;
}

.modal-title {
  font-size: clamp(18px, 2vw, 24px);
  font-weight: bold;
}

.btn-close-white {
  filter: invert(1);
}

.form-control {
  border: none;
  box-shadow: none;
  background-color: #f8f9fa;
  transition: background-color 0.3s ease, outline 0.3s ease;
  padding: 12px 15px;
  font-size: clamp(14px, 1.5vw, 16px);
}

.form-control:focus {
  outline: none;
  box-shadow: 0 0 0 1px rgba(230, 126, 34, 1);
}

.form-check-label {
  font-size: clamp(12px, 1.3vw, 14px);
}

.privacy-link {
  color: white;
  text-decoration: underline;
  transition: color 0.3s ease;
}

.privacy-link:hover {
  color: #e67e22;
}

.submit-btn {
  background-color: white;
  border-color: transparent;
  font-size: clamp(14px, 1.5vw, 18px);
  font-weight: bold;
  transition: background-color 0.3s ease;
  color: #007c9f;
  padding: 10px;
  margin-top: 10px;
}

.submit-btn:hover {
  background-color: #e67e22;
  color: white;
}

/* Только мобильные устройства (максимальная ширина 768px) */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 15px;
    width: 100%;
    padding: 10px 15px;
    text-align: center;
  }

  .logo {
    margin: 0 auto;
    max-width: 120px;
  }

  .company-name {
    font-size: 14px;
    grid-row: 2;
  }

  .butcontainer {
    flex-direction: column;
    align-items: center;
    gap: 15px;
    grid-row: 3;
  }

  .contact-info {
    text-align: center;
    font-size: 14px;
  }

  .callback-btn {
    width: 100%;
    max-width: 250px;
    height: 45px;
    font-size: 14px;
  }

  /* Модальное окно для мобильных */
  .modal-title {
    font-size: 18px;
  }

  .form-control {
    font-size: 14px;
    padding: 10px 12px;
  }

  .form-check-label {
    font-size: 12px;
  }

  .submit-btn {
    font-size: 15px;
  }
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