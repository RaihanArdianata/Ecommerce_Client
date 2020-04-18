<template>
  <!-- update product -->
  <div class="my-5">
    <h1>Update Product</h1>
    <form @submit.prevent="updateProduct">
      <div class="form-group">
        <label for="product_name">Product Name</label>
        <input type="text" class="form-control" id="product_name" v-model="filterProduct.product_name" required />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" rows="3" v-model="filterProduct.description" required></textarea>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="Quantity">Quantity</label>
          <input type="number" min="0" class="form-control" id="Quantity" v-model="filterProduct.qty" required />
        </div>
        <div class="form-group col-md-6">
          <label for="price">Price</label>
          <input type="number" min="1" class="form-control" id="price" v-model="filterProduct.price" required />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Category</label>
          <select id="inputState" class="form-control" v-model="filterProduct.Category" required>
            <option value="kaos">kaos</option>
            <option value="sepatu">sepatu</option>
            <option value="jaket">jaket</option>
            <option value="hoodie">hoodie</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <div class="">
          <label for="" class="">{{ filterProduct.image }}</label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Update Product</button>
    </form>
  </div>
  <!-- end update product -->
</template>

<script>
const baseUrl = 'http://localhost:3000'
export default {
  data: function () {
    return {
      updateImage: false,
      product_image: null,
      filterProduct: {
        id: null,
        Category: null,
        description: null,
        image: null,
        price: null,
        product_name: null,
        qty: null
      }
    }
  },
  props: ['id'],
  computed: {
    product: function () {
      return this.$store.state.product
    }
  },
  methods: {
    handleFileUpload: function () {
      this.this.product_image = this.$refs.file.files[0]
    },
    updateProduct: function () {
      // const formData = new FormData()
      // formData.append('product_image', this.product_image)
      // formData.append('product_name', this.filterProduct.product_name)
      // formData.append('description', this.filterProduct.description)
      // formData.append('price', this.filterProduct.description)
      // formData.append('quantity', this.filterProduct.qty)
      // formData.append('category', this.filterProduct.Category)
      // console.log(formData)
      this.axios({
        method: 'PATCH',
        url: baseUrl + '/product/' + this.id,
        data: {
          product_name: this.filterProduct.product_name,
          description: this.filterProduct.description,
          price: this.filterProduct.price,
          quantity: this.filterProduct.qty,
          category: this.filterProduct.Category
        },
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then((result) => {
          this.$store.dispatch('fetchProduct')
          this.$router.push({ name: 'allProduct' })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created: function () {
    this.filterProduct = this.product.find((datum) => {
      datum.id = this.id
      return datum
    })
  },
  handleFileUpload: function () {
    this.formData.product_image = this.$refs.file.files[0]
  }
}
</script>

<style>

</style>
