<template>
  <section class="services-page">
    <div class="container">
      <h2>Наши услуги</h2>
      <ul>
        <li>Проектирование телекоммуникационных систем</li>
        <li>Интеграция решений</li>
        <li>Обслуживание и поддержка</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesView'
}
</script>
<style scoped>
.services-page {
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

@media (max-width: 768px) {
  .services-page {
    min-height: auto;
    padding: 40px 0;
  }
}
</style>