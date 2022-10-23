import React, { useState } from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //calculate maxValue
  const valueArr = props.dataPoints.map((dp) => dp.value);
  const valueArrMax = Math.max(...valueArr);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={valueArrMax}
        />
      ))}
    </div>
  );
};
export default Chart;
