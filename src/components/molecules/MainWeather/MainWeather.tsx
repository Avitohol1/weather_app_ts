import { useEffect, useState } from "react"
import { useAppSelector } from "../../../store/store"
import Location from "../../atoms/Location/Location"
import Temperature from "../../atoms/Temperature/Temperature"
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon"
import weatherCodes from "../../../utils/weatherCodes"
import styles from "./MainWeather.module.scss"

const MainWeather = () => {
    const { daily, date, mainParams } = useAppSelector((store) => store.weather)
    const { weathercode } = daily[date]
    const [weatherCode, setWeatherCode] = useState<number>(100)

    const temperature = daily[date].temperature
    const units = mainParams.tempUnit === "celsius" ? "°C" : "°F"

    useEffect(() => {
        if (weathercode || weathercode === 0) {
            setWeatherCode(weathercode)
        } else {
            // error code
            setWeatherCode(100)
        }
    }, [weathercode])

    return (
        <article className={styles.container}>
            <Location />
            <div className={styles.temperatureContainer}>
                <WeatherIcon icon={weatherCodes[weatherCode].icon.l} />
                <Temperature temperature={temperature} units={units} fontSize={"54px"} />
            </div>
        </article>
    )
}

export default MainWeather
