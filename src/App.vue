<script>

import AppMain from './components/AppMain.vue'

import ProjectCard from './components/ProjectCard.vue'

export default {
  components: {
    AppMain,
    ProjectCard,
  },

  data() {
    return {
      message: 'Ciao Mondo'
    }
  }
}
</script>

<template>
  <ProjectCard />
</template>

<style>
body {
  background-image: url('./assets/layered-peaks-haikei.svg');
  background-size: cover;
  background-attachment: fixed;
  color: rgb(170, 160, 160);
}
</style>
