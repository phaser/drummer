<template>
  <div class="container">
    <audio :src="audio_file" ref="audio_tag0"></audio>
    <audio :src="audio_file" ref="audio_tag1"></audio>
    <audio :src="audio_file" ref="audio_tag2"></audio>
    <audio :src="audio_file" ref="audio_tag3"></audio>
    <div class="row">
      <span class="badge badge-success" style="height: 40px; width: 100px">
        <br />
        {{ track_name }}
      </span>
      <span
        class="badge badge-secondary"
        style="width: 20px; height: 40px; cursor: pointer"
        v-for="item in num_cells"
        :key="item"
        :ref="'cell' + item"
        @click="clickCell('cell' + item)"
      >o</span>
    </div>
    <div class="row">
      <button class="btn btn-primary" @click="play">Play</button>
      <button class="btn btn-primary" @click="stop">Stop</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    audio_file: {
      type: String,
      default: require("@/assets/sounds/CB_Clap.wav")
    },
    grid_length: {
      type: Number,
      default: 32
    },
    track_name: {
      type: String,
      default: "Track 1"
    }
  },
  data() {
    return {
      cell_status: {},
      playInterval: null
    };
  },
  methods: {
    play() {
      // this.$refs.audio_tag.play();
      // eslint-disable-next-line no-console
      console.log(this.$refs);
      let bpm = 400 / 60;
      let tick = 0;
      let interval = 1.0 / bpm;
      let auclip0 = this.$refs.audio_tag0;
      let auclip1 = this.$refs.audio_tag1;
      let auclip2 = this.$refs.audio_tag2;
      let auclip3 = this.$refs.audio_tag3;
      this.playInterval = setInterval(() => {
        // eslint-disable-next-line no-console
        console.log("Tick: " + tick);

        if (this.cell_status["cell" + tick] == true) {
          if (!(auclip0.duration > 0 && !auclip0.paused)) {
            auclip0.play();
          } else if (!(auclip1.duration > 0 && !auclip1.paused)) {
            auclip1.play();
          } else if (!(auclip2.duration > 0 && !auclip2.paused)) {
            auclip2.play();
          } else if (!(auclip3.duration > 0 && !auclip3.paused)) {
            auclip3.play();
          }
        }
        tick++;
        tick = tick % this.grid_length;
      }, interval * 1000);
      // eslint-disable-next-line no-console
      console.log("Interval: " + interval);
    },
    stop() {
      clearInterval(this.playInterval);
    },
    clickCell(cellRef) {
      this.cell_status[cellRef] =
        this.cell_status[cellRef] == true ? false : true;
      this.$refs[cellRef][0].className =
        this.cell_status[cellRef] == true
          ? "badge badge-primary"
          : "badge badge-secondary";
    }
  },
  computed: {
    num_cells() {
      return [...Array(this.grid_length).keys()];
    }
  }
};
</script>

<style scoped>
div {
  height: 40px;
  line-height: 40px;
}
</style>