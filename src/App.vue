<script>


import ProjectCard from './components/ProjectCard.vue'

import Header from './components/Header.vue'

export default {
  components: {
    ProjectCard,
    Header,
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
  <!-- <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p> -->
  <Header />




  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  /* background-image: url('./assets/layered-peaks-haikei.svg'); */
  background-image: url('../public/linear.jpg');
  background-size: cover;
  color: rgb(170, 160, 160);
}

.header-container {
  background-color: transparent;
  border-radius: 10px;
  /* box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px; */
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
}

.header-row {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  height: 50px;

}

.header-row:nth-child(1) {
  margin-left: 30px;
}

nav>* {
  margin-right: 20px;
  position: relative;
  color: white;
  font-size: 20px;
}

nav>*::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 3px;
  background: rgb(231, 29, 53);
  transition: .3s;
}

nav>*:hover::before {
  width: 100%;
}



/* .header-row>nav:nth-child(1)::before {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 0;
  height: 2px;
  background: rgb(255, 255, 255);
  transition: .3s;

}

.header-row>nav:nth-child(1):hover::before {
  width: 100%;

} */

.logo {
  font-size: 30px;
  font-weight: 700;
  color: white;
}
</style>
