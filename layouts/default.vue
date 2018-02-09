<template>
  <div>
    <nav-bar></nav-bar>
        <nuxt/>
  </div>
</template>

<script>
  import NavBar from "~/components/navs/navbar.vue";
//   import Footer from "~/components/home/footer.vue";
  export default {
  components: {
    NavBar,
    // Footer,
  }
}
</script>


<style>

</style>
