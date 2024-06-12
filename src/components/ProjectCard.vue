<template>
    <div>
        <h1>Projects</h1>
        <div class="contenitore">
            <div class="riga-flex-column">
                <div class="col-6 bordi riga-flex" v-for="project in projects" :key="project.id">
                    <div class="col-6 col-title">
                        <h2 class="color-white"> {{ project.title }}</h2>
                    </div>
                    <div class="col-6">
                        <p> {{ project.content }}</p>
                        <a href="#">{{ project.link }}</a>
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
            </div>
        </div>
    </div>


    <div>
        <p class="" :class="n === currentpage ? 'bg-orange' : 'bg-white'" @click="changePage(n)" v-for="n in lastPage"
            :key="n">
            {{ n }}</p>
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

<style scoped>
.bg-orange {
    background-color: orange;
}

.bg-white {
    background-color: whitesmoke;
}

.contenitore {
    width: 1200px;
    margin: 0 auto;
}

.riga-flex-column {
    row-gap: 60px;
    display: flex;
    flex-direction: column;
}

.bordi {
    /* border: 2px solid lightcyan; */
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
}

.riga-flex {
    display: flex;

}

.col-6 {
    width: 50%;
    padding: 10px;
}

.col-title {
    align-self: center;
    text-align: center;
    font-size: 30px;
}

.color-white {
    color: whitesmoke;
}
</style>