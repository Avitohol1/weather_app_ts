import { useAppSelector } from "../../../store/store"
import styles from "./Temperature.module.scss"

const Temperature = () => {
    const { weatherData, mainParams } = useAppSelector((store) => store.weather)
    const unit = mainParams.tempUnit === "celsius" ? "°C" : "°F"
    const temperature = weatherData.current_weather?.temperature

    return (
        <h2 className={styles.temperature}>
            {temperature ? `${Math.round(temperature)}${unit}` : ""}
        </h2>
    )
}

export default Temperature
