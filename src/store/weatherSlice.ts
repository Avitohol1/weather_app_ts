import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Location } from "../types/Location"
import urlParams from "../utils/urlParams"
import { RootState } from "./store"
import { Weather } from "../types/Weather"
import { Details } from "../types/Details"

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
    async (_, { getState, rejectWithValue }) => {
        const state = getState() as RootState
        const { searchQuery } = state.weather
        const url = new URL(
            "https://geocoding-api.open-meteo.com/v1/search?&count=5&language=en&format=json"
        )
        url.searchParams.set("name", searchQuery)
        try {
            const res = await axios.get(url.toString())
            return res.data.results
        } catch (err) {
            if (typeof err === "string") {
                throw rejectWithValue(err)
            } else if (err instanceof Error) {
                throw rejectWithValue(err.message)
            }
        }
    }
)

export const getWeather = createAsyncThunk(
    "weather/getWeather",
    async (_, { getState, rejectWithValue }) => {
        const state = getState() as RootState
        const { latitude, longitude, tempUnit } = state.weather.mainParams
        const url = new URL("https://api.open-meteo.com/v1/forecast")
        url.searchParams.set("latitude", latitude)
        url.searchParams.set("longitude", longitude)
        url.searchParams.set("temperature_unit", tempUnit)
        urlParams.forEach((urlParam) => {
            const [key, value] = Object.entries(urlParam)[0]
            url.searchParams.set(key, value as string)
        })

        try {
            const res = await axios.get(url.toString())
            return res.data
        } catch (err) {
            if (typeof err === "string") {
                throw rejectWithValue(err)
            } else if (err instanceof Error) {
                throw rejectWithValue(err.message)
            }
        }
    }
)

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
                    windspeed: 0,
                    winddirection: 0,
                    precipitation_probability: 0,
                    rain_sum: 0,
                    snowfall_sum: 0,
                    uv_index_max: 0,
                }

                Object.keys(action.payload.daily).forEach((key) => {
                    if (details.hasOwnProperty(key)) {
                        details[key] = action.payload.daily[key][0]
                    }
                })
                // const details = new Map<any, any>([
                //     ["windspeed", windspeed],
                //     ["winddirection", winddirection],
                //     ["apparent_temperature_max", 0],
                //     ["apparent_temperature_min", 0],
                //     ["precipitation_probability", 0],
                //     ["rain_sum", 0],
                //     ["snowfall_sum", 0],
                //     ["sunrise", ""],
                //     ["sunset", ""],
                //     ["uv_index", 0],
                // // ])

                // Object.keys(action.payload.daily).forEach((key) => {
                //     if (details.has(key)) {
                //         details.set(key, action.payload.daily[key][0])
                //     }
                // })

                // const detailsObj: Details = Object.fromEntries(details)

                state.isLoading = false
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
