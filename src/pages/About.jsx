import React from "react";
import style from "./About.module.css"; // optional CSS module

export const About = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>About Weather App</h1>

      <p className={style.description}>
        The Weather App provides accurate, up-to-date weather information for
        cities around the world. Whether you’re planning your day, traveling, or
        just curious about the weather, this app helps you stay informed.
      </p>

      <h2 className={style.subtitle}>Features</h2>
      <ul className={style.features}>
        <li>
          Current Weather: Real-time temperature, humidity, feels-like, and
          weather conditions.
        </li>
        <li>
          5-Day Forecast: Plan ahead with detailed forecasts for the next 5
          days.
        </li>
        <li> Search History: Quickly revisit previously searched cities.</li>
      </ul>

      <h2 className={style.subtitle}>How It Works</h2>
      <p className={style.description}>
        The app uses the OpenWeatherMap API to fetch live weather data. Your
        searches are saved in your browser for quick access. Built with React,
        it provides a smooth and interactive experience for users.
      </p>

      <p className={style.note}>
        Stay updated with your local weather or explore cities around the world.
        Your weather, your way!
      </p>
    </div>
  );
};
