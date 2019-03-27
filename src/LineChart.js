import React from "react";
import PropTypes from "prop-types";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line
} from "recharts";

const titleStyle = {
  display: "flex",
  justifyContent: "center"
};

const Chart = props => {
  return (
    <div>
      <div style={titleStyle}>
        <div className="header">
          <h2>{props.chartTitle}</h2>
        </div>
      </div>
      <LineChart
        width={730}
        height={450}
        data={props.chartData}
        margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="data">
          <Legend value="Average temperature for London" />
        </XAxis>
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

Chart.propTyes = {
  chartTitle: PropTypes.string.isRequired,
  chartData: PropTypes.shape({
    data: PropTypes.string,
    template: PropTypes.number
  }).isRequired
};

export default Chart;
