// export async function Weatherdata() {
// 	const url = 'https://weather-api99.p.rapidapi.com/weather?city=Bielefeld';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '378142043fmshe78d309d6098d15p12ded2jsn350f278bd2dc',
// 		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.json();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// };
import React, {useState} from 'react';

const Weather = () => {
	const [search, setSearch] = useState(null);
	const [weather, setWeather] = useState({});
	const api = {
	  key: process.env.REACT_APP_API_KEY,
	  base: "https://api.openweathermap.org/data/2.5/",
	};
	async function searchWeather() {
	  try {
		const reps = await fetch(
		  `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
		);
		const data = await reps.json();
		console.log(data);
		setWeather(data);
	  } catch (error) {
		error.message = "City not found";
	  }
	}
	return (
	  <div className= "h-screen flex justify-center items-center my-6 text-black-900"
	  style={{backgroundImage: `url(https://bilder.deutschlandfunk.de/FI/LE/_3/f6/FILE_3f6d63d57652d9a263e8648233e0ba70/wetter-jeremy-bishop-72584-jpg-100-1920x1080.jpg)`}}>

		<header>
		  {/* Header */}
		  <h1 className="font-bold text-3xl">Weather App</h1>
		  {/* Search Bar */}
		  <div>
			<input
			  className="my-6 bg-sky-100 rounded-md p-2"
			  type="text"
			  placeholder= "Search City or Town ...."
			  onChange={(e) => setSearch(e.target.value)}
			/>
			<button
			  className="hover:bg-blue-700 hover:text-white  bg-blue-300  text-blue-700 rounded-md p-2 mx-3"
			  onClick={searchWeather}
			>
			  Search
			</button>
		  </div>
		  {typeof weather.main != "undefined" ? (
			<div className="bg-gray-300 rounded-xi py-5 px-6 flex justify-center items-center flex-col">
			
			  {/* Location*/}
			  <p className="flex justify-center my-4">
			  city: {weather.name}, country: {weather.sys.country}
			  </p>
			  {/* Temperatur Celsius */}
			
			 
			  <p className="flex justify-center my-2" >Temp min: {weather.main.temp_min}°C</p>
			  <p className="flex justify-center my-2" >Temp max: {weather.main.temp_max}°C</p>
			  <p className="flex justify-center my-2" >Temp: {weather.main.temp}°C</p>
			  {/* Condition */}
			  <p className="flex justify-center my-4" >humidity: {weather.main.humidity}%</p>
			  <p className="flex justify-center my-2">{weather.weather[0].main} </p>
			
			  <p className="flex justify-center my-2">
				({weather.weather[0].description})
				
			  </p>
			  <p><img
			  className="flex justify-center my-2"
			  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
			  alt=""
			  /></p>
			  <p className="flex justify-center my-4">
				Wind Speed: {weather.wind.speed}m/s
			  </p>
			</div>
		  ) : (
			<p className="flex justify-center my-1">{weather.message}</p>
		  )}
		</header>
	  </div>
	);
  };
  export default Weather;

