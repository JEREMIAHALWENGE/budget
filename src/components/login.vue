<template>
  <div class="container">
    <form @submit.prevent="login">
      <h2 class="mb-3">Login</h2>
      <div class="input">
        <label for="email">Emailaddress</label>
        <input
          class="form-control"
          type="email"
          name="email"
          id="emailaddress"
          placeholder="email@address.com"
          v-model="emailaddress"
          required
        />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          name="password"
          id="password"
          placeholder="password123"
          v-model="password"
          
        />
      </div>
      <div class="alternative-option mt-4">
        You don't have an account?
        <router-link to="/register">Register</router-link>
      </div>
      <button
        type="submit"
        class="mt-4 btn-pers"
        id="login_button"
        @click="login"
      >
        Login
      </button>
      <div
        class="alert alert-warning alert-dismissible fade show mt-5 d-none"
        role="alert"
        id="alert_1"
      ></div>
    </form>
  </div>
</template>



<script>
import axios from "axios"; // Import axios instead of using require   
import qs from "qs"; // Import qs module

export default {
  name: "login",
  data() {
    return {
      emailaddress: " ",
      password: " ",
      alertVisible: false,
    };
  },
  methods: {
    async login(e) {
      e.preventDefault();  

      // Use the qs.stringify method to serialize form data
      let data = qs.stringify({
        emailaddress: this.emailaddress,
        password: this.password,
      });

      let config = {
        method: "post",
        url: "http://localhost:3000/login", // Prefix URL with http://
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };
      try {
        const response = await axios(config); // Use axios for the request

        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.error("Error while logging in:", error);
        this.alertVisible = true;
      }
    },
  },
};
</script>

<style scoped>
#content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid lightgray;
  padding: 4rem 4rem;
  border-radius: 5px;
  background: #fefefe;
}

.background {
  width: 100vw;
  height: 100vh;
  position: absolute;
  background: rgb(250, 250, 250);
}

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

.nav {
  width: 80%;
  min-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: #fafafa;
}

#name_project {
  font-weight: 700;
}

.container {
  padding-block-start: 70px;
  width: 400px;
  max-width: 95%;
}

.input {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

.input > label {
  text-align: start;
}

.input > input {
  margin-top: 6px;
  height: 38px !important;
}

/* From uiverse.io */
.btn-pers {
  position: relative;
  left: 50%;
  padding: 1em 2.5em;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 700;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  transform: translateX(-50%);
}

.btn-pers:hover {
  background-color: #198754;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translate(-50%, -7px);
}

.btn-pers:active {
  transform: translate(-50%, -1px);
}

/*  */

.alternative-option {
  text-align: center;
}

.alternative-option > span {
  color: #0d6efd;
  cursor: pointer;
}

#sign_out {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>
