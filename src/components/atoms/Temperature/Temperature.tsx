import { useAppSelector } from "../../../store/store"
import styles from "./Temperature.module.scss"

type Props = {
    fontSize: string
    temp?: number
}

const Temperature = ({ fontSize, temp }: Props) => {
    const { weatherData, mainParams } = useAppSelector((store) => store.weather)
    const unit = mainParams.tempUnit === "celsius" ? "°C" : "°F"
    const temperature = temp ? temp : weatherData.current_weather?.temperature

    return (
        <p className={styles.temperature} style={{ fontSize: fontSize }}>
            {temperature ? `${Math.round(temperature)}${unit}` : ""}
        </p>
    )
}

export default Temperature
