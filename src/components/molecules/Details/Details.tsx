import { useAppSelector } from "../../../store/store"
import units from "../../../utils/units"
import Detail from "../../atoms/Detail/Detail"
import styles from "./Details.module.scss"

const Details = () => {
    const { mainParams, daily, date } = useAppSelector((store) => store.weather)
    const tempUnit = mainParams.tempUnit === "celsius" ? "°C" : "°F"

    return (
        <section className={styles.container}>
            <ul className={styles.group1}>
                <Detail
                    detail={{
                        text: "wind speed",
                        key: "windspeed",
                        unit: units["windspeed"],
                    }}
                />
                <Detail
                    detail={{
                        text: "high temperature",
                        key: "apparent_temperature_max",
                        unit: tempUnit,
                    }}
                />
                <Detail
                    detail={{
                        text: "low temperature",
                        key: "apparent_temperature_min",
                        unit: tempUnit,
                    }}
                />
                <Detail detail={{ text: "sunrise", key: "sunrise" }} />
                <Detail detail={{ text: "sunset", key: "sunset" }} />
            </ul>
            <ul className={styles.group2}>
                <Detail
                    detail={{
                        text: "precipitation probability",
                        key: "precipitation_probability_mean",
                        unit: units["precipitation_probability_mean"],
                    }}
                />
                <Detail
                    detail={{
                        text: "rain sum",
                        key: "rain_sum",
                        unit: units["rain_sum"],
                    }}
                />
                <Detail
                    detail={{
                        text: "snowfall sum",
                        key: "snowfall_sum",
                        unit: units["snowfall_sum"],
                    }}
                />
                <Detail
                    detail={{
                        text: "uv index",
                        key: "uv_index_max",
                        uv_code: daily[date].uv_index_max,
                    }}
                />
                <Detail
                    detail={{
                        text: "wind direction",
                        key: "winddirection",
                        unit: units["winddirection"],
                    }}
                />
            </ul>
        </section>
    )
}

export default Details
