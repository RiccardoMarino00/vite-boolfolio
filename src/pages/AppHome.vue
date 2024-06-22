<template>
    <section class="welcome-section">
        <div class="name-container">
            <p>Riccardo <br> Marino</p>
        </div>
        <div class="description-container">
            <p class="description">I'm a junior Web Developer.
                Passionate about the world of tech, more specifically UI and with a desire to improve, I currently
                finished the course with Boolean which gave me a good foundation on various languages including CSS,
                Javascript, Bootstrap, Vue, PHP and Laravel, giving me a complete panaromaica on the world of web
                development.
            </p>
        </div>
        <div class="empty">

        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style>
.paragraph {
    width: 700px;
}

/* .name-container {
    position: relative;
} */

.welcome-section {
    position: relative;
}

.name-container:nth-child(1) {
    position: absolute;
    top: 154px;
    right: 95px;
    font-size: 50px;
    color: white;
    font-weight: 800;
}

.description-container {
    color: white;
}

.description {
    position: absolute;
    top: 300px;
    left: 60px;
    font-size: 25px;
    width: 550px;
    line-height: 35px;

}

.empty {
    width: 242px;
    height: 50px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    position: absolute;
    top: 80px;
    left: 280px;

}
</style>