<template>
  <div class="container mb-2">
    <audio :src="audio_file" ref="audio_tag0"></audio>
    <audio :src="audio_file" ref="audio_tag1"></audio>
    <audio :src="audio_file" ref="audio_tag2"></audio>
    <audio :src="audio_file" ref="audio_tag3"></audio>
    <div class="row">
      <span class="badge badge-success mr-1" style="height: 40px; width: 100px">
        <br />
        {{ track_name }}
      </span>
      <span
        :class="getClass(index)"
        style="min-width: 20px; min-height: 40px; cursor: pointer"
        v-for="(item, index) in cell_status"
        :key="index"
        :ref="index"
        @click="clickCell(index)"
        v-html="'&nbsp'"
      ></span>
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
    track_name: {
      type: String,
      default: "Track 1"
    }
  },
  data() {
    return {
      cell_status: []
    };
  },
  methods: {
    play(tick) {
      let auclip0 = this.$refs.audio_tag0;
      let auclip1 = this.$refs.audio_tag1;
      let auclip2 = this.$refs.audio_tag2;
      let auclip3 = this.$refs.audio_tag3;
      if (this.cell_status[tick].status == true) {
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
    },
    stop() {
      clearInterval(this.playInterval);
    },
    clickCell(cellRef) {
      // eslint-disable-next-line no-console
      console.log("cellRef: " + cellRef);
      this.cell_status[cellRef].status =
        this.cell_status[cellRef].status == true ? false : true;
      this.$refs[cellRef][0].className =
        this.cell_status[cellRef].status == true
          ? "badge badge-primary"
          : this.getClass(cellRef);
    },
    populateGrid(size) {
      // eslint-disable-next-line no-console
      console.log("populateGrid: " + size);
      this.cell_status = this.cell_status.splice(this.cell_status.length);
      for (let x = 0; x < size; x++) {
        this.cell_status.push({
          id: x,
          state: false
        });
      }
    },
    getClass(index) {
      // eslint-disable-next-line no-console
      console.log("index: " + index);
      return Math.floor(index / 4) % 2 == 0
        ? "badge badge-secondary"
        : "badge badge-dark";
    }
  },
  computed: {
    gridSize() {
      return this.$store.state.gridSize;
    }
  },
  watch: {
    gridSize(newVal) {
      this.populateGrid(newVal);
    }
  },
  created() {
    this.populateGrid(this.$store.getters.getGridSize);
    this.$root.$on("play_tick", value => {
      this.play(value);
    });

    // test with audio context per channel that can become a mixer
    let auclip0 = this.$refs.audio_tag0;
    let auclip1 = this.$refs.audio_tag1;
    let auclip2 = this.$refs.audio_tag2;
    let auclip3 = this.$refs.audio_tag3;
    const audioCtx = this.$store.getters.getAudioContext;
    audioCtx.createMediaElementSource(auclip0).connect(audioCtx.destination);
    audioCtx.createMediaElementSource(auclip1).connect(audioCtx.destination);
    audioCtx.createMediaElementSource(auclip2).connect(audioCtx.destination);
    audioCtx.createMediaElementSource(auclip3).connect(audioCtx.destination);
  }
};
</script>

<style scoped>
div {
  height: 40px;
  line-height: 40px;
}
</style>