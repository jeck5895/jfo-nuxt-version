<template>
    <v-tabs v-model="active" color="" dark grow centered slider-color="blue">
        <v-tab ripple>
            WHAT'S IN IT FOR JOB SEEKERS ?
        </v-tab>
        <v-tab ripple>
            WHAT'S IN IT FOR EMPLOYERS ?
        </v-tab>
        <v-tab-item >
            <v-card flat>
                <v-card-media style="width: 1349px; height:383.44px">
                    <img src="https://jobfair-online.net/assets/images/Services_BannerJobseeker.png" alt="">
                </v-card-media>
            </v-card>
        </v-tab-item>
        <v-tab-item >
            <v-card flat>
                <v-card-media style="width: 1349px; height:383.44px">
                    <img src="https://jobfair-online.net/assets/images/Services_BannerRecruiter.png" alt="">
                </v-card-media>
            </v-card>
        </v-tab-item>
    </v-tabs>
    <!-- <v-tabs id="mobile-tabs-5" grow light centered>
        <v-tabs-bar light color="">
            <v-tabs-slider color="blue"></v-tabs-slider>
            <v-tabs-item href="#tab-1">
                <v-icon>phone</v-icon>
                WHAT'S IN IT FOR JOB SEEKERS ?
            </v-tabs-item>
            <v-tabs-item href="#tab-2">
                <v-icon>favorite</v-icon>
                WHAT'S IN IT FOR EMPLOYERS ?
            </v-tabs-item>

        </v-tabs-bar>
        <v-tabs-items>
            <v-tabs-content id="tab-1">
                <v-card flat>

                    <v-card-media style="width: 1349px; height:383.44px">
                        <img src="https://jobfair-online.net/assets/images/Services_BannerJobseeker.png" alt="">
                    </v-card-media>
                </v-card>
            </v-tabs-content>
            <v-tabs-content id="tab-2">
                <v-card flat>

                    <v-card-media style="width: 1349px; height:383.44px">
                        <img src="https://jobfair-online.net/assets/images/Services_BannerRecruiter.png" alt="">
                    </v-card-media>
                </v-card>
            </v-tabs-content>
        </v-tabs-items>
    </v-tabs> -->
</template>

<script>
    export default {
        data () {
            return {
                active:null,
                images: [
                    {
                        src: 'https://jobfair-online.net/assets/images/Services_BannerJobseeker.png',
                    },
                    {
                        src: 'https://jobfair-online.net/assets/images/Services_BannerRecruiter.png',
                    }
                ]
            }
        }
    }
</script>

<style>

</style>
