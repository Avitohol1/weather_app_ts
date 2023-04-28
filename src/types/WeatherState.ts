import { DailyWeatherType } from "./DailyWeatherType"
import { Details } from "./Details"
import { HourlyWeatherType } from "./HourlyWeatherType"
import { Location } from "./Location"
import { Weather } from "./Weather"

export type WeatherState = {
    searchQuery: string
    isDropDownOpen: boolean
    searchSuggestions: Location[]
    weatherData: Weather
    mainParams: {
        latitude: string
        longitude: string
        tempUnit: string
    }
    location: Location
    details: Details
    hourly: HourlyWeatherType
    daily: DailyWeatherType
    activeTab: "daily" | "hourly"
    isLoading: boolean
    msg: { type?: string; text: string }
}
