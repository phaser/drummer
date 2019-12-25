<template>
  <div class="container">
    <div class="row">
      <div class="btn-group col-2" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary mycontrol" v-html="icons.play" @click="play"></button>
        <button type="button" class="btn btn-secondary" v-html="icons.stop" @click="stop"></button>
        <button type="button" class="btn btn-secondary" v-html="icons.pause" @click="pause"></button>
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
          v-model="bpm"
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
          v-model="gridSize"
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
      },
      playInterval: null,
      isPaused: false
    };
  },
  computed: {
    bpm: {
      get() {
        return this.$store.getters.getBpm;
      },
      set(value) {
        this.$store.commit("setBpm", value);
      }
    },
    gridSize: {
      get() {
        return this.$store.getters.getGridSize;
      },
      set(value) {
        this.$store.commit("setGridSize", value);
      }
    }
  },
  methods: {
    play() {
      this.isPaused = false;
      if (this.playInterval != null) {
        clearInterval(this.playInterval);
      }
      let bpm = this.bpm / 60;
      let tick = 0;
      let interval = 1.0 / bpm;
      let gridSize = this.$store.getters.getGridSize;
      this.playInterval = setInterval(() => {
        // eslint-disable-next-line no-console
        console.log("Tick: " + tick);
        if (!this.isPaused) {
          this.$root.$emit("play_tick", tick);
          tick++;
          tick = tick % gridSize;
        }
      }, interval * 1000);
    },
    stop() {
      if (this.playInterval == null) {
        return;
      }
      clearInterval(this.playInterval);
      this.playInterval = null;
    },
    pause() {
      this.isPaused = !this.isPaused;
    }
  }
};
</script>

<style>
.mycontrol {
  fill: white;
}
</style>