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
                <a href>All Order</a>
              </li>
              <li class="nav-item py-2">
                <a href>All Product</a>
              </li>
              <li class="nav-item py-2">
                <a href>Add Product</a>
              </li>
              <li class="nav-item py-2">
                <a href>Add Category</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-10">
          <!-- table order -->
          <div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- end table order -->

          <!-- add product -->
          <div>
            <form>
              <div class="form-group">
                <label for="inputAddress">Product Name</label>
                <input type="text" class="form-control" id="Product" />
              </div>
              <div class="form-group">
                <label for="Description">Description</label>
                <textarea class="form-control" id="Description" rows="3"></textarea>
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="Quantity">Quantity</label>
                  <input type="number" class="form-control" id="Quantity" />
                </div>
                <div class="form-group col-md-6">
                  <label for="Price">Price</label>
                  <input type="text" class="form-control" id="Price" />
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
          </div>
          <!-- end add product -->
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
