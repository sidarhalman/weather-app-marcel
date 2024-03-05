import './App.css';
import "./index.css";
import Weather from './WeatherData';
// import React, {useEffect, useState} from 'react';
// import axios from 'axios';

// Aris Way and explanation

// function App() {
//   const [weather, setWeather] = useState([]);
//   const [search, setSearch] = useState([]);
//   useEffect(() => {
//     async function Weatherdata() {
//       const api = "f8aadc312363abb110fa0a54263bc88d";
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=frankfurt&appid=${api}`;
//       try {
//         const response = await axios.get(url);
//          console.log(response);
//         setWeather(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//       };
   
    
    
//     Weatherdata().catch(console.error);
//   }, []);
//   // console.log(weather);
//   return (
//     <div className="App">
//       <h1>Weather Information</h1>
      
//      {/* input button */}
//       <input type="text" placeholder='Enter City Name'  onChange={(e) => e.target.value}
           
//           /> 
//           <button onClick={setSearch}>Search</button> 
         
//           {/* location */}
//          {/* <p>{weather.name}</p> */}
        
      
    
//     </div>
//   );
// }

// export default App;



function App() {
  return <Weather />;
}

export default App;


