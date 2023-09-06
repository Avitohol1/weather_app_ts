import { useAppSelector } from "../../../store/store"
import units from "../../../utils/units"
import Detail from "../../atoms/Detail/Detail"
import styles from "./Details.module.scss"

const Details = () => {
    const { mainParams, daily, date } = useAppSelector((store) => store.weather)
    const tempUnit = mainParams.tempUnit === "celsius" ? "°C" : "°F"

    // First group of details
    const detailsObj_1: DetailsObj_1 = {
        windspeed: {
            text: "wind speed",
            key: "windspeed",
            unit: units["windspeed"],
        },
        apparent_temperature_max: {
            text: "high temperature",
            key: "apparent_temperature_max",
            unit: tempUnit,
        },
        apparent_temperature_min: {
            text: "low temperature",
            key: "apparent_temperature_min",
            unit: tempUnit,
        },
        sunrise: {
            text: "sunrise",
            key: "sunrise",
        },
        sunset: {
            text: "sunset",
            key: "sunset",
        },
    }

    // Second group of details
    const detailsObj_2: DetailsObj_2 = {
        precipitation_probability_mean: {
            text: "precipitation probability",
            key: "precipitation_probability_mean",
            unit: units["precipitation_probability_mean"],
        },
        rain_sum: {
            text: "rain sum",
            key: "rain_sum",
            unit: units["rain_sum"],
        },
        snowfall_sum: {
            text: "snowfall sum",
            key: "snowfall_sum",
            unit: units["snowfall_sum"],
        },
        uv_index_max: {
            text: "uv index",
            key: "uv_index_max",
            uv_code: daily[date].uv_index_max,
        },
        winddirection: {
            text: "wind direction",
            key: "winddirection",
            unit: units["winddirection"],
        },
    }

    return (
        <section className={styles.container}>
            <ul className={styles.group1}>
                {Object.keys(detailsObj_1).map((detail) => {
                    const currVal = detailsObj_1[detail as keyof typeof detailsObj_1]
                    const { text, key, unit, uv_code } = currVal

                    return <Detail detail={{ text, key, unit, uv_code }} />
                })}
            </ul>
            <ul className={styles.group2}>
                {Object.keys(detailsObj_2).map((detail) => {
                    const currVal = detailsObj_2[detail as keyof typeof detailsObj_2]
                    const { text, key, unit, uv_code } = currVal

                    return <Detail detail={{ text, key, unit, uv_code }} />
                })}
            </ul>
        </section>
    )
}

export default Details
