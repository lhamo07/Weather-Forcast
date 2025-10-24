import React from "react";
import style from "./FiveDayForecast.module.css";
const WeatherShortcut = () => {
  const history = JSON.parse(localStorage.getItem("weatherHistory")) || [];
  return (
    <div className={style.forecastContainer}>
      <h2 className={style.forecastTitle}>Weather Search History</h2>
      <div className={style.forecastRow}>
        {history.map((forecast) => (
          <div key={forecast.id} className={style.dayCard}>
            <span className={style.date}>
              {new Date(forecast.timestamp * 1000).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </span>

            <p className={style.day}>{forecast.name}</p>

            <img
              className={style.icon}
              src={`https://openweathermap.org/img/wn/${forecast.icon}@2x.png`}
              alt={"Weather icon"}
            />
            <p className={style.temp}>
              {(((forecast.temp - 273.15) * 9) / 5 + 32).toFixed(0)}°F
            </p>

            <p className={style.desc}>{forecast.weatherMain}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherShortcut;
