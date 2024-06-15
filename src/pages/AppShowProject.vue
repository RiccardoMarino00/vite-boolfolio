<template>
    <template v-if="project">
        <h1>{{ $route.params.slug }}</h1>
        <p>{{ project.title }}</p>
        <div class="col-6 bordi riga-flex">
            <div class="col-6 col-title">
                <h2 class="color-white"> {{ project.title }}</h2>
            </div>
            <div class="col-6">
                <p> {{ project.content }}</p>
                <a class="link" href="{{ project.link }}">Go to Repository&#10066;</a>
                <router-link :to="{ name: 'showProject', params: { slug: project.slug } }">Read more</router-link>

                <ul v-if="project.technologies">
                    <li v-for="technology in project.technologies">
                        {{ technology.name }}
                    </li>
                </ul>
                <ul v-if="project.type">
                    <li>{{ project.type.name }}</li>
                </ul>
            </div>
        </div>
    </template>


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