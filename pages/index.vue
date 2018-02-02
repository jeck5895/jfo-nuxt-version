<template>
  <section class="container">
	  <home></home>
    
  </section>
</template>

<script>

import Home from '~/components/home/index.vue'

export default {
  	components: {
    //AppLogo,
    	Home
  	}
}
</script>

<style>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
