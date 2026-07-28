import React, { useEffect } from "react"
import { useState } from "react"
import axios from "axios";
import CurrentComp from "./components/CurrentComp";
import ForecastComp from "./components/ForecastComp";
import '../node_modules/bootstrap/dist/js/bootstrap';

function App() {

  const [city, setCity] = useState();
  const [citySuggestion, setCitySuggestion] = useState([]);
  const [citySelect, setCitySelect] = useState();
  const [currentWeather, setCurrentWeather] = useState();
  const [forecastWeather, setForecastWeather] = useState();
  const [location, setLocation] = useState();

  const autoURL = "https://api.weatherapi.com/v1/search.json?key=83c0b17cb2774eac95723527231501&q=";

  const weatherAPI = (city) => `https://api.weatherapi.com/v1/forecast.json?key=83c0b17cb2774eac95723527231501&q=${city}&days=7&aqi=no&alerts=no`;

  useEffect(() => {
    if (city && city.length > 3)
      fetchAPIURL();
  }, [city])

  const fetchAPIURL = async () => {
    try {
      const response = await axios.get(autoURL + city);
      const res = response.data;
  
      const cityData = res.map((data) => {
        return `${data.name},${data.region},${data.country}`;
      })
      setCitySuggestion(cityData);

    } catch (e) {
      console.log("Search Api error", e)
    }
  }

  const handleSelectCity = (city) => {
    setCitySelect(city);
    fetchWeatherAPIURL(city);
    setCitySuggestion([]);
  }

  const fetchWeatherAPIURL = async (city) => {
    try {
      const response = await axios.get(weatherAPI(city));
      const resp = response.data;
      setCurrentWeather(resp.current);
      setForecastWeather(resp.forecast);
      setLocation(resp.location);
    } catch (e) {
      console.log("Weather Api error", e)
    }
  }


  return (
    <>
     <div className="app-container">
       <h2 className="text-center text-white mt-4">Frost<span className="text-info">Cast</span></h2>
      <div className="container p-3 rounded">
        <input type="text" value={citySelect} className="form-control" id="glass-search"
          onChange={(e) => {
            setCity(e.target.value)
            if (e.target.value === "") {
              setCurrentWeather();
              setForecastWeather();
              setLocation();
              setCitySelect();
            }
          }} placeholder="Search your city...." />


        {citySuggestion && citySuggestion.map((city, index) => {
          return (
            <div key={index} className="text-center text-white bg-white rounded bg-opacity-10 border border-light border-opacity-10 " style={{ cursor: "pointer" }}
              onClick={() => handleSelectCity(city)}>
              {city}

            </div>
          );
        })}
        {currentWeather && <CurrentComp currentWeather={currentWeather} location={location} />}

        {forecastWeather && <ForecastComp forecastWeather={forecastWeather} location={location} />}
      </div>
     </div>
    </>
  )
}

export default App
