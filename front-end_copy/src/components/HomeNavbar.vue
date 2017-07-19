<template>
  <div>
    <ul class="nav navbar-nav navbar-right">
      <li><a href="#about">ABOUT</a></li>
      <li><a href="#media">MEDIAS</a></li>
      <li><a href="#contact">CONTACT</a></li>
      <li @click = "signup()">
        <router-link to = "/signup">
          <span class="glyphicon glyphicon-user"></span>
          <span style="border:none">Sign Up</span>
        </router-link>
      </li>
      <li @click = "login()">
        <router-link to = "/login" >
          <span class="glyphicon glyphicon-log-in"></span>
          <span style="border:none">Login</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'homeNavbar',
    methods :{
      login() {
        this.$store.commit('switchView', 'ls');
      },
      signup() {
        this.$store.commit('switchView', 'ls');
      },
    }
  }
</script>

<style scoped>

  .navbar li a, .navbar .navbar-brand {
    color: #fff !important;
  }

  .navbar-nav li a:hover, .navbar-nav li.active a {
      color: #007ee5 !important;
      background-color: #fff !important;
  }

  .navbar-default .navbar-toggle {
      border-color: transparent;
      color: #fff !important;
  }
</style>