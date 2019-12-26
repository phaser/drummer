<template>
  <div class="container mb-2">
    <div class="row" style="margin-left: 90px;">
      <span
        class="badge badge-dark"
        style="width: 20px; height: 20px;"
        v-for="(item, index) in cell_status"
        :key="index"
        :ref="'cell' + index"
        v-html="icons.pdot"
      ></span>
    </div>
  </div>
</template>

<script>
import octicons from "@primer/octicons";

export default {
  data() {
    return {
      cell_status: [],
      icons: {
        pdot: octicons["dash"].toSVG({
          width: 12,
          height: 12,
          class: "mycontrol-white",
          "aria-label": "Play"
        })
      },
      prevTick: null
    };
  },
  methods: {
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
    showTick(tick) {
      if (this.prevTick != null) {
        if (this.$refs["cell" + this.prevTick][0] != undefined) {
          let ctcell = this.$refs["cell" + this.prevTick][0];
          ctcell.className = "badge badge-dark";
        }
      }
      this.prevTick = tick;
      let ctcell = this.$refs["cell" + tick][0];
      ctcell.className = "badge badge-warning";
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
      this.showTick(value);
    });
  }
};
</script>

<style>
.mycontrol-white {
  fill: white;
}
.mycontrol-yellow {
  fill: yellow;
}
</style>