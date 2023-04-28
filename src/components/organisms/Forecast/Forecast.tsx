import { useAppSelector } from "../../../store/store"
import { HourlyForecast } from "../HourlyForecast/HourlyForecast"
import DailyForecast from "../DailyForecast/DailyForecast"

const Forecast = () => {
    const { activeTab } = useAppSelector((store) => store.weather)

    return <>{activeTab === "daily" ? <DailyForecast /> : <HourlyForecast />}</>
}

export default Forecast
