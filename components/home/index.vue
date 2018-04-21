<template>
    <div v-scroll="onScroll">
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
        },
        data () {
            return {
                offset : 0
            }
        },
        computed : {
            prevEl () {
                return this.$store.getters.getPrevEl;
            },
            options () {
                return this.$store.getters.getOptions;
            },
        },
        methods: {
            onScroll (e) {
                this.offset = window.pageYOffset || document.documentElement.scrollTop
                // console.log(this.offset);
                // console.log("SCROLL")
                // console.log(this.prevEl)
                // if(this.offset < 681){
                //     var el = document.getElementsByClassName('navbar-link-home')[0];
                //     console.log(el.children[0])
                //     if(this.prevEl != null){
                //         console.log(this.prevEl)
                //         this.prevEl.classList.remove('btn--active')
                //     }
                //     el.classList.add('btn--active');
                //     this.$store.commit('clearPrevEl');
                //     this.$store.commit('setPrevEl', el.children[0]);
                // }
            //     if(this.offset >= 681 && this.offset < 1335) {
            //         var el = document.getElementsByClassName('navbar-link-partners')[0];
            //         if(this.prevEl != null){
            //             this.prevEl.classList.remove('btn--active')
            //         }
            //         el.classList.add('btn--active');
            //         this.$store.commit('clearPrevEl');
            //         this.$store.commit('setPrevEl', el.children[0]);
            //     }
            //     if(this.offset >= 1335 && this.offset < 2052) {
            //         var el = document.getElementsByClassName('navbar-link-about')[0];
            //         if(this.prevEl != null){
            //             this.prevEl.classList.remove('btn--active')
            //         }
            //         el.classList.add('btn--active');
            //         this.$store.commit('clearPrevEl');
            //         this.$store.commit('setPrevEl', el.children[0]);
            //     }
            //     if(this.offset >= 2053) {
            //         var el = document.getElementsByClassName('navbar-link-about')[0];
            //         if(this.prevEl != null){
            //             this.prevEl.classList.remove('btn--active')
            //         }
            //         el.classList.add('btn--active');
            //         this.$store.commit('clearPrevEl');
            //         this.$store.commit('setPrevEl', el.children[0]);
            //     }
            }
        }
    }
</script>

<style>

</style>
