<template>
  <div class="container">
    <div class="row">
      <div class="btn-group col-2" role="group" aria-label="Basic example">
        <button
          type="button"
          class="btn btn-secondary mycontrol"
          v-html="icons.play"
          @click="$emit('controls event', 'play')"
        ></button>
        <button
          type="button"
          class="btn btn-secondary"
          v-html="icons.stop"
          @click="$emit('controls event', 'stop')"
        ></button>
        <button
          type="button"
          class="btn btn-secondary"
          v-html="icons.pause"
          @click="$emit('controls event', 'pause')"
        ></button>
      </div>
      <div class="input-group col-2 mb-3">
        <div class="input-group-prepend input-group-prepend-sm">
          <span class="input-group-text" id="basic-addon1">BPM</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="130"
          aria-label="Beats per minute"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group col-2 mb-3">
        <div class="input-group-prepend input-group-prepend-sm">
          <span class="input-group-text" id="basic-addon1">Grid size</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="32"
          aria-label="Beats per minute"
          aria-describedby="basic-addon1"
        />
      </div>
    </div>
  </div>
</template>

<script>
import octicons from "@primer/octicons";

export default {
  props: {
    width: {
      type: String,
      default: "32"
    },
    height: {
      type: String,
      default: "32"
    }
  },
  data() {
    return {
      icons: {
        play: octicons["triangle-right"].toSVG({
          width: this.width,
          height: this.height,
          class: "mycontrol",
          "aria-label": "Play"
        }),
        stop: octicons["primitive-square"].toSVG({
          width: this.width,
          height: this.height,
          class: "mycontrol"
        }),
        pause: octicons["primitive-dot-stroke"].toSVG({
          width: this.width,
          height: this.height,
          class: "mycontrol"
        })
      }
    };
  }
};
</script>

<style>
.mycontrol {
  fill: white;
}
</style>