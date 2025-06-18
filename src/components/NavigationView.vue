<template>
  <nav class="main-nav">
    <div class="container">
      <div class="nav-header">
        <button class="burger" @click="toggleMenu">
          ☰
        </button>
        <!-- Меню -->
        <ul :class="{ 'active': isMenuOpen }">
          <li><router-link to="/" @click="closeMenu">Главная</router-link></li>
          <li><router-link to="/about" @click="closeMenu">Телефония</router-link></li>
          <li><router-link to="/services" @click="closeMenu">Программное обеспечение</router-link></li>
          <li><router-link to="/solutions" @click="closeMenu">Аппаратное обеспечение</router-link></li>
          <li><router-link to="/partners" @click="closeMenu">Партнеры</router-link></li>
          <li><router-link to="/questions" @click="closeMenu">Вопросы</router-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.main-nav {
  background: #007c9f;
  height: 50px;
  display: flex;
  align-items: center;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}
.nav-header {
  position: relative;
  width: 100%;
}
.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.main-nav li {
  margin: 0;
}
.main-nav a {
  text-decoration: none;
  color: white;
  font-family: "JetBrains Mono", sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  padding: 15px 0;
  display: block;
}
.main-nav a:hover {
  color: #ff9800;
  transform: translateY(-2px);
}
.burger {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
}
/* Адаптивность для телефонов*/
@media (max-width: 768px) {
  .burger {
    display: block;
  }
  .main-nav ul {
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    background-color: #007c9f;
    flex-direction: column;
    align-items: center;
    gap: 0;
    padding: 0;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
    overflow: hidden;
    z-index: 5;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  .main-nav ul.active {
    transform: scaleY(1);
  }
  .main-nav li {
    width: 100%;
    text-align: center;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  .main-nav a {
    padding: 12px 20px;
  }
}
</style>
<script setup>
import { ref } from 'vue';
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>