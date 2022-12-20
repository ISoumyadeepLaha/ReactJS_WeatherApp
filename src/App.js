import { useState } from "react";
import axios from "axios";
import "./App.css";
import Result from "./components/Result";
import Search from "./components/Search";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);

  const changeSearch = (value) => {
    setSearch(value);
  }

  const fetchWeather = async () => {
    if(search !== ""){
     await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=06e34d6a513c6c7b71d788958c431d47`)
      .then((response) =>{
        // console.log(response.data)
        setWeather(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
    }
  }

  return (
    <div className=" shadow-xl max-w-3xl mx-auto px-6 py-4 bg-[#03203C] rounded-xl">
      <Search searchData={search} eventHandler={changeSearch} searchWeatherHandler={fetchWeather}/>
      <Result weatherData={weather}/>
    </div>
  );
}

export default App;
