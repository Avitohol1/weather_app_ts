import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { initialState } from "./initialState"
import { Location } from "../types/Location"
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
        changeDate: (state, action: PayloadAction<string>) => {
            state.date = action.payload
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
            state.searchQuery = action.payload.name.toLowerCase()
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
                const { hourlyDetails: hourly, dailyDetails: daily } = action.payload!

                return {
                    ...state,
                    // Set the date to first day (today)
                    date: Object.keys(daily)[0],
                    isLoading: false,
                    hourly,
                    daily,
                }
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
                    // Only if search query is longer than 2 letters
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
    changeDate,
    setLocation,
    changeTab,
} = weatherSlice.actions
