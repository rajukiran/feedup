<template>
  <!-- <div class="col-1">1 of 3</div> -->
  <ul class="list-group list-group-flush left-panel" id="list-tab" role="tablist">
    <li v-on:click="activeTab($event)" class="list-group-item list-group-item-action" data-toggle="list" href="#list-h1" role="tab" aria-controls="h1">Cras justo odio</li>
    <li v-on:click="activeTab($event)" class="list-group-item list-group-item-action" data-toggle="list" href="#list-h2" role="tab" aria-controls="h2">Dapibus ac facilisis in</li>
    <li v-on:click="activeTab($event)" class="list-group-item list-group-item-action" data-toggle="list" href="#list-h3" role="tab" aria-controls="h3">Morbi leo risus</li>
    <li v-on:click="activeTab($event)" class="list-group-item list-group-item-action" data-toggle="list" href="#list-h4" role="tab" aria-controls="h4">Porta ac consectetur ac</li>
    <li v-on:click="activeTab($event)" class="list-group-item list-group-item-action" data-toggle="list" href="#list-h5" role="tab" aria-controls="h5">Vestibulum at eros</li>
  </ul>
</template>
<script>
export default {
  methods: {
    activeTab(event) {
      console.log(event);
    }
  }
}
</script>

<style lang="scss">
.left-panel {
  text-align: left;
  font-size: small;
  li {
    cursor: pointer;
  }
}
</style>
