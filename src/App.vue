<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
import '@fortawesome/fontawesome-free/css/all.css'

  export default {
    name: 'nav-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    //watch: {},
    components: {
      "navigation": Nav
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
  }
</script>
<style>
body{
  background-image: url("@/assets/ps.jpg");
  background-size: cover;
  background-repeat: repeat;
  background-position: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
