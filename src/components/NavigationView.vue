<template>
  <nav class="main-nav">
    <div class="container">
      <!-- Логотип/бургер -->
      <div class="nav-header">
        <ul>
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/about">Телефония</router-link></li>
          <li><router-link to="/services">Программное обеспечение</router-link></li>
          <li><router-link to="/solutions">Аппаратное обеспечение</router-link></li>
          <li><router-link to="/partners">Партнеры</router-link></li>
          <li><router-link to="/questions">Вопросы</router-link></li>
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

.main-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.main-nav li {
  margin: 0 10px;
}

.main-nav a {
  text-decoration: none;
  color: white;
  font-family: "JetBrains Mono", sans-serif;
  font-size: 16px;
  transition: all 0.3s ease;
  position: relative;
  padding-bottom: 4px;
}

.main-nav a:hover{
  color: #ff9800;
  transform: translateY(-2px);
}

.main-nav a.router-link-exact-active::after {
  width: 100%;
  background-color: #e67e22;
}
</style>