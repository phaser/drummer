<template>
  <div class="container">
    <audio :src="audio_file" ref="audio_tag"></audio>
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
      cell_status: {}
    };
  },
  methods: {
    play() {
      // this.$refs.audio_tag.play();
      // eslint-disable-next-line no-console
      console.log(this.$refs);
      this.$refs.cell10[0].className = "badge badge-primary";
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