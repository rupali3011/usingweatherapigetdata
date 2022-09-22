import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [city, setcity] = useState("pune");
  const [data, setdata] = useState([]);
  async function Getcitydata() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a58f753ae8e13d5b3e5c2b0143e1dbe`;
    const res = await fetch(url);
    const dt = await res.json();
    console.log(dt.wind.speed);
    const temp = dt.main.temp;
    const pressure = dt.main.pressure;
    const humidity = dt.main.humidity;
    const Searcheddata = {
      temp,
      pressure,
      humidity
    };
    setdata(Searcheddata);
  }
  function Citydata(e) {
    setcity(e.target.value);
  }
  useEffect(() => {
    Getcitydata();
  });
  return (
    <div className="App">
      <input type="text" value={city} onChange={Citydata} />
      <button onClick={Getcitydata}> get data</button>
      <h3>
        {data.temp},{data.pressure},{data.humidity}
      </h3>
    </div>
  );
}
