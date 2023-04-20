import { useAppSelector } from "../../../store/store"
import styles from "./CurrentWeather.module.scss"
import MainWeather from "../../molecules/MainWeather/MainWeather"
import Details from "../../molecules/Details/Details"
import Loader from "../../atoms/Loader/Loader"

const CurrentWeather = () => {
    const { weatherData, isLoading } = useAppSelector((store) => store.weather)

    if (isLoading) {
        return <Loader />
    }

    return (
        <section className={styles.container}>
            {Object.keys(weatherData).length !== 0 ? <MainWeather /> : <></>}
            {Object.keys(weatherData).length !== 0 ? <Details /> : <></>}
        </section>
    )
}

export default CurrentWeather
