<script>


import ProjectCard from './components/ProjectCard.vue'

export default {
  components: {
    ProjectCard,
  },

  data() {
    return {
      message: 'Ciao Mondo',
      projects: [],
      currentpage: 1,
      lastPage: null,

    }
  }
}
</script>

<!-- <template>
  <AppMain />
</template> -->

<template>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="contact">Go to contact</RouterLink>
    <RouterLink to="portfolio">Go to portfolio</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  background-image: url('./assets/layered-peaks-haikei.svg');
  background-size: cover;
  background-attachment: fixed;
  color: rgb(170, 160, 160);
}
</style>
