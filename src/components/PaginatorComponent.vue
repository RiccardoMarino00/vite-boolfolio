<template>
    <p class="">
        {{ n }}
    </p>
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
            axios.get('http://127.0.0.1:8000/api/projects')

                .then((res) => {
                    console.log(res.data.results.data)
                    this.projects = res.data.results.data
                    this.lastPage = res.data.results['last_page']
                })

        },
        changePage(n) {
            if (n === this.currentpage) return
            this.currentpage = n
            this.fetchProjects()
        }
    }


}
</script>

<style lang="scss" scoped></style>