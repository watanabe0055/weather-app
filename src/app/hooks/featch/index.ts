// hooks/fetch.js
import { WeatherData } from "@/types";
import axios from "axios";
import { useState, useEffect } from "react";

export const useFetchApi = () => {
  const [data, setData] = useState<WeatherData>();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url =
      "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json";
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []); // 空の依存配列を使用して、マウント時にのみ実行

  return { data, error, isLoading };
};
