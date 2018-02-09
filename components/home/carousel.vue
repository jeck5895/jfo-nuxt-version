<template>

    <v-carousel lazy delimiter-icon="stop">
        <v-carousel-item v-for="(item,i) in items" v-bind:src="item.src" :key="i"></v-carousel-item>
    </v-carousel>

</template>

<script>
export default {
    data() {
        return {
            items: [
                {
                    src: require('~/static/images/carousel/1.png')
                },
                {
                    src: require('~/static/images/carousel/2.png')
                },
                {
                    src: require('~/static/images/carousel/3.png')
                },
            ]
        }
    }
}
</script>

<style>

</style>
