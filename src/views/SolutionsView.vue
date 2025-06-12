<template>
  <section class="solutions-page">
    <div class="container">
      <h2>Решения</h2>
      <p>Мы предлагаем готовые и кастомные решения для автоматизации процессов и повышения эффективности.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SolutionsView'
}
</script>
<style scoped>
.solutions-page {
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

@media (max-width: 768px) {
  .solutions-page {
    min-height: auto;
    padding: 40px 0;
  }
}
</style>