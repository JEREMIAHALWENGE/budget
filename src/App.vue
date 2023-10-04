<template>
  <div>
    <!--navbar-->
    <div class="header">
      <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">BUDGET</a>
         
            <form class="d-inline-flex" style="width: 500px">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex"></form>
            <!--togglebutton-->
            <div class="toggle-button">
              <router-link to="/" class="btn btn-link mx-2"> Home</router-link>
              <router-link to="/login" class="btn btn-link mx-2"
                >Login</router-link
              >
              <router-link to="/register" class="btn btn-link mx-2"
                >Register</router-link
              >
              <router-link to="/about" class="btn btn-link mx-2"
                >About-us</router-link
              >
            </div>
          </div>
        </div>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
</script>


<style scoped>
.navbar {
  background: #fafafa;
  position: absolute;
  top: 0;
  width: 100vw;
  height: 70px;
  box-shadow: 6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
    22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
    100px 100px 80px rgba(0, 0, 0, 0.07);
}
.toggle-button {
  padding-block-start: 10px;
}
</style>
