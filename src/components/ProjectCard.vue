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
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            projects: []
        }
    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects')

                .then((res) => {
                    console.log(res.data.results.data)
                    this.projects = res.data.results.data
                })

        }
    },
    created() {
        this.fetchProjects()
    }

}
</script>

<style scoped></style>