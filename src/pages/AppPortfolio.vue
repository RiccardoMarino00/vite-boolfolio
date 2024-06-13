<template>
    <div class="contenitore">
        <div class="riga-flex-column">
            <ProjectCard v-for="project in projects" :key="project.id" :item="project" />
        </div>
    </div>

    <div class="text-center paginator-div riga-flex">
        <PaginatorComponent v-for="n in lastPage" :key="n" />
    </div>



</template>

<script>
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'
import PaginatorComponent from '../components/PaginatorComponent.vue'
export default {
    data() {
        return {
            projects: [],
            currentpage: 1,
            lastPage: null,
        }
    },
    components: {
        ProjectCard,
        PaginatorComponent

    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')

                .then((res) => {
                    console.log(res.data.results.data)
                    this.projects = res.data.results.data
                })

        },

        changePage(n) {
            if (n === this.currentpage) return
            this.currentpage = n
            this.fetchProjects()
        }
    },
    created() {
        this.fetchProjects()
    }
}



</script>

<style lang="scss" scoped></style>