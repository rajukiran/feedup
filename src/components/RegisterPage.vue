<template>
  <div>
    <div class="alert alert-danger" role="alert" v-if="showError.status">{{showError.message}}</div>
    <form id="form_login" v-on:submit.prevent="onSubmit">
      <h1>Register</h1>
      <p>
        <input
          type="text"
          name="login"
          value
          placeholder="First Name"
          class="form-control"
          id="login"
          maxlength="80"
          size="30"
          v-model="user.firstName"
        >
      </p>
      <p>
        <input
          type="text"
          name="login"
          value
          placeholder="Last Name"
          class="form-control"
          id="login"
          maxlength="80"
          size="30"
          v-model="user.lastName"
        >
      </p>
      <p>
        <input
          type="text"
          name="login"
          value
          placeholder="Username"
          class="form-control"
          id="login"
          maxlength="80"
          size="30"
          v-model="user.username"
        >
      </p>
      <p>
        <input
          type="password"
          name="password"
          value
          placeholder="Password"
          class="form-control"
          id="password"
          size="30"
          v-model="user.password"
        >
      </p>
      <!-- <p> -->
      <div class="form-group">
        <button class="btn btn-lg btn-primary pull-xs-right">Sign up</button>
        <router-link to="/login" class="btn btn-link">Cancel</router-link>
      </div>
      <!-- </p> -->
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { REGISTER } from "@/store/actions.type";
// import FeedService from "../services/feed-service.js";

export default {
  name: "register",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        username: "",
        password: ""
      },
      url: "http://localhost:8080/api/auth/signup",
      status: {
        registering: false
      },
      showError: {
        status: false,
        message: ""
      },
      submitted: false
    };
  },
  methods: {
    // register: function() {
    //   var that = this;
    //   this.user.roles = ["user"];
    //   FeedService.userRegistration(this.url, this.user).then(
    //     function(response) {
    //       console.log(response);
    //     },
    //     function(err) {
    //       that.showError.status = true;
    //       that.showError.message = err.response.data;
    //     }
    //   );
    // },
    onSubmit() {
      this.user.roles = ["user"];
      this.$store
        .dispatch(REGISTER, this.user)
        .then(() => this.$router.push({ name: "home" }));
    }
  }
};
</script>
<style>
label {
  text-align: left;
}
</style>
