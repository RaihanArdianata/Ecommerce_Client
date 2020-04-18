<template>
  <div id="app">
    <!-- As a link -->
    <nav class="navbar navbar-light bg-light shadow">
      <a class="navbar-brand" href="#">DashBoard</a>
      <a class="navbar-brand" href="#" @click="logout">Logout</a>
    </nav>
    <!-- main content -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 d-md-block sidebar mh-100 shadow">
          <div class="sidebar-sticky py-5">
            <ul class="nav flex-column">
              <li class="nav-item py-2">
                <router-link class="text-dark" to="/">All Order</router-link>
              </li>
              <li class="nav-item py-2">
                <router-link class="text-dark" to="/dashboard/allProduct"
                  >All Product</router-link
                >
              </li>
              <li class="nav-item py-2">
                <router-link class="text-dark" to="/dashboard/addProduct"
                  >Add Product</router-link
                >
              </li>
              <li class="nav-item py-2">
                <router-link class="text-dark" to="/">Add Status</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-10">
          <router-view > </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function () {
      localStorage.clear()
      this.$router.push('/')
    }
  },
  created: function () {
    if (!localStorage.access_token) {
      this.$router.push('/')
    } else {
      this.$store.dispatch('fetchProduct')
    }
  }
}
</script>

<style scoped>
.sidebar{
  background-color: #FAFBFA!important;
  min-height: 92vh;
}

li{
  padding: 10px;
  text-decoration: none;
}

li:hover{
  background-color: #eee!important;
}
</style>
