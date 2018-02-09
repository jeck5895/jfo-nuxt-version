<template>
    <div>
        <div id="home" ref="home"></div>
        <search-section></search-section>
        <carousel></carousel>
        <div id="partners" ref="partners"></div>
        <partners></partners>
        <div id="about-us" ref="about-us"></div>
        <about-us></about-us>,
        <home-tabs></home-tabs>
        <div id="contact-us" ref="contact-us"></div>
        <map-location></map-location>
        <main-footer></main-footer>
    </div>
</template>

<script>
    import SearchSection from '~/components/home/searchSection.vue';
    import Carousel from '~/components/home/carousel.vue';
    import Partners from '~/components/home/partners.vue';
    import AboutUs from '~/components/home/aboutus.vue';
    import HomeTabs from '~/components/home/homeTabs.vue';
    import MapLocation from '~/components/home/mapLocation.vue';
    import MainFooter from '~/components/home/mainFooter.vue';

    export default {
        components: {
            SearchSection,
            Carousel,
            Partners,
            AboutUs,
            HomeTabs,
            MapLocation,
            MainFooter,
        }
    }
</script>

<style>

</style>
