import { useAppSelector } from "../../../store/store"
import weatherCodes from "../../../utils/weatherCodes"
import styles from "./Location.module.scss"

const Location = () => {
    const { location, weatherData } = useAppSelector((store) => store.weather)
    let code: number = 0

    if (
        weatherData.current_weather?.weathercode ||
        weatherData.current_weather?.weathercode === 0
    ) {
        code = weatherData.current_weather?.weathercode
    } else {
        code = 100
    }

    return (
        <h1 className={styles.h1}>
            {location.name} {location.country_code} - {weatherCodes[code].description}
        </h1>
    )
}

export default Location
