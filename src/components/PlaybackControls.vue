<template>
  <div>
    <div class="btn-group" role="group" aria-label="Basic example">
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