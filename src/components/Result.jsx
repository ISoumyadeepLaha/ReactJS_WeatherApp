import React from "react";

const Result = ({ weatherData }) => {
  const temp = parseFloat(weatherData?.main?.temp - 273.15).toFixed(2);
  const temp_max = parseFloat(weatherData?.main?.temp_max - 273.15).toFixed(2);
  const temp_min = parseFloat(weatherData?.main?.temp_min - 273.15).toFixed(2);
  return (
    <div className="text-white-shade mt-4 p-4">
      {weatherData.length !== 0 ? (
        <div>
          <h2 className="text-4xl text-center p-4">
            {weatherData?.name} ,{" "}
            <span className="text-xl">{weatherData?.sys?.country}</span>
          </h2>

          <hr />
          <div className="flex flex-col items-center gap-4 mt-4">
            <h3 className="text-xl">Temperature</h3>
            <p className="text-base">{temp} &deg; C</p>
          </div>
          <div className="flex w-full justify-around mt-4 ">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl">Max Temperature</h3>
              <p className="text-base">{temp_max} &deg; C</p>
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl">Min Temperature</h3>
              <p className="text-base">{temp_min} &deg; C</p>
            </div>
          </div>
          <div className="flex justify-around items-center text-center text-xl gap-6 mt-4">
            {/* humidity */}
            <div className="flex flex-col items-center gap-4 mt-4">
              <h3 className="text-xl">Humidity</h3>
              <p className="text-base">{weatherData?.main?.humidity} %</p>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
              <h3 className="text-xl">Wind Speed</h3>
              <p className="text-base">{weatherData?.wind?.speed} km/h</p>
            </div>
          </div>

          {/* weather type */}
          <div className="flex flex-col items-center gap-4 mt-4">
              <h3 className="text-xl">Weather Type</h3>
              <div className="flex justify-around items-center">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherData?.weather[0].icon}@2x.png`}
                  alt=""
                />
                <p className="text-base">{weatherData?.weather[0]?.main}</p>
              </div>
            </div>
        </div>
      ) : (
        <>
          <h3 className="text-2xl text-center">Please enter the city name</h3>
        </>
      )}
    </div>
  );
};

export default Result;
