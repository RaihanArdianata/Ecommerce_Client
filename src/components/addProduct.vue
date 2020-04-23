<template>
  <!-- add product -->
  <div class="my-5">
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="product_name">Product Name</label>
        <input type="text" class="form-control" id="product_name" v-model="formData.product_name" required />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" rows="3" v-model="formData.description" required></textarea>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="Quantity">Quantity</label>
          <input type="number" min="0" class="form-control" id="Quantity" v-model="formData.quantity" required />
        </div>
        <div class="form-group col-md-6">
          <label for="price">Price</label>
          <input type="number" min="1" class="form-control" id="price" v-model="formData.price" required />
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Category</label>
          <select id="inputState" class="form-control" v-model="formData.category" required>
            <option value="cloat">Cloat</option>
            <option value="pants">Pants</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <div class="col">
        <label for="product_image" class="mx-2">Product Image :</label>
        <input type="file" id="file" ref="file" multiple v-on:change="handleFileUpload" required />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Add Product</button>
    </form>
  </div>
  <!-- end add product -->
</template>

<script>
const baseUrl = 'http://localhost:3000'
export default {
  data: function () {
    return {
      formData: {
        product_name: '',
        product_image: '',
        description: '',
        price: Number(),
        quantity: Number(),
        category: null
      }
    }
  },
  methods: {

    addProduct: function () {
      // console.log(this.formData.product_image)
      const formData = new FormData()
      formData.append('product_image', this.formData.product_image)
      formData.append('product_name', this.formData.product_name)
      formData.append('description', this.formData.description)
      formData.append('price', this.formData.price)
      formData.append('quantity', this.formData.quantity)
      formData.append('category', this.formData.category)
      console.log(formData)
      this.axios({
        method: 'POST',
        url: baseUrl + '/product',
        data: formData,
        headers: {
          access_token: localStorage.access_token,
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((result) => {
          this.$store.dispatch('fetchProduct')
          this.$router.push({ name: 'allProduct' })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    handleFileUpload: function () {
      this.formData.product_image = this.$refs.file.files[0]
    }

  }
}
</script>

<style>
</style>
