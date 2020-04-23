<template>
  <div id="app">
    <!-- main content -->
    <router-view>
    </router-view>
  </div>
</template>

<script>
// const baseUrl = 'http://localhost:3000'
export default {
  mounted () {
    const root = this.myprop
    this.$router.push({ path: root, query: { name: 'admin' } })
  }
}
</script>

<style>
</style>
