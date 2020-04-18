<template>
  <div>
    <!-- <h1>ini Lofgin</h1> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  created: function () {
    if (localStorage.access_token) {
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>

</style>
