import { WeatherState } from "../types/WeatherState"

export const initialState: WeatherState = {
    searchQuery: "",
    isDropDownOpen: false,
    searchSuggestions: [],
    date: "",
    mainParams: {
        latitude: "",
        longitude: "",
        tempUnit: "celsius",
    },
    location: {
        id: 0,
        name: "",
        country: "",
        country_code: "",
        latitude: "",
        longitude: "",
    },
    details: {
        sunset: "",
        sunrise: "",
        apparent_temperature_min: 0,
        apparent_temperature_max: 0,
        temperature: 0,
        windspeed: 0,
        winddirection: 0,
        weathercode: 0,
        precipitation_probability_mean: 0,
        rain_sum: 0,
        snowfall_sum: 0,
        uv_index_max: 0,
    },
    hourly: {
        "": {
            weathercode: 0,
            temperature_2m: 0,
            precipitation_probability: 0,
        },
    },
    daily: {},
    activeTab: "hourly",
    isLoading: false,
    msg: { text: "" },
}
