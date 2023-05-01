import { useAppSelector } from "../../../store/store"
import { HourlyForecast } from "../HourlyForecast/HourlyForecast"
import DailyForecast from "../DailyForecast/DailyForecast"
import styles from "./Forecast.module.scss"
import Tabs from "../../molecules/Tabs/Tabs"

const Forecast = () => {
    const { activeTab } = useAppSelector((store) => store.weather)

    return (
        <div className={styles.forecast}>
            <Tabs />
            {activeTab === "daily" ? <DailyForecast /> : <HourlyForecast />}
        </div>
    )
}

export default Forecast
