import React, { useState, useEffect } from "react";
import axios from "axios";
import LineChart from "./LineChart";

const App = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    axios.get("/data.json").then(response => {
      const data = response.data;
      setWeatherData(data);
    });
  }, []);

  return (
    <div className="container">
      <LineChart
        chartData={weatherData}
        chartTitle={"Average temperature for London"}
      />
    </div>
  );
};

export default App;
