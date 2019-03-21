<template>
  <div>
    <div class="btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-secondary btn-sm active" v-on:click="hitLike($event)">
        <input type="checkbox" checked autocomplete="off">
        Like
        <i class="fa fa-thumbs-up"></i>
      </label>
      <label class="btn btn-secondary btn-sm active" v-on:click="hitComment($event)">
        <input type="checkbox" checked autocomplete="off">
        Comment
        <i class="fa fa-comments"></i>
      </label>
      <label class="btn btn-secondary btn-sm active" v-on:click="hitShare($event)">
        <input type="checkbox" checked autocomplete="off">
        Share
        <i class="fa fa-share-square-o"></i>
      </label>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    hitLike(post) {
      if (post.target.children.length > 0) {
        post.target.children[1].classList.toggle("fa-thumbs-down");
      } else {
        post.target.classList.toggle("fa-thumbs-down");
      }
    },
    hitComment() {},
    hitShare() {}
  }
};
</script>
<style lang="scss">
.btn {
  border-radius: 15px;
  margin-right: 20px;
}
</style>

