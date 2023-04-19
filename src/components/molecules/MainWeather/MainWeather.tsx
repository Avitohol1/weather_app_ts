import Location from "../../atoms/Location/Location"
import Temperature from "../../atoms/Temperature/Temperature"
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon"
import styles from "./MainWeather.module.scss"

const MainWeather = () => {
    return (
        <article className={styles.container}>
            <Location />
            <WeatherIcon />
            <Temperature />
        </article>
    )
}

export default MainWeather
