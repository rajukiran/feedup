<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a 
      class="navbar-brand" 
      href="#/"
      v-on:click="setActive('home')"
      :class="{ active: isActive('home') }">
      <img class="app-logo" src="../assets/feed-up.png">
    </a>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a
            class="nav-link"
            href="#/"
            v-on:click="setActive('home')"
            :class="{ active: isActive('home') }"
          >
            Home
            <span class="sr-only">(current)</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="#/about"
            v-on:click="setActive('about')"
            :class="{ active: isActive('about') }"
          >About</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0" v-if="!currentUser.username">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#/login"
              v-on:click="setActive('signin')"
              :class="{ active: isActive('signin') }"
            >
              Sign In
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#/register"
              v-on:click="setActive('signup')"
              :class="{ active: isActive('register') }"
            >Register</a>
          </li>
        </ul>
      </form>
      <form class="form-inline my-2 my-lg-0" v-if="currentUser.username">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" v-on:click="logout()">Logout</a>
          </li>
        </ul>
      </form>
    </div>
  </nav>
</template>
<style>
.app-logo {
  height: 25px;
}
</style>
<script>
import { mapGetters } from "vuex";
import { LOGOUT } from "@/store/actions.type";
export default {
  data() {
    return {
      activeItem: "home"
    };
  },
  methods: {
    isActive: function(menuItem) {
      return this.activeItem === menuItem;
    },
    setActive: function(menuItem) {
      this.activeItem = menuItem; // no need for Vue.set()
    },
    logout: function() {
      this.$store.dispatch(LOGOUT).then(() => {
        this.$router.push({ name: "home" });
      });
    }
  },
  mounted() {
    // this.isAuthenticated = localStorage.getItem("isAuthenticated");
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }
};
</script>

