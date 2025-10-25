import React, { useState } from "react";
import TextInputWithLabel from "../shared/TextInputWithLabel";
import style from "./CurrentWeather.module.css";
import FiveDayForcast from "./FiveDayForecast";
import { v4 as uuidv4 } from "uuid";

const CurrentWeather = () => {
  const [city, setCity] = useState("New York");
  const [date, setDate] = useState("");
  const [temp, setTemp] = useState("");
  const [weatherDesc, setWeatherDesc] = useState("");
  const [icon, setIcon] = useState("");
  const [humidity, setHumidity] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
    import.meta.env.VITE_API_KEY
  }`;

  const getCurrentWeather = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      if (!res.ok) {
        alert(data.message);
        setLoading(false);
        return;
      }
      const dateTime = new Date(data.dt * 1000);
      setDate(dateTime.toDateString());
      setTemp((((data.main.temp - 273.15) * 9) / 5 + 32).toFixed(0));
      setWeatherDesc(data.weather[0].main);
      setIcon(
        `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
      );
      setHumidity(data.main.humidity);
      setFeelsLike((((data.main.feels_like - 273.15) * 9) / 5 + 32).toFixed(0));

      const cityWeatherData = {
        id: uuidv4(),
        name: data.name,
        temp: data.main.temp,
        weatherMain: data.weather[0].main,
        icon: data.weather[0].icon,
        timestamp: data.dt,
      };
      const storedHistory =
        JSON.parse(localStorage.getItem("weatherHistory")) || [];
      const newHistory = [...storedHistory, cityWeatherData];
      localStorage.setItem("weatherHistory", JSON.stringify(newHistory));
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <div className={style.mainContainer}>
        <form onSubmit={getCurrentWeather} className={style.searchForm}>
          <TextInputWithLabel
            placeholder="Search city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button
            type="submit"
            className={style.searchBtn}
            disabled={!city.trim()}
          >
            Search
          </button>
        </form>

        <div className={style.weatherMain}>
          {loading ? (
            <p className={style.loading}>Fetching weather...</p>
          ) : temp ? (
            <>
              {" "}
              <div className={style.weatherInfo}>
                <span className={style.date}>{date}</span>
                <h2 className={style.temp}>{temp}&deg;F</h2>
                <p>Feels Like {feelsLike}&deg;F</p>
                <p>Humidity {humidity}%</p>
              </div>
              <div className={style.weatherImg}>
                {icon && <img src={icon} alt="weather icon" />}
                <p className={style.desc}>{weatherDesc}</p>
              </div>
            </>
          ) : null}
        </div>
      </div>{" "}
      <FiveDayForcast city={city} />
    </>
  );
};

export default CurrentWeather;
