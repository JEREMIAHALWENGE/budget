<template>
  <div class="container">
    <form @submit.prevent="register">
      <h2 class="mb-3">Register</h2>
      <div class="input">
        <label for="email">Firstname</label>
        <input
          class="form-control"
          v-model="firstname"
          type="text"
          placeholder="firstname"
        />
      </div>
      <div class="input">
        <label for="email">Lastname</label>
        <input
          class="form-control"
          v-model="lastname"
          type="text"
          placeholder="Your Lastname..."
        />
      </div>
      <div class="input">
        <label for="email">Contact</label>
        <input
          class="form-control"
          v-model="contact"
          type="text"
          placeholder="Eg; 0710512811"
        />
      </div>
      <div class="input">
        <label for="email">Address</label>
        <input
          class="form-control"
          v-model="address"
          type="text"
          placeholder="Eg;1000101"
        />
      </div>
      <div class="input">
        <label for="email">Email address</label>
        <input
          class="form-control"
          v-model="emailaddress"
          type="text"
          name="email"
          placeholder="email@adress.com"
        />
      </div>

      <div class="input">
        <label for="password">Password</label>
        <input
          class="form-control"
          v-model="password"
          type="password"
          name="password"
          placeholder="password123"
        />
      </div>

      <div class="alternative-option mt-4">
        Already have an account? <router-link to="/login">Login</router-link>
      </div>

      <button type="submit" id="register_button" class="mt-4 btn-pers">
        Register
      </button>
      <div
        class="alert alert-warning alert-dismissible fade show mt-5"
        role="alert"
        v-if="alertVisible"
      >
        Registration failed. Please try again.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
          @click="alertVisible = false"
        ></button>
      </div>
    </form>
  </div>
</template>


<script>
import axios from "axios"; // Import axios instead of using require
import qs from "qs"; // Import qs module

export default {
  name: "register",
  data() {
    return {
      firstname: "",
      lastname: "",
      contact: "",
      address: "",
      emailaddress: "",
      password: "",
      alertVisible: false,
    };
  },
  methods: {
    async register(e) {
      e.preventDefault();

      let data = qs.stringify({
        firstname: this.firstname,
        lastname: this.lastname,
        contact: this.contact,
        address: this.address,
        emailaddress: this.emailaddress,
        password: this.password,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:3000/register",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };
      try {
        const response = await axios(config); // Use axios for the request

        console.log(JSON.stringify(response.data));
      } catch (error) {
        console.error("Error while registering user:", error);
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