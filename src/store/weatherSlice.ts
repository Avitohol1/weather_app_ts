import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { Location } from "../types/Location"
import urlParams from "../utils/urlParams"
import { RootState } from "./store"

type WeatherState = {
    searchQuery: string
    isDropDownOpen: boolean
    searchSuggestions: Location[]
    weatherData: []
    mainParams: {
        latitude: string
        longitude: string
        tempUnit: string
    }
    isLoading: boolean
    msg: { type?: string; text: string }
}

const initialState: WeatherState = {
    searchQuery: "",
    isDropDownOpen: false,
    searchSuggestions: [],
    weatherData: [],
    mainParams: {
        latitude: "",
        longitude: "",
        tempUnit: "celsius",
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
    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getWeather.fulfilled, (state, action) => {
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
export const { handleSearchQueryChange, toggleDropdown, handleMainParams } =
    weatherSlice.actions
