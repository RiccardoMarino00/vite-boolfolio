<template>
    <div class="scroll"></div>
    <div class="contenitore">
        <div class="riga-flex-column">
            <ProjectCard v-for="project in projects" :key="project.id" :item="project" />
        </div>
    </div>

    <div class="text-center paginator-div riga-flex">
        <p v-for="n in lastPage" :key="n" :class="n === currentpage ? 'bg-orange190' : 'bg-orange163'"
            @click="changePage(n)">{{ n }}</p>
    </div>



</template>

<script>
import axios from 'axios'
import ProjectCard from '../components/ProjectCard.vue'
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

    },
    methods: {
        fetchProjects() {
            axios.get('http://127.0.0.1:8000/api/projects',
                {
                    params: {
                        page: this.currentpage,

                    }
                }
            )

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

<style scoped>
.scroll {
    width: 100%;
    height: 10px;
    background-color: whitesmoke;
    border-radius: 5px;
    position: fixed;
    z-index: 1000;
    top: 0;
    scale: 0 1;
    animation: scroll-watcher linear;
    animation-timeline: scroll();
    transform-origin: left;
}

@keyframes scroll-watcher {
    to {
        scale: 1 1;
    }

}
</style>