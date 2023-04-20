import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import dayjs from "dayjs"
import { Location } from "../types/Location"
import { Weather } from "../types/Weather"
import { Details } from "../types/Details"
import { getWeatherThunk } from "./thunks/getWeatherThunk"
import { getSearchSuggestionsThunk } from "./thunks/getSearchSuggestionsThunk"

type WeatherState = {
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
    isLoading: boolean
    msg: { type?: string; text: string }
}

const initialState: WeatherState = {
    searchQuery: "",
    isDropDownOpen: false,
    searchSuggestions: [],
    weatherData: {},
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
        windspeed: 0,
        winddirection: 0,
        precipitation_probability: 0,
        rain_sum: 0,
        snowfall_sum: 0,
        uv_index_max: 0,
    },
    isLoading: false,
    msg: { text: "" },
}

export const getSearchSuggestions = createAsyncThunk(
    "weather/getSearchSuggestions",
    getSearchSuggestionsThunk
)

export const getWeather = createAsyncThunk("weather/getWeather", getWeatherThunk)

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        handleSearchQueryChange: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload
            state.isDropDownOpen = true
        },
        toggleDropdown: (state, action: PayloadAction<boolean>) => {
            state.isDropDownOpen = action.payload
        },
        setWeatherData: (state, action) => {
            state.weatherData = action.payload
        },
        handleMainParams: (state, action: PayloadAction<{ [k: string]: string }>) => {
            const newParams = action.payload
            state.mainParams = {
                ...state.mainParams,
                ...newParams,
            }
        },
        setLocation: (state, action: PayloadAction<Location>) => {
            state.location = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                const { winddirection, windspeed } = action.payload.current_weather
                let details: Details = {
                    sunset: "",
                    sunrise: "",
                    apparent_temperature_min: 0,
                    apparent_temperature_max: 0,
                    windspeed,
                    winddirection,
                    precipitation_probability: 0,
                    rain_sum: 0,
                    snowfall_sum: 0,
                    uv_index_max: 0,
                }

                Object.keys(action.payload.daily).forEach((key: string) => {
                    const val: string | number = action.payload.daily[key][0]
                    if (details.hasOwnProperty(key)) {
                        if (key === "sunset" || key === "sunrise") {
                            const formattedDate: string = dayjs(val)
                                .format("HH:mm")
                                .toString()
                            details[key] = formattedDate
                        } else {
                            details[key] = val
                        }
                    }
                })

                state.isLoading = false
                state.details = details
                state.weatherData = action.payload
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.isLoading = false
                state.msg = {
                    type: "error",
                    text: action.payload as string,
                }
            })

            .addCase(getSearchSuggestions.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSearchSuggestions.fulfilled, (state, action) => {
                state.isLoading = false
                if (state.searchQuery.length > 2) {
                    state.searchSuggestions = action.payload
                } else {
                    state.searchSuggestions = []
                }
            })
            .addCase(getSearchSuggestions.rejected, (state, action) => {
                state.isLoading = false
                state.msg = {
                    type: "error",
                    text: action.payload as string,
                }
            })
    },
})

export default weatherSlice.reducer
export const { handleSearchQueryChange, toggleDropdown, handleMainParams, setLocation } =
    weatherSlice.actions
