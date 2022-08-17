import React, { useState } from "react";
import getData from "../api/fetchWeather";

let iconUrl = `http://openweathermap.org/img/wn`;

const WeatherArea = () => {
  const [text, setText] = useState("");
  const [weather, setWeather] = useState([]);
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="flex justify-center items-center flex-col">
        <input
          className="p-3 w-96 rounded-md mt-64 outline-none mb-10"
          placeholder="Search for weather"
          onChange={(e) => setText(e.target.value)}
          onKeyUp={(e)=>{
            if(e.key === "Enter"){
              getData(text).then((data)=>{
                setWeather(data);
              });
            }
          }}
        />
        {
          weather.length!==0 && weather.name!==undefined ? (
            <div className="h-96 bg-neutral-200 rounded-md w-[350px]">
            <h1 className="text-3xl font-semibold flex justify-center items-center mt-10">
              {weather?.name}
              <span className="bg-yellow-500 text-white text-base ml-1 px-2 -mt-6 rounded-xl">
                {weather?.sys?.country}
              </span>
            </h1>
            <div className="flex justify-center items-center mt-7 flex-col">
              <h1 className="text-5xl font-semibold flex justify-center">
                {weather?.main?.temp}
                <sup className="text-xl">&deg;C</sup>
              </h1>
              <img className="mt-8" src={`${iconUrl}/${weather.weather[0].icon}@2x.png`} alt="" />
              <p className="mt-6 uppercase">{weather?.weather[0].description}</p>
            </div>
          </div>
          ) : ""
        }
      </div>
    </div>
  );
};

export default WeatherArea;
