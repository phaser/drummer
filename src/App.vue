<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <app-playback-controls width="45" height="45" />
      </div>
    </div>
  </div>
</template>

<script>
import PlaybackControls from "@/components/PlaybackControls.vue";

export default {
  name: "app",
  components: {
    appPlaybackControls: PlaybackControls
  }
};
</script>

<style>
</style>
