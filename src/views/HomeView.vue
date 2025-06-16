<template>
  <section class="home-page">
    <div class="container">
      <h2>Оптимизируем и сократим ваши расходы на затраты!</h2>
      <div class="icons">
        <!-- Карточка 1 -->
        <router-link to="/about"><div class="icon-card">
          <img src="/rame1.png" alt="rame1.png">
          <div class="card-text">
            <p>СОКРАТИМ ЗАТРАТЫ<br>НА СОТОВУЮ СВЯЗЬ</p>
          </div>
        </div>
        </router-link>
        <!-- Карточка 2 -->
        <router-link to="/services">
          <div class="icon-card">
          <img src="/rame2.png" alt="rame2.png" />
          <div class="card-text">
            <p>ПОДБЕРЕМ И ОПТИМИЗИРУЕМ<br>ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ</p>
          </div>
        </div>
        </router-link>
        <!-- Карточка 3 -->
        <router-link to="/solutions">
          <div class="icon-card">
          <img src="/rame3.png" alt="rame3.png" />
          <div class="card-text">
            <p>ПОДБЕРЕМ И УСТАНОВИМ<br>АППАРАТНОЕ ОБЕСПЕЧЕНИЕ</p>
          </div>
        </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.home-page {
  min-height: 700px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  background-image: url("../../public/money-phone.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
#app > section > div > h2 {
  font-size: 35px;
  color: #007c9f;
  text-align: center;
  font-weight: bold;
  font-family: "JetBrains Mono", sans-serif;
  margin: 0 auto;
  padding-top: 20px;
}
.icons {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
}
.icon-card {
  position: relative;
  width: 300px;
  height: 400px;
  border-radius: 16px;
}
.icon-card img {
  width: 300px;
  height: 400px;
  object-fit: cover;
  border: 1px solid #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}
.icon-card:hover img {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}
.card-text {
  position: absolute;
  top: 40%;
  left: 50.3%;
  transform: translate(-50%, -50%);
  width: 280px;
  max-width: 285px;
  background-color: rgba(0, 124, 159, 0.8);
  color: white;
  padding: 15px 10px;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  align-items: center;
  z-index: 1;
  transition: all 0.3s ease;
  font-family: "JetBrains Mono", sans-serif;
}
.icon-card:hover .card-text {
  transform: translate(-50%, -50%) scale(1.06);
}
</style>