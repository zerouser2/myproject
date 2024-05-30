import { useEffect, useRef, useState } from "react";
import './weather.css'
import cloudImage from "./images/pngcloud.png"
import rainImage from './images/pngrain.png'
import snowImage from './images/pngsnow.png'
import stormImage from './images/pngstorm.png'
import sunImage from './images/pngSun.png'


function Weather() {
    const [inputValue, setInputValue] = useState('')
    const [cityName, setCityName] = useState('')
    const [infoAboutCity, setInfoAboutCity] = useState({
        temp: '',
        feels_like: '',
        humidity: '',
        description: '', // clouds, и тд
        wind: '',
    })
    const [isOverInfo, setIsOverInfo] = useState(false)
    const ref = useRef()

    function weatherType() {
        switch (infoAboutCity.description) {
            case 'Clouds':
                return cloudImage
            case 'Rain':
                return rainImage
            case 'Snow':
                return snowImage
            case 'Sunny':
                return sunImage
            case 'Storm':
                return stormImage
            case 'Clear':
                return sunImage
        }
    }



    function showWeather() {
        const imageSrc = weatherType()

        if (infoAboutCity.temp) {
            return (
                <div className="city    ">
                    <div>
                        <p>{cityName.toUpperCase()}</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '28px'}}>
                        <p style={{fontWeight: '600', fontSize: '50px'}}>{parseInt(infoAboutCity.temp)}<sup>°</sup></p> 
            
                        <div style={{height: '50px'}}>
                            <p>{infoAboutCity.description}</p>
                        </div>
                    </div>
                    
                    <img src={imageSrc} />
                    
                    <p>Ощущается как {parseInt(infoAboutCity.feels_like)}<sup>°</sup></p>
                    <p>Влажность {infoAboutCity.humidity}%</p>

                    <p>Скорость ветра {infoAboutCity.wind} м/с</p>
                </div>
            )
        }
    }

    const API = '5a0741599def9d31f56a198767ee9657'

    useEffect(() => {
        if (cityName) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API}`)
                .then((data) => {
                    return data.json()
                })
                .then((weather) => {
                    console.log(weather)
                    setInfoAboutCity({
                        temp: weather.main.temp,
                        feels_like: weather.main.feels_like,
                        humidity: weather.main.humidity,
                        description: weather.weather[0].main,
                        wind: weather.wind.speed,
                    })
                    setIsOverInfo(!isOverInfo)
                })
        }
        

        
    }, [cityName])

    

    function onChangeInput(e) {
        setInputValue(e.target.value)
    }

    function onClickButton() {
        setCityName(inputValue)

            ref.current.classList.add('move')        
    }
    return (
        <div className="weather" ref={ref}> 
            <h1>Погода</h1>

            <input type="text" placeholder="Название города" value={inputValue} onChange={onChangeInput}/>    
            <button onClick={onClickButton}>OK</button>

            {showWeather() }

        </div>
    );
}

export default Weather;