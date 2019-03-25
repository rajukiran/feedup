<template>
  <div>
    <div class="alert alert-danger" role="alert" v-if="showError.status">{{showError.data}}</div>

    <form id="form_login" v-on:submit.prevent="onSubmit(username, password);">
      <label for="validationServer03">Login</label>
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="validationServer03"
          placeholder="Username"
          v-model="username"
          required
        >
      </div>
      <div class="form-group">
        <input
          type="password"
          class="form-control"
          id="validationServer03"
          placeholder="Password"
          v-model="password"
          required
        >
      </div>
      <!-- <div class="form-group" v-if="loginValidation.status">
        <div class="alert alert-danger" role="alert">Please enter username/password</div>
      </div>-->
      <button class="btn btn-lg btn-primary pull-xs-right">Sign in</button>
    </form>
  </div>
</template>

<script>
import router from "vue-router";
import { LOGIN } from "@/store/actions.type";
export default {
  data() {
    return {
      showError: {
        status: false,
        data: ""
      },
      loginValidation: {
        status: false
      },
      submitted: false,
      status: {
        loggingIn: false
      },
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(email, password) {
      this.$store
        .dispatch(LOGIN, {
          username: email,
          password: password
        })
        // .then(
        //   function(res) {
        //     this.$router.push({ name: "home" });
        //   },
        //   function(err) {
        //     alert(err.response.data);
        //   }
        // );
        .then(() => this.$router.push({ name: "home" }))
        .catch(err => {
          if (err.response.status === 404) {
            alert(err.response.data);
          } else {
            alert(err.response.data.reason);
          }
        });
    }
  }
};
</script>
<style lang="scss">
#form_login {
  left: 50%;
  top: 50%;
  position: absolute;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -moz-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  border: 1px solid #cccccc;
  border-radius: 10px;
  padding: 50px 20px 50px 20px;
}
</style>
