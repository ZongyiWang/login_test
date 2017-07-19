<!-- src/components/Home.vue -->
<template>
  <div class="container-fluid col-sm-6 col-sm-offset-3">
    <form class="form-signip">
        <h2 class="form-signin-heading">Please Sign Up</h2><br>
        <div>
          <label for="inputName" class="sr-only">Full Name</label>
          <input type="text" id="inputName" class="form-control" placeholder="Full Name" required autofocus v-model = "fullname">
        </div><br>
        <div>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus v-model = "email">
        </div><br>
        <div>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model = "password">
        </div><br>
        <button class="btn btn-lg btn-primary btn-block" type="submit" @click = "submit()">Sign up</button>
      </form>
  </div>

</template>

<script>
  export default {
    name: 'signup',
    data () {
      return{
        fullname: '',
        email: '',
        password: '',
      }
    },
    methods: {
      submit() {
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>
  .container-fluid {
      padding: 60px 50px;
  }
</style>