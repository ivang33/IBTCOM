<template>
  <section class="contact-page">
    <div class="container">
      <h2>Наши партнеры:</h2>
      <img src="/partners.png" alt="partners">
    </div>
  </section>
</template>

<style scoped>
.contact-page {
  min-height: 700px;
  display: flex;
  margin-top: 100px;
  justify-content: center;
  text-align: center;
  font-family: "JetBrains Mono", sans-serif;
  color: #007c9f;
}

@media (max-width: 768px) {
  .contact-page {
    min-height: auto;
    padding: 40px 0;
  }
}
</style>