import React from "react"
import Time from "../../atoms/Time/Time"
import Location from "../../atoms/Location/Location"
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon"
import Temperature from "../../atoms/Temperature/Temperature"
import styles from "./CurrentWeather.module.scss"
import MainWeather from "../../molecules/MainWeather/MainWeather"

const CurrentWeather = () => {
    return (
        <section className={styles.container}>
            <MainWeather />
        </section>
    )
}

export default CurrentWeather
