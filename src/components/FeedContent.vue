<template>
  <div class="feed-content">
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
import feed_data from "../assets/sample-data/feedcontent.json";
export default {
  components: {
    FeedEvents
  },
  data() {
    return {
      items: feed_data
    };
  },
  methods: {}
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
