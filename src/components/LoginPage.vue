<template>
  <form id="form_login">
    <h1>Login</h1>
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
      >
    </p>
    <div class="checkbox">
      <label>
        <input type="checkbox"> Remember me
      </label>
    </div>
    <p>
      <button class="btn btn-primary" :disabled="status.registering">Login</button>
    </p>
  </form>
</template>

<script>
// import { mapState, mapActions } from 'vuex'
export default {
  //   name: "login",
  data() {
    return {
      username: "",
      password: "",
      submitted: false,
      status: {
        loggingIn: false
      }
    };
  }
  // computed: {
  //     ...mapState('account', ['status'])
  // },
  // created () {
  //     // reset login status
  //     this.logout();
  // },
  // methods: {
  //     ...mapActions('account', ['login', 'logout']),
  //     handleSubmit (e) {
  //         this.submitted = true;
  //         const { username, password } = this;
  //         if (username && password) {
  //             this.login({ username, password })
  //         }
  //     }
  // }
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
