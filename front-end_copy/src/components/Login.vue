<!-- src/components/Home.vue -->

<template>
  <div class="container-fluid col-sm-6 col-sm-offset-3">
    <form class="form-signin">
        <h2 class="form-signin-heading">Please Log In</h2><br>
        <div>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model = "emailVal">
        </div><br>
        <div>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model = "passwordVal">
        </div><br>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click = "submit()">Sign in</button>
      </form>
  </div>

</template>

<script>
  import { EventBus } from './../main.js';

  export default {
    name: 'login',
    data () {
      return{
        emailVal: '',
        passwordVal: '',
      }
    },
    methods: {
      submit() {
        this.$store.commit('switchView', 'dash');

        this.$router.push('/dashboard');
      }
    }
  }
</script>

<style scoped>
  .container-fluid {
      padding: 60px 50px;
  }
</style>