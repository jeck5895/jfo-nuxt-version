<template>
	<div>
		<v-app>
			<home></home>
		</v-app>
	</div>  
</template>

<script>

import Home from '~/components/home/index.vue';

export default {
	layout:'default',
  	components: {
    	Home,
	
  	}
}
</script>

<style>
/* .container {
  
} */
</style>
