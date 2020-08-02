<template>
  <div class="interactive-graph-data">
    <div class="relationships">
      <div class="count total">
        <span class="description">Total relationships:</span>
        <span class="data">{{count}}</span>
      </div>
      <div class="count strong">
        <span class="description">Strong against:</span>
        <span class="data">{{strongCount}}</span>
      </div>
      <div class="count weak">
        <span class="description">Weak against:</span>
        <span class="data">{{weakCount}}</span>
      </div>
      <div class="unit selected">
        <span class="description">Selected unit:</span>
        <span class="data">{{selectedUnit}}</span>
      </div>
    </div>
    <hierarchical-edge-bundling
      class="graph1"
      ref="graph"
      identifier="id"
      :data="tree"
      :links="links"
      node-text="name"
      @mouseNodeOver="mouseNodeOver"
      @mouseNodeOut="mouseNodeOut"
      :margin-x="marginX"
      :margin-y="marginY"
    />
  </div>
</template>

<script>
import { hierarchicalEdgeBundling } from "vued3tree";
import alldata from "../data.json";
import { links } from "../links";

const count = links.length;

const data = alldata.common;

const graphData = {
  loading: false,
  highlightedNode: null,
  marginX: 25,
  marginY: 80,
  tree: data,
  links: links,
  linkTypes: [
    {
      id: 1,
      name: "counters",
      inName: "is countered by",
      outName: "counters",
    },
    {
      id: 2,
      name: "cost",
      inName: "is cheaper than",
      outName: "is more expensive than",
    },
  ],
};

export default {
  components: {
    hierarchicalEdgeBundling,
  },
  data() {
    return graphData;
  },
  methods: {
    changeCurrent(value) {
      this.loading = true;
      window.setTimeout(() => {
        this.highlightedNode = value;
        this.loading = false;
      });
    },
    mouseNodeOver(event) {
      this.changeCurrent(event.element);

      const id = event.element._id;
      const subFamily = Math.floor(id / 100);

      const strongCount = links.filter((link) => link.target === id).length;
      const weakCount = links.filter((link) => link.source === id).length;

      const unit = data.children
        .find((child) => child.id === subFamily)
        .children.find((child) => child.id === id).name;

      this.updateCount(strongCount, weakCount);
      this.updateActiveUnit(unit);
    },
    mouseNodeOut() {
      this.changeCurrent(null);
      this.updateCount();
      this.updateActiveUnit();
    },
    updateCount(strongCount = 0, weakCount = 0) {
      this.$store.commit("updateProperty", {
        name: "strongCount",
        value: strongCount,
      });
      this.$store.commit("updateProperty", {
        name: "weakCount",
        value: weakCount,
      });
    },
    updateActiveUnit(unit = null) {
      this.$store.commit("updateProperty", { name: "activeUnit", value: unit });
    },
  },
  watch: {
    highlightedNode(value) {
      this.$refs["graph"].highlightedNode = value;
    },
  },
  computed: {
    count() {
      return count;
    },
    strongCount() {
      return this.$store.state.strongCount;
    },
    weakCount() {
      return this.$store.state.weakCount;
    },
    selectedUnit() {
      return this.$store.state.activeUnit
        ? this.$store.state.activeUnit
        : "None";
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap");
.graph1 {
  height: 97vh;
  width: 99vw;
}
.graph1 > svg > g > g {
  stroke: #c2def8f6 !important;
}
.graph1 > svg > g > g > text {
  font-family: "Montserrat", sans-serif !important;
  font-weight: 100 !important;
  font-size: 13px !important;
  transition: all 0.1s ease-in-out !important;
  cursor: pointer;
}
.graph1 > svg > g > g.node--source {
  stroke: #bfe7c4f8 !important;
}
.graph1 > svg > g > g.node--target {
  stroke: #e4b5b5f8 !important;
}
.graph1 > svg > g > g.node--selected {
  stroke: #c7d5e2ee !important;
}
.interactive-graph-data {
  position: relative;
}
.interactive-graph-data > .relationships {
  position: absolute;
  border: 1px solid #ffffff30 !important;
  top: 70px;
  left: 10px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
}
.interactive-graph-data > .relationships > .count,
.interactive-graph-data > .relationships > .unit {
  text-align: left;
  color: #c2def8cc !important;
  font-size: 14px;
  padding: 2px;
}
.interactive-graph-data > .relationships > .count > .data,
.interactive-graph-data > .relationships > .unit > .data {
  margin-left: 5px;
  color: #c2def8f6 !important;
  font-weight: bold;
}
</style>