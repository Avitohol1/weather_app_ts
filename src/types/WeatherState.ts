import { DailyWeatherType } from "./DailyWeatherType"
import { HourlyWeatherType } from "./HourlyWeatherType"
import { Location } from "./Location"
export type WeatherState = {
    searchQuery: string
    isDropDownOpen: boolean
    searchSuggestions: Location[]
    date: string
    mainParams: {
        latitude: string
        longitude: string
        tempUnit: string
    }
    location: Location
    hourly: HourlyWeatherType
    daily: DailyWeatherType
    activeTab: "daily" | "hourly"
    isLoading: boolean
    msg: { type?: string; text: string }
}
