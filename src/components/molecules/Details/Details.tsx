import { useAppSelector } from "../../../store/store"
import Detail from "../../atoms/Detail/Detail"
import styles from "./Details.module.scss"

const Details = () => {
    const { details } = useAppSelector((store) => store.weather)

    return (
        <section className={styles.container}>
            <ul className={styles.group1}>
                <Detail detail={{ text: "wind speed", key: "windspeed" }} />
                <Detail
                    detail={{ text: "high temperature", key: "apparent_temperature_max" }}
                />
                <Detail
                    detail={{ text: "low temperature", key: "apparent_temperature_min" }}
                />
                <Detail detail={{ text: "sunrise", key: "sunrise" }} />
                <Detail detail={{ text: "sunset", key: "sunset" }} />
            </ul>
            <ul className={styles.group2}>
                <Detail
                    detail={{
                        text: "precipitation probability",
                        key: "precipitation_probability",
                    }}
                />
                <Detail detail={{ text: "rain sum", key: "rain_sum" }} />
                <Detail detail={{ text: "snowfall sum", key: "snowfall_sum" }} />
                <Detail detail={{ text: "uv index", key: "uv_index_max" }} />
                <Detail detail={{ text: "wind direction", key: "winddirection" }} />
            </ul>
        </section>
    )
}

export default Details
