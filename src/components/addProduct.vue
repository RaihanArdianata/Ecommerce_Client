<template>
  <!-- add product -->
  <div class="my-5">
    <h1>Add Product</h1>
    <form @submit.prevent="addProduct">
      <div class="form-group">
        <label for="product_name">Product Name</label>
        <input type="text" class="form-control" id="product_name" v-model="formData.product_name" />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" rows="3" v-model="formData.description"></textarea>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
        <label for="Quantity">Quantity</label>
        <input type="number" class="form-control" id="Quantity" v-model="formData.quantity" />
        </div>
        <div class="form-group col-md-6">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" v-model="formData.price" />
        </div>
      </div>
      <div class="form-group">
        <div class="col">
        <label for="product_image" class="mx-2">Product Image :</label>
        <input type="file" id="file" ref="file" multiple v-on:change="handleFileUpload" />
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
        quantity: Number()
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
      this.axios({
        method: 'POST',
        url: baseUrl + '/product',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((result) => {
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
