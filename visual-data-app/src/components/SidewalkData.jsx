import React, { useState, useEffect } from "react";

import Loading from "./Loading";
import MyMap from "./MyMap";
import LoadSidewalkTask from "../tasks/LoadSidewalkTask";
import Legend from "./Legend";
import legendItems from "../entities/LegendItems";

const SidewalkData = () => {
  const [data, setData] = useState([]);

  const legendItemsReverse = [...legendItems].reverse();

  const load = () => {
    console.log("load");
    const loadSidewalkTask = new LoadSidewalkTask();
    loadSidewalkTask.load((data) => setData(data));
  };

  useEffect(load, []);

  return (
    <div>
      {data.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <MyMap data={data} />
          <Legend legendItems={legendItemsReverse} />
        </div>
      )}
    </div>
  );
};

export default SidewalkData;