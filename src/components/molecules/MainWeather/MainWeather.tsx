import { useEffect, useState } from "react"
import { useAppSelector } from "../../../store/store"
import Location from "../../atoms/Location/Location"
import Temperature from "../../atoms/Temperature/Temperature"
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon"
import weatherCodes from "../../../utils/weatherCodes"
import styles from "./MainWeather.module.scss"

const MainWeather = () => {
    const { weatherData } = useAppSelector((store) => store.weather)
    const [weatherCode, setWeatherCode] = useState<number>(100)

    useEffect(() => {
        if (
            weatherData.current_weather?.weathercode ||
            weatherData.current_weather?.weathercode === 0
        ) {
            setWeatherCode(weatherData.current_weather?.weathercode)
        } else {
            // error code
            setWeatherCode(100)
        }
    }, [weatherData])

    return (
        <article className={styles.container}>
            <Location />
            <div className={styles.temperatureContainer}>
                <WeatherIcon icon={weatherCodes[weatherCode].icon.l} />
                <Temperature fontSize={"54px"} />
            </div>
        </article>
    )
}

export default MainWeather
