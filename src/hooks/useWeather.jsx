import { useCallback, useEffect, useState } from "react";
import { UseGeolocation } from "./useGeolocation";

const roundDown = (num) => Math.floor(num);
const convertToCelsius = (k) => k - 272.15;
const formatTime = (ts, opts = {}) =>
  new Date(ts * 1000).toLocaleString("en-US", opts);

export const UseWeatherData = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { userLocation } = UseGeolocation();

  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const isCityFound = weatherData?.code !== 404;

  const fetchWeather = useCallback(async () => {
    try {
      const hourOpts = { hour: "numeric", minute: "numeric" };
      const dateOpts = { weekday: "long", day: "numeric", month: "short" };

      // prettier-ignore
      const url = `${baseUrl}/weather?q=${query}&appid=${apiKey}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "404") {
        setWeatherData((pData) => ({
          ...pData,
          errMsg: data.message,
          code: 404,
        }));
        setQuery("");
        return;
      }

      const appData = {
        location: data.name,
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        weather: data.weather[0].main,
        date: formatTime(data.dt, dateOpts),
        sunset: formatTime(data.sys.sunset, hourOpts),
        sunrise: formatTime(data.sys.sunrise, hourOpts),
        temp: roundDown(convertToCelsius(data.main.temp)),
        time: formatTime(data.dt, { ...hourOpts, hourCycle: "h23" }),
      };

      setWeatherData(appData);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, [query]);

  const removeOnTimeOut = useCallback(() => {
    const DELAY_TIME = 5;
    const $errEl = document.querySelector(".notFound");
    if (!$errEl) return;

    setTimeout(() => {
      $errEl.classList.add("hidden");
    }, DELAY_TIME * 1000);

    $errEl.classList.remove("hidden");
  }, []);

  useEffect(() => {
    setQuery(userLocation ?? "london");
  }, [userLocation]);

  useEffect(() => {
    query ? fetchWeather() : removeOnTimeOut();
    // eslint-disable-next-line
  }, [fetchWeather, removeOnTimeOut]);

  return {
    query,
    setQuery,
    isCityFound,
    weatherData,
  };
};
