<template>
  <div class="my-5">
    <div class="container-fluid d-flex flex-wrap justify-content-center align-items-center">
      <div class="card bg-light w-30 p-5">
        <h4 class="card-title">Account Login</h4>
        <form @submit.prevent="login()">
          <div class="form-group">
            <label for="Email">Email address</label>
            <input type="email" class="form-control" id="Email" aria-describedby="emailHelp" placeholder="Enter email" v-model="user.email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="Password">Password</label>
            <input type="password" class="form-control" id="Password" placeholder="Password" v-model="user.password">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
// import { mapActions } from 'vuex'
export default {
  data: function () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login: function () {
      this.$store.dispatch('login', {
        email: this.user.email,
        password: this.user.password
      })
        .then((result) => {
          localStorage.setItem('access_token', result.data.access_token)
          localStorage.setItem('level', result.data.level)
          this.$router.push({ name: 'dashboard' })
        })
        .catch((err) => {
          swal(err.response.data.message, {
            closeOnEsc: false,
            dangerMode: true
          })
          console.log(err.response.data.message)
        })
    }
  },
  create: {

  }
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@700&display=swap');
  div {
    font-family: 'Oxygen', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
