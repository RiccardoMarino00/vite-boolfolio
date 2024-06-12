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
  <h1> {{ message }} </h1>
  <ProjectCard />
</template>

<style></style>
