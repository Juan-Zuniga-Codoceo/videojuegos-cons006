<!--<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
        </nav>
    </div>
</template>-->
<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <i class="fas fa-home"></i>
      <router-link to="/" class="nav-link">Home</router-link>
    </div>
  </nav>
</template>
<script>
export default {
    name: 'nav-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    //watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.navbar {
  background: rgba(255, 255, 255, 0.5); /* Valor de transparencia: 0.8 */
  justify-content: flex-end;
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.nav-link {
  color: #000;
  text-decoration: none;
}

.page-content {
  margin-top: 60px; 
  
}
</style>