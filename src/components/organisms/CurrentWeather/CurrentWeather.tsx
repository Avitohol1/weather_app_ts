import { useAppSelector } from "../../../store/store"
import styles from "./CurrentWeather.module.scss"
import MainWeather from "../../molecules/MainWeather/MainWeather"
import Details from "../../molecules/Details/Details"

const CurrentWeather = () => {
    const { weatherData } = useAppSelector((store) => store.weather)
    console.log(weatherData)
    return (
        <section className={styles.container}>
            {Object.keys(weatherData).length !== 0 ? <MainWeather /> : <></>}
            {Object.keys(weatherData).length !== 0 ? <Details /> : <></>}
        </section>
    )
}

export default CurrentWeather
