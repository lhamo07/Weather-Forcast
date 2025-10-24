import { Routes, Route } from "react-router";
import WeatherForecast from "./pages/WeatherForecast";
import Header from "./shared/Header";
import { NotFound } from "./pages/NotFound";
import "./index.css";
import WeatherShortcut from "./features/WeatherShortcut";
import { About } from "./pages/About";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WeatherForecast />} />
        <Route path="/about" element={<About />} />

        <Route path="/*" element={<NotFound />} />
        <Route path="/quick-access-weather" element={<WeatherShortcut />} />
      </Routes>
    </>
  );
}

export default App;
