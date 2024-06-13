<template>
    <p class="" :class="n === currentpage ? 'bg-orange190' : 'bg-orange163'" @click="changePage(n)">
        {{ n }}
    </p>
</template>

<script>
export default {
    data() {
        return {
            projects: [],
            currentpage: 1,
            lastPage: null,

        }
    },
    methods: {
        changePage(n) {
            if (n === this.currentpage) return
            this.currentpage = n
            this.fetchProjects()
        }
    }
    // props: {
    //     page: {
    //         type: String,
    //         required: true,
    //     }

    // },

}
</script>

<style lang="scss" scoped></style>