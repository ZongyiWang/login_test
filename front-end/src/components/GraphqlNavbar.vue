<template>
  <div>    
    <ul class="nav navbar-nav navbar-right">
      <li id="dash-usernm">
          <span class="glyphicon glyphicon-user"></span>
          <span style="border:none">Welcome, {{user}}</span>
      </li>     
      <li @click = "toDashboard()">
        <router-link to = "/dashboard">Dashboard</router-link>
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
    name: 'graphqlNavbar',
    methods:{
      logout() {
        this.$http.get('http://localhost:3000/logout').then(()=>{
          this.$store.commit('switchLoggin', false);
          this.$store.commit('changeUsername', null);
          this.$store.commit('switchView', 'home');
        });
      },
      toDashboard() {
        if (this.$store.state.currentLoggin){
          this.$store.commit('switchView', 'dash');
          this.$router.push('/dashboard');        
        }
        else{
          this.$store.commit('switchView', 'ls');
          this.$router.push('/login');
        }
      },
    },
    data(){
	    return{
        user: this.$store.state.username,
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
