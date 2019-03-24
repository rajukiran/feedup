<template>
  <div class="container">
    <div class="row">
      <LeftPanel/>
      <div class="col-10 bg-light feed-content">
        <form>
          <label for="validationServer03">Post Feed</label>
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="validationServer03"
              placeholder="Title"
              required
            >
          </div>
          <div class="form-group">
            <textarea
              class="form-control"
              id="validationServer03"
              rows="3"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <input type="button" class="btn btn-primary btnSeccion" id="btnSeccion3" value="Feed Up">
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
export default {
  name: "home",
  components: {
    LeftPanel,
    RightPanel,
    FeedContent
  },
  data() {
    return {
      isAuthenticated: false
    };
  },
  mounted() {
    var that = this;
    this.isAuthenticated = localStorage.getItem("isAuthenticated");
    if (this.isAuthenticated) {
      that.$router.push("/dashboard");
    }
  }
};
</script>
