import React, { useState } from "react";

//import addFavorite from "./components/addFavorite";
import Carousel from "./components/Carousel/Carousel";



const api = {
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  console.log(process.env);

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if(evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result)
           setQuery('')
          console.log(result);

        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`
  }
  return (
    
    <div className={
      (typeof weather.main != "undefined") ? ((weather.main.temp > 60) ? 'sunny app' : 'night app') : 'app'}> 
      <main> 
        <div className="container-fluid"> 
          <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search City..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
          </div>
        </div>

        <div>WELCOME</div>
        
        {(typeof weather.main != "undefined") ? (
        <div> 
          <div className="info-box">
            <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div> 
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="temp-box">
            <div className="temp">
            <img className="weather-icon"src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}/>
            {(Math.round(weather.main.temp))}°F</div>
            </div>
          <div className="temp-info-box">
            <div className="weather">{weather.weather[0].main}</div>
            <div className="description">{weather.weather[0].description}</div>
            <div className="feels_like">Feels Like: {Math.round(weather.main.feels_like)}°F</div>
          </div>
          <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', marginTop: 64 }}>
            <Carousel
              show={4}
              infiniteLoop
            >
              <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
                <div>
                    <div style={{padding: 8}}>
                        <img src="https://via.placeholder.com/300x300" alt="placeholder" style={{width: '100%'}} />
                    </div>
                </div>
            </Carousel>
          </div>
          </div>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
