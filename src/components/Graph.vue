<template>
  <div class="col-md-9 panel panel-default">
    <hierarchical-edge-bundling
      class="graph1"
      ref="graph"
      identifier="id"
      :data="tree"
      :links="links"
      node-text="name"
      @mouseNodeOver="mouseNodeOver"
      @mouseNodeOut="mouseNodeOut"
    />
  </div>
</template>

<script>
import { hierarchicalEdgeBundling } from "vued3tree";
import data from "../data.json";
import { links } from "../links";

const graphData = {
  loading: false,
  highlightedNode: null,
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
      outName: "is more expensive than"
    }
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
    onEvent(eventName, data) {
      console.log(eventName, data);
    },
    mouseNodeOver(event) {
      this.onEvent("mouseNodeOver", event);
      this.changeCurrent(event.element);
    },
    mouseNodeOut() {
      this.changeCurrent(null);
    },
  },
  watch: {
    highlightedNode(value) {
      this.$refs["graph"].highlightedNode = value;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
.graph1 {
  height: 91vh;
  width: 99vw;
}
.graph1>svg>g>g {
  stroke: #c2def8f6;
}
.graph1>svg>g>g>text {
  font-family: 'Montserrat', sans-serif !important;
  font-weight: 100 !important;
  font-size: 13px !important;
}
.graph1>svg>g>g.node--source {
  stroke: #bfe7c4f8;
}
.graph1>svg>g>g.node--target {
  stroke: #e4b5b5f8;
}
.graph1>svg>g>g.node--selected {
  stroke: #c7d5e2ee
}
</style>