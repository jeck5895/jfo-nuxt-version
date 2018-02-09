<template>
  <v-container style="margin-top:5rem;">
        <h1 class="text-center header-1">OUR TRUSTED PARTNERS</h1>
        <v-container grid-list-md class="grey lighten-4 grid-container">
            <v-layout class="row wrap">
                <v-flex xs12 md3 v-for="(card, index) in cards" :key="index">
                    <v-card>
                        <v-card-media style="">
                            <img class="img-responsive img-center" :src="card.src" alt="">
                        </v-card-media>
                        <v-card-title primary-title>
                        <div class="text-truncate">
                            <h5 class="headline mb-0">{{ card.title }}</h5>
                            <div>{{ card.description }}</div>
                        </div>
                        </v-card-title>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-container>
</template>

<script>
  export default {
    data() {
      return {
        cards: [{
            src: require('~/static/images/grids/1.png'),
            title: 'Service Resources Inc.',
            description: 'Established in August 1979, our company continues to be one of the leading manpower service companies in the country. With clients in many local and multinational corporations for various job levels, our steady guiding principle is to serve our client firms in their manpower outsourcing needs as efficiently and economically as possible consistent with all existing laws and regulations. Our success throughout these years demonstrates the soundness of our goals.'
            },
            {
                src: require('~/static/images/grids/2.png'),
                title: 'Service Resources Inc.',
                description: 'Established in August 1979, our company continues to be one of the leading manpower service companies in the country. With clients in many local and multinational corporations for various job levels, our steady guiding principle is to serve our client firms in their manpower outsourcing needs as efficiently and economically as possible consistent with all existing laws and regulations. Our success throughout these years demonstrates the soundness of our goals.',
            },
            {
                src: require('~/static/images/grids/3.png'),
                title: 'Service Resources Inc.',
                description: 'Established in August 1979, our company continues to be one of the leading manpower service companies in the country. With clients in many local and multinational corporations for various job levels, our steady guiding principle is to serve our client firms in their manpower outsourcing needs as efficiently and economically as possible consistent with all existing laws and regulations. Our success throughout these years demonstrates the soundness of our goals.'
            },
            {
                src: require('~/static/images/grids/4.png'),
                title: 'Service Resources Inc.',
                description: 'Established in August 1979, our company continues to be one of the leading manpower service companies in the country. With clients in many local and multinational corporations for various job levels, our steady guiding principle is to serve our client firms in their manpower outsourcing needs as efficiently and economically as possible consistent with all existing laws and regulations. Our success throughout these years demonstrates the soundness of our goals.'
            },
            {
                src: require('~/static/images/grids/5.png'),
                title: 'Service Resources Inc.',
                description: 'Established in August 1979, our company continues to be one of the leading manpower service companies in the country. With clients in many local and multinational corporations for various job levels, our steady guiding principle is to serve our client firms in their manpower outsourcing needs as efficiently and economically as possible consistent with all existing laws and regulations. Our success throughout these years demonstrates the soundness of our goals.'
            },
            {
                src: require('~/static/images/grids/5.png'),
                title: 'Service Resources Inc.',
                description: 'Established in August 1979, our company continues to be one of the leading manpower service companies in the country. With clients in many local and multinational corporations for various job levels, our steady guiding principle is to serve our client firms in their manpower outsourcing needs as efficiently and economically as possible consistent with all existing laws and regulations. Our success throughout these years demonstrates the soundness of our goals.'
            },
            {
                src: require('~/static/images/grids/5.png'),
                title: 'Service Resources Inc.',
                description: 'Established in August 1979, our company continues to be one of the leading manpower service companies in the country. With clients in many local and multinational corporations for various job levels, our steady guiding principle is to serve our client firms in their manpower outsourcing needs as efficiently and economically as possible consistent with all existing laws and regulations. Our success throughout these years demonstrates the soundness of our goals.'
            },
            {
                src: require('~/static/images/grids/5.png'),
                title: 'Service Resources Inc.',
                description: 'Established in August 1979, our company continues to be one of the leading manpower service companies in the country. With clients in many local and multinational corporations for various job levels, our steady guiding principle is to serve our client firms in their manpower outsourcing needs as efficiently and economically as possible consistent with all existing laws and regulations. Our success throughout these years demonstrates the soundness of our goals.'
            },
        ]
      }
    }
  }

</script>

<style>


</style>
