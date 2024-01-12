import { useCallback, useEffect, useState } from "react";

const roundDown = (num) => Math.floor(num);
const convertToCelsius = (k) => k - 272.15;
const formatTime = (ts, opts = {}) =>
  new Date(ts * 1000).toLocaleString("en-US", opts);

export const UseWeatherData = () => {
  const [query, setQuery] = useState("");
  const [weatherData, setWeatherData] = useState({});

  const hasQuery = !!query;
  const isCityFound = weatherData?.code !== 404;

  const removeOnTimeOut = useCallback(() => {
    const DELAY_TIME = 5;
    const $errElement = document.querySelector(".notFound");
    if (!$errElement) return;
    setTimeout(() => {
      $errElement.classList.add("hidden");
    }, DELAY_TIME * 1000);

    $errElement.classList.remove("hidden");
  }, []);

  const fetchWeather = useCallback(async () => {
    try {
      const apiKey = import.meta.env.VITE_API_KEY;
      const baseUrl = import.meta.env.VITE_BASE_URL;
      const hourOpts = { hour: "numeric", minute: "numeric" };
      const dateOpts = { weekday: "long", day: "numeric", month: "short" };

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
  }, [query]);

  useEffect(() => {
    query ? fetchWeather() : removeOnTimeOut();
  }, [fetchWeather, query, weatherData, removeOnTimeOut]);

  return {
    query,
    setQuery,
    hasQuery,
    isCityFound,
    weatherData,
  };
};
