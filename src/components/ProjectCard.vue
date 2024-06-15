<template>

    <div class="col-6 bordi riga-flex">
        <div class="col-6 col-title">
            <h2 class="color-white"> {{ item.title }}</h2>
        </div>
        <div class="col-6">
            <p> {{ item.content }}</p>
            <a class="link" href="{{ item.link }}">Go to Repository&#10066;</a>
            <router-link :to="{ name: 'showProject', params: { slug: item.slug } }">Read more</router-link>

            <ul v-if="item.technologies">
                <li v-for="technology in item.technologies">
                    {{ technology.name }}
                </li>
            </ul>
            <ul v-if="item.type">
                <li>{{ item.type.name }}</li>
            </ul>
        </div>
    </div>




</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {

        }
    },
    props: {
        item: {
            type: Object,
            required: true,
        }

    },


}
</script>

<style>
.bg-orange163 {
    background-color: rgb(163, 45, 4);
}

.bg-orange190 {
    background-color: rgb(190, 68, 7);
}



.riga-flex-column {
    row-gap: 60px;
    display: flex;
    flex-direction: column;
}

.bordi {
    /* border: 2px solid lightcyan; */
    border-radius: 10px;
    box-shadow: rgba(245, 115, 10, 0.3) 0px 0px 0px 3px;
    /* rgb(245,115,10) */
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

.paginator-div {
    margin-top: 50px;
    justify-content: center;
    cursor: pointer;
    color: whitesmoke;

}

.paginator-div>* {
    padding: 5px;
    margin: 10px;
    border-radius: 10px;
    width: 30px;
    box-shadow: rgba(245, 115, 10, 0.3) 0px 0px 0px 3px;

}

.link {
    width: 150px;
    background-color: rgb(232, 70, 70);
    display: inline-block;
    border-radius: 5px;
    padding: 5px;
    color: rgb(192, 184, 184);
    transition: 1s width ease-in-out;
}

.link:hover {
    background-color: rgb(245, 115, 10);
    transition: background-color 0.5s;
    color: white;
    width: 170px;
}
</style>