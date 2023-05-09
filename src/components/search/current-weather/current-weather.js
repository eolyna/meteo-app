import "./current-weather.css"

const CurrentWeather = () =>{
    return  (
        <div className="weather">
            <div className="top">
                <div>
                <p className="city">Troyes</p>
                <p className="weather-description">Sunny</p>
                </div>
           
            <img alt="wheather" className=" weather-icon" src="icons/01d.png" />
        </div>
        </div>
    );
}

export default CurrentWeather;