<template>
    <div>
        <h1>Projects</h1>
        <div>
            <div v-for="project in projects" :key="project.id">
                <h2> {{ project.title }}</h2>
                <p> {{ project.content }}</p>
                <a href="#">{{ project.link }}</a>
            </div>
        </div>
    </div>
    <div>
        <p @click="changePage(n)" v-for="n in lastPage" :key="n"> {{ n }}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            projects: [],
            currentpage: 1,
            lastPage: null,
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects', {
                params: {
                    page: this.currentpage
                }
            })

                .then((res) => {
                    console.log(res.data.results.data)
                    this.projects = res.data.results.data
                    this.lastPage = res.data.results.last_page
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

<style scoped></style>