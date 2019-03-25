<template>
  <div class="col-10 feed-content">
    <loading
      :active.sync="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage"
    ></loading>
    <ul class="list-unstyled">
      <li class="media" v-for="(item, index) in items" :key="index">
        <img
          src="http://cdn.onlinewebfonts.com/svg/img_568657.png"
          class="mr-3 profile-pic"
          alt="..."
        >
        <div class="media-body">
          <h5 class="mt-0 mb-1 post-header">{{item.title}}</h5>
          <p class="post-body">{{item.postdata}}</p>
          <hr class>
          <FeedEvents/>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import FeedEvents from "./FeedEvents";
import { EventBus } from "../event-bus";

// import axios from "axios";
import Loading from "vue-loading-overlay";
// import { FEEDS } from "@/store/actions.type";
import JwtService from "@/common/jwt.service";
import ApiService from "@/common/api.service";
export default {
  components: {
    FeedEvents,
    Loading
  },
  data() {
    return {
      items: [],
      isLoading: false,
      fullPage: true
    };
  },
  created() {
    var that = this;
    EventBus.$on("feed_content_change", () => {
      that.getFeedContent();
    });
  },
  mounted() {
    this.getFeedContent();
  },
  methods: {
    getFeedContent() {
      var that = this;
      if (JwtService.getToken()) {
        ApiService.setHeader();
        ApiService.get("test/posts").then(
          function(data) {
            that.items = data.data.feeds;
          },
          function(err) {
            console.log(err);
          }
        );
      }
    },
    onCancel() {
      console.log("User cancelled the loader.");
    }
  }
};
</script>

<style lang="scss">
.profile-pic {
  height: 75px;
}
.post-body,
.post-header {
  text-align: left;
}
.fa {
  cursor: pointer;
}
</style>
