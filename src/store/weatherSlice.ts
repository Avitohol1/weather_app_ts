import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import dayjs from "dayjs"
import { Location } from "../types/Location"
import { Details } from "../types/Details"
import { getWeatherThunk } from "./thunks/getWeatherThunk"
import { getSearchSuggestionsThunk } from "./thunks/getSearchSuggestionsThunk"

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
        changeTab: (state, action: PayloadAction<"daily" | "hourly">) => {
            state.activeTab = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                const {
                    data,
                    hourlyDetails: hourly,
                    dailyDetails: daily,
                } = action.payload
                const { winddirection, windspeed } = data.current_weather
                let details: Details = {
                    sunset: "",
                    sunrise: "",
                    apparent_temperature_min: 0,
                    apparent_temperature_max: 0,
                    windspeed,
                    winddirection,
                    precipitation_probability_mean: 0,
                    rain_sum: 0,
                    snowfall_sum: 0,
                    uv_index_max: 0,
                }

                Object.keys(data.daily).forEach((key: string) => {
                    const val: string | number = data.daily[key][0]
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
                state.hourly = hourly
                state.daily = daily
                state.weatherData = data
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.isLoading = false
                state.msg = {
                    type: "error",
                    text: action.payload as string,
                }
            })

            .addCase(getSearchSuggestions.pending, (state) => {})
            .addCase(getSearchSuggestions.fulfilled, (state, action) => {
                if (state.searchQuery.length > 2) {
                    state.searchSuggestions = action.payload
                } else {
                    state.searchSuggestions = []
                }
            })
            .addCase(getSearchSuggestions.rejected, (state, action) => {
                state.msg = {
                    type: "error",
                    text: action.payload as string,
                }
            })
    },
})

export default weatherSlice.reducer
export const {
    handleSearchQueryChange,
    toggleDropdown,
    handleMainParams,
    setLocation,
    changeTab,
} = weatherSlice.actions
