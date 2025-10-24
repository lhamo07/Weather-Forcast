import React, { useEffect, useState } from "react";
import style from "./FiveDayForecast.module.css";
const FiveDayForecast = ({ city }) => {
  const [forecastList, setForecastList] = useState([]);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
    import.meta.env.VITE_API_KEY
  }`;
  const getFiveDayForecast = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const uniqueDays = [];
      const filteredDays = data.list.filter((item) => {
        const day = new Date(item.dt * 1000).toLocaleDateString("en-US", {
          weekday: "short",
        });
        if (!uniqueDays.includes(day)) {
          uniqueDays.push(day);
          return true;
        }
        return false;
      });
      setForecastList(filteredDays.slice(1, 7)); // Limit to 5 days

      console.log(filteredDays);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFiveDayForecast();
  }, []);

  return (
    <div className={style.forecastContainer}>
      <h2 className={style.forecastTitle}>5-Day Forecast</h2>
      <div className={style.forecastRow}>
        {forecastList.map((forecast) => (
          <div key={forecast.dt} className={style.dayCard}>
            <p className={style.day}>
              {" "}
              {new Date(forecast.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
              })}
            </p>

            <img
              className={style.icon}
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather.description}
            />
            <p className={style.temp}>
              {(((forecast.main.temp - 273.15) * 9) / 5 + 32).toFixed(0)}°F
            </p>

            <p className={style.desc}>{forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FiveDayForecast;
