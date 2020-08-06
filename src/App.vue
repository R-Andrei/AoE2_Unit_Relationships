<template>
  <div id="app">
    <div class="title">
      <span>[Military] [Land] Unit Relationships</span>
    </div>
    <Graph />
    <div class="legend">
      <div class="sub-legend strong">
        <div class="relationship" />
        <span>possible advantage</span>
      </div>
      <div class="sub-legend weak">
        <div class="relationship" />
        <span>disadvantage</span>
      </div>
      <div class="sub-legend default">
        <div class="relationship" />
        <span>neutral interaction</span>
      </div>
    </div>
  </div>
</template>

<script>
// import Graph from "./components/Common.vue";
import Graph from "./components/Unique.vue";

export default {
  name: "App",
  components: {
    Graph,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");
body {
  margin: 0;
  margin-top: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #141414;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 1px solid #ffffff40;
  margin: 0;
  padding: 0;
  position: relative;
  font-family: "Montserrat", sans-serif !important;
}
#app > .title {
  position: absolute;
  color: #c2def8cc !important;
  top: 10px;
  left: 10px;
  font-size: 20px !important;
}
#app > .legend {
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid #ffffff30;
  padding: 5px 10px;
}
#app > .legend > .sub-legend {
  padding: 2px;
  display: flex;
  align-items: center;
}
#app > .legend > .sub-legend > .relationship {
  width: 15px;
  height: 15px;
  border: 1px solid #ffffff40;
  border-radius: 50%;
  margin-right: 8px;
}
#app > .legend > .sub-legend.strong > .relationship {
  background-color: #76f687bb !important;
}
#app > .legend > .sub-legend.weak > .relationship {
  background-color: #fb6666bb !important;
}
#app > .legend > .sub-legend.default > .relationship {
  background-color: #242729bb !important;
}

#app > .legend > .sub-legend > span {
  color: #c2def8cc !important;
  font-weight: 200;
  font-size: 13px;
}

.graph.detailed .link {
  stroke-opacity: .1;
  stroke: #242729 !important;
}

.graph .link {

  transition: all 0.3s ease-in-out;

  stroke: #45b4ff60 !important;
}
.graph .link.link--target {
  stroke: #7bff8d69 !important;
}
.graph .link.link--source {
  stroke: #ff676769 !important;
}
</style>
