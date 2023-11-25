import { FORECAST_AREA_CODES } from "@/constants";
import React, { useState, useEffect } from "react";

const WeatherDataSelector = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSubregion, setSelectedSubregion] = useState("");
  const [subregions, setSubregions] = useState({});
  const [regionCode, setRegionCode] = useState("");

  useEffect(() => {
    // 大分類が選択された場合、サブリージョンのリストを更新し、
    // 「選択してください」のオプションを追加します。
    if (selectedRegion) {
      setSubregions(FORECAST_AREA_CODES[selectedRegion]);
    } else {
      setSubregions({});
    }
    setSelectedSubregion("");
    setRegionCode("");
  }, [selectedRegion]);

  const handleRegionChange = (event: any) => {
    setSelectedRegion(event.target.value);
  };

  const handleSubregionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const subregionKey = event.target.options[event.target.selectedIndex].text;
    setSelectedSubregion(subregionKey);
    const code = subregions[subregionKey];
    setRegionCode(code);
  };

  return (
    <div className="text-black">
      <select onChange={handleRegionChange} value={selectedRegion}>
        <option value="">大きな地域を選択してください</option>
        {Object.keys(FORECAST_AREA_CODES).map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>

      {selectedRegion && (
        <select onChange={handleSubregionChange} value={regionCode}>
          <option value="">具体的な地域を選択してください</option>
          {Object.entries(subregions).map(([subregion, code]) => (
            <option key={subregion} value={code}>
              {subregion}
            </option>
          ))}
        </select>
      )}

      {regionCode && (
        <div>
          選択された地域: {selectedSubregion}
          <br />
          選択された地域のコード: {regionCode}
        </div>
      )}
    </div>
  );
};

export default WeatherDataSelector;
