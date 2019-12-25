<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-xs-24 col-sm-16 col-sm-offset-4 col-md-12 col-md-offset-6">
        <app-playback-controls width="24" height="24" />
        <app-sequencer-grid />
      </div>
    </div>
  </div>
</template>

<script>
import PlaybackControls from "@/components/PlaybackControls.vue";
import SequencerGrid from "@/components/sequencer_grid/SequencerGrid.vue";

export default {
  name: "app",
  components: {
    appPlaybackControls: PlaybackControls,
    appSequencerGrid: SequencerGrid
  }
};
</script>

<style>
</style>
