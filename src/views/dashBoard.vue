<template>
  <div id="app">
    <!-- As a link -->
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
    </nav>
    <!-- main content -->
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 d-md-block sidebar mh-100">
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
          <router-view> </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style></style>
