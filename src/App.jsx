import { Routes, Route } from "react-router";
import WeatherForecast from "./pages/WeatherForecast";
import Header from "./shared/Header";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<WeatherForecast />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
