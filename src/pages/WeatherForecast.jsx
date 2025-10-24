import style from "./WeatherForecast.module.css";
import WeatherShortcut from "../features/WeatherShortcut";
import CurrentWeather from "../features/CurrentWeather";
const WeatherForecast = () => {
  return (
    <div className={style.mainContainer}>
      <CurrentWeather />
      <WeatherShortcut />
    </div>
  );
};

export default WeatherForecast;
