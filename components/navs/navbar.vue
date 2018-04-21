<template>
    <v-toolbar fixed dark color="blue">
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title class="white--text">
            <img src="https://jobfair-online.net/assets/images/app/jfo_logo_white.png" alt="">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn @click="goTo($event, '#home')" class="navbar-link navbar-link-home" flat>HOME</v-btn>
            <v-btn class="navbar-link" flat>SEARCH JOBS</v-btn>
            <v-btn @click="goTo($event, '#partners')" class="navbar-link navbar-link-partners" flat>PARTNERS</v-btn>
            <v-btn @click="goTo($event, '#about-us')" class="navbar-link navbar-link-about" flat>ABOUT US</v-btn>
            <v-btn @click="goTo($event, '#contact-us')" class="navbar-link navbar-link-contact" flat>CONTACT US</v-btn>
            <v-btn class="navbar-link" flat>SIGN-UP</v-btn>
            <v-btn class="navbar-link" flat>SIGN-IN</v-btn>
            <!-- <v-btn href="#home" class="navbar-link" flat>HOME</v-btn>
            <v-btn class="navbar-link" flat>SEARCH JOBS</v-btn>
            <v-btn href="#partners" class="navbar-link" flat>PARTNERS</v-btn>
            <v-btn href="#about-us" class="navbar-link" flat>ABOUT US</v-btn>
            <v-btn href="#contact-us" class="navbar-link" flat>CONTACT US</v-btn>
            <v-btn class="navbar-link" flat>SIGN-UP</v-btn>
            <v-btn class="navbar-link" flat>SIGN-IN</v-btn> -->
        </v-toolbar-items>
        <v-toolbar-items class="hidden-sm hidden-md-and-up">
            <v-btn ref="homelink" @click="$vuetify.goTo('#home', options)" icon>
                <v-icon>home</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn ref="partnerslink"  @click="$vuetify.goTo('#partners', options)" icon>
                <v-icon>fas fa-briefcase</v-icon>
            </v-btn>
            <v-btn ref="aboutlink" @click="$vuetify.goTo('#about-us', options)" icon>
                <v-icon>fas fa-info-circle</v-icon>
            </v-btn>
            <v-btn ref="contactlink"  @click="$vuetify.goTo('#contact-us', options)" icon>
                <v-icon>local_phone</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>fas fa-user-plus</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>fas fa-sign-in-alt</v-icon>
            </v-btn>
            <!-- <v-btn  href="#home" icon>
                <v-icon>home</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn  href="#partners" icon>
                <v-icon>fas fa-briefcase</v-icon>
            </v-btn>
            <v-btn  href="#about-us" icon>
                <v-icon>fas fa-info-circle</v-icon>
            </v-btn>
            <v-btn  href="#contact-us" icon>
                <v-icon>local_phone</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>fas fa-user-plus</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>fas fa-sign-in-alt</v-icon>
            </v-btn> -->
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        computed: {
            prevEl () {
                return this.$store.getters.getPrevEl;
            },
            options () {
                return this.$store.getters.getOptions;
            }
        },
        methods: {
            goTo(e, target) {
                console.log(this.prevEl)
                if(this.prevEl != null){
                    console.log( this.prevEl)
                    if(this.prevEl.has){
                        this.prevEl.target.offsetParent.classList.remove('btn--active')
                    }
                    else{
                        this.prevEl.classList.remove('btn--active')
                    }
                }
                e.target.offsetParent.classList.add('btn--active')
                this.$vuetify.goTo(target, this.options)
                this.$store.commit('clearPrevEl');
                this.$store.commit('setPrevEl', e.target.offsetParent);//this.prevEl = e;
            }
        }
    }
</script>

<style>

</style>
