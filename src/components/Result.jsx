import React from "react";

const Result = ({ weatherData }) => {
  const temp = parseFloat(weatherData?.main?.temp - 273.15).toFixed(2);
  const temp_max = parseFloat(weatherData?.main?.temp_max - 273.15).toFixed(2);
  const temp_min = parseFloat(weatherData?.main?.temp_min - 273.15).toFixed(2);
  return (
    <div className="text-white-shade mt-4 p-4">
      {weatherData.length !== 0 ? (
        <div>
          <h2 className="text-6xl text-center p-4">
            {weatherData?.name} ,{" "}
            <span className="text-4xl">{weatherData?.sys?.country}</span>
          </h2>

          <hr />
          <div className="flex flex-col items-center gap-4 mt-4">
            <h3 className="text-4xl">Temp</h3>
            <p className="text-3xl">{temp} &deg; C</p>
          </div>
          <div className="flex w-full justify-around mt-4 ">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-4xl">Max Temp</h3>
              <p className="text-3xl">{temp_max} &deg; C</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-4xl">Min Temp</h3>
              <p className="text-3xl">{temp_min} &deg; C</p>
            </div>
          </div>
          <div className="flex justify-around items-center text-center text-4xl gap-6 mt-4">
            {/* humidity */}
            <div className="flex flex-col items-center gap-4 mt-4">
              <h3 className="text-4xl">Humidity</h3>
              <p className="text-3xl">{weatherData?.main?.humidity} %</p>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
              <h3 className="text-4xl">Wind Speed</h3>
              <p className="text-3xl">{weatherData?.wind?.speed} km/h</p>
            </div>
          </div>

          {/* weather type */}
          <div className="flex flex-col items-center gap-4 mt-4">
              <h3 className="text-4xl">Weather Type</h3>
              <div className="flex justify-around items-center">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                  alt=""
                />
                <p className="text-3xl">{weatherData?.weather[0]?.main}</p>
              </div>
            </div>
        </div>
      ) : (
        <>
          <h3 className="text-4xl text-center">Please enter the city name</h3>
        </>
      )}
    </div>
  );
};

export default Result;
