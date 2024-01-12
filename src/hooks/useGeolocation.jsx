import { useCallback, useEffect } from "react";

export const UseGeolocation = () => {
  const geoUrl = import.meta.env.VITE_GEO_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  const fetchUserLocation = useCallback(async () => {
    try {
      const pos = await new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("Geolocation is not supported by your browser"));
        }

        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        });
      });

      const { latitude, longitude } = pos.coords;
      const url = `${geoUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      const data = await fetch(url);
      const res = await data.json();
      localStorage.setItem("city", res[0]?.state);
    } catch (err) {
      console.log(err.message);
    }
  }, [geoUrl, apiKey]);

  useEffect(() => {
    fetchUserLocation();
  }, [fetchUserLocation]);

  return {
    userLocation: localStorage.getItem("city"),
  };
};
