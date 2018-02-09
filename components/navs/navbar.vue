<template>
    <v-toolbar fixed dark color="blue">
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title class="white--text">
            <img src="https://jobfair-online.net/assets/images/app/jfo_logo_white.png" alt="">
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn active-class href="#home" class="navbar-link" flat>HOME</v-btn>
            <v-btn class="navbar-link" flat>SEARCH JOBS</v-btn>
            <v-btn active-class href="#partners" class="navbar-link" flat>PARTNERS</v-btn>
            <v-btn active-class href="#about-us" class="navbar-link" flat>ABOUT US</v-btn>
            <v-btn active-class href="#contact-us" class="navbar-link" flat>CONTACT US</v-btn>
            <v-btn class="navbar-link" flat>SIGN-UP</v-btn>
            <v-btn class="navbar-link" flat>SIGN-IN</v-btn>
        </v-toolbar-items>
        <v-toolbar-items class="hidden-sm hidden-md-and-up">
            <v-btn  href="#home" icon>
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
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
    export default {

    }
</script>

<style>

</style>
