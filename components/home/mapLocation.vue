<template>
    <v-container style="margin-top:5rem;">
        <v-layout row wrap>
            <v-flex xs12>
                <h1 class="text-center header-1">KNOW MORE ABOUT US</h1>
                <ul class="list-unstyled mt-3">
                    <li> <v-icon color="light-blue">email</v-icon> jobfair-onlineph@gmail.com</li>
                    <li> <v-icon color="light-blue">local_phone</v-icon> (63)923-456-7890</li>
                    <li> <v-icon color="light-blue">location_on</v-icon> G/F First Capitol Place 1st Street corner Phil-Am Street, Kapitolyo, Pasig, 1603 Metro Manila, Philippines</li>
                </ul>
            </v-flex>

            <v-flex xs12 class="mt-3">
                <iframe src="https://www.google.com/maps/embed/v1/place?q=G%2FF+First+Capitol+Place+Bldg.+1st+St.+cor.+Phil-Am+St.+Brgy.+Kapitolyo%2C+Pasig+City+1603&key=AIzaSyCq4vWNv6eCGe2uvhPRGWQlv80IQp8dwTE" name="iframe_a" frameBorder="0" scrolling="no"></iframe>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

}
</script>

<style>
    iframe {
		height: 300px;
		width: 100%;
	}
	.list-group-item.contact:hover{
		background-color: white;
		border-color: #00a65a;
		color: black;
	}
</style>
