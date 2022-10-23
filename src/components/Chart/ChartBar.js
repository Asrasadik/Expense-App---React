import React, { useState } from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  let chartFill = "0%";

  if (props.maxValue > 0) {
    //maxValue is 0 for month which doesn't have any expenses
    chartFill = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: chartFill }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
