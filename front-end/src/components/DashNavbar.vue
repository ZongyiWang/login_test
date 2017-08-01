<template>
  <div>    
    <ul class="nav navbar-nav navbar-right">
      <li id="dash-usernm">Welcome, {{user}}</li>     
      <li>
        <a :href="url">GraphQL</a>
      </li>

      <li @click = "logout()">
        <router-link to = "/">
          <span class="glyphicon glyphicon-log-out"></span>
          <span style="border:none" >Log Out</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'dashNavbar',
    methods:{
      logout() {
        this.$http.get('http://localhost:3000/logout');
        this.$store.commit('switchLoggin', false);
        this.$store.commit('changeUsername', null);
        this.$store.commit('switchView', 'home');
      }
    },
    data(){
	return{
    user: this.$store.state.username,
		url:'http://' + window.location.hostname + ':3000'
		}
	},
  }
</script>

<style scoped>
  .navbar {
    font-size: 15px ;
    border: 0;
    margin-bottom: 2px;
    letter-spacing: 2px;
    background-color: #171E26;
    line-height: 1.42857143 !important;

  }

  .navbar li a, .navbar .navbar-brand {
    color: #fff !important;
  }
  .nav #dash-usernm{
    color: #ffa;
    font-size:15px;
    margin-top:13px;
    margin-right:16px;
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
