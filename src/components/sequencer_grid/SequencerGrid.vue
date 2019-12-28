<template>
  <div class="container">
    <app-audio-track :audio_file="require('@/assets/sounds/Kick Basic.wav')" track_name="Kick" />
    <app-audio-track :audio_file="require('@/assets/sounds/Snare Basic.wav')" track_name="Snare" />
    <app-audio-track :audio_file="require('@/assets/sounds/Hat Basic.wav')" track_name="Hi Hat" />
    <app-audio-track :audio_file="require('@/assets/sounds/CB_Clap.wav')" track_name="Clap" />
    <app-tick-tracker />
  </div>
</template>

<script>
import AudioTrack from "./AudioTrack";
import TickTracker from "./TickTracker";

export default {
  components: {
    appAudioTrack: AudioTrack,
    appTickTracker: TickTracker
  }
};
</script>