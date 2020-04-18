<template>

  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Product Name</th>
          <th scope="col">Description</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-for="(item, index) in product" :key="index">
          <tr class="" style="">
            <td scope="row" class="">{{index + 1}}</td>
            <td class="w-25">
              <img
                :src="'http://localhost:3000/' + item.image"
                class="img-fluid img-thumbnail "
              />
            </td>
            <td class="">{{ item.product_name }}</td>
            <td class="">{{item.description}}</td>
            <td class="">{{item.price}}</td>
            <td class="">{{item.qty}}</td>
            <td class="icon-action">
              <router-link :to="{ name: 'updateProduct', params: {id: item.id} }" >
                <svg style="cursor:pointer;color: black!importnat;" class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                  <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z" clip-rule="evenodd"/>
                  <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z" clip-rule="evenodd"/>
                </svg>
              </router-link>
              <svg @click="deleteProduct(item.id)" style="cursor:pointer" class="bi bi-x" width="1.5em" height="1.5em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
              </svg>
            </td>
          </tr>
      </tbody>
    </table>
  </div>

</template>

<script>
export default {
  computed: {
    product: function () {
      return this.$store.state.product
    }
  },
  methods: {
    deleteProduct: function (id) {
      this.axios({
        method: 'DELETE',
        url: 'http://localhost:3000/product/' + id,
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((result) => {
          this.$store.dispatch('fetchProduct')
        })
        .catch((err) => {
          console.log(err.response)
        })
    }
  }
}
</script>

<style scoped>
table td{
  vertical-align: 0 !important;
}

table tr{
  border-bottom: 2px solid #f8f9fa ;
}
table .icon-action{
  /* vertical-align: top !important; */
}
hr{
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.icon-action a{
  color: black;
}
</style>
