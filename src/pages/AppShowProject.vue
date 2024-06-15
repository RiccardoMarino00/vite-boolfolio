<template>
    <h1>{{ $route.params.slug }}</h1>

</template>

<script>

import ProjectCard from '../components/ProjectCard.vue'
import axios from 'axios'
export default {
    data() {
        return {
            project: null

        }
    },

    components: {
        ProjectCard,
    },
    props: {
        slug: {
            type: String,
            required: true
        }
    },
    methods: {
        fetchProject() {
            axios.get(`http://127.0.0.1:8000/api/projects/${this.slug}`)
                .then((res) => {
                    console.log(res.data.project)
                    this.project = res.data.project
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    },
    created() {
        this.fetchProject()
    }

}
</script>

<style lang="scss" scoped></style>