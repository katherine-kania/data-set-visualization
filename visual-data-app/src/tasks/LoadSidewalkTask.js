import * as topojson from "topojson-client"

class LoadSidewalkTask {
  load = (setState) => {
    setState(topojson);
  };
}

export default LoadSidewalkTask;
