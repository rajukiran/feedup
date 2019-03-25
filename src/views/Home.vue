<template>
  <div class="container-fluid">
    <div class="row">
      <LeftPanel/>
      <div class="col-8 bg-light feed-content">
        <form v-on:submit.prevent="postFeed(title, postMessage)">
          <label for="validationServer03">Post Feed</label>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="validationServer03"
              placeholder="Title"
              v-model="title"
            >
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              id="validationServer03"
              rows="3"
              placeholder="Message"
              v-model="postMessage"
            ></textarea>
          </div>
          <button class="btn btn-lg btn-primary pull-xs-right">Feed Up</button>
        </form>
        <FeedContent/>
      </div>
      <RightPanel/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import FeedContent from "../components/FeedContent";
import JwtService from "@/common/jwt.service";
import ApiService from "@/common/api.service";
export default {
  name: "home",
  components: {
    LeftPanel,
    RightPanel,
    FeedContent
  },
  data() {
    return {
      title: '',
      postMessage: ''
    };
  },
  methods: {
    // var that = this;
    // this.isAuthenticated = localStorage.getItem("isAuthenticated");
    // if (this.isAuthenticated) {
    //   that.$router.push("/dashboard");
    // }
    postFeed(title, message) {
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.post("test/post", {
          title: title,
          postdata: message
        })
          .then(function(data) {
              // that.items = data.data.feeds;
              console.log(data);
            })
          .catch(({
            response
          }) => {
            console.log(response);
          });
      } else {
        this.$router.push({ name: "login" });
      }
    }
  }
};
</script>
