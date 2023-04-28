import styles from "./CurrentWeather.module.scss"
import MainWeather from "../../molecules/MainWeather/MainWeather"
import Details from "../../molecules/Details/Details"

const CurrentWeather = () => {
    return (
        <section className={styles.container}>
            <MainWeather />
            <Details />
        </section>
    )
}

export default CurrentWeather
