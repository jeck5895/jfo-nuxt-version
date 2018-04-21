module.exports = {
  /*
  ** Headers of the page
  */
  css:[
      '~/assets/styles.css',
      '~/assets/animate.css',
	//   '~/assets/app.styl'
  ],
  head: {
    title: 'jobfair-online.net | Nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Vue SSR with Nuxt.js' }
	],
	script: [
		// {
		// 	src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
		// },
		// {
		// 	src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
		// 	integrity: 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
		// 	crossorigin: 'anonymous'
		// },
		// {
		// 	src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
		// 	integrity: 'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
		// 	crossorigin: 'anonymous'
		// }

	],
    link: [
		{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'},
		{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200' },
        {
            rel: 'stylesheet',
            href: 'https://use.fontawesome.com/releases/v5.0.6/css/all.css'
        },

	//   {
	//     rel: 'stylesheet',
	// 	href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
	// 	integrity: 'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',
	// 	crossorigin: 'anonymous'
	//   }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  	build: {
		vendor:[
			'axios',
			'vuetify'
		], //import axios globally
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins:[
	'~/plugins/vuetify.js'
  ],
}
