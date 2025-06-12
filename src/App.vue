<template>
  <div id="app">
    <Header />
    <Navigation />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from './components/HeaderView.vue'
import Footer from './components/FooterView.vue'
import Navigation from './components/NavigationView.vue'

export default {
  components: {
    Header,
    Footer,
    Navigation
  }
}
</script>

<style>

</style>