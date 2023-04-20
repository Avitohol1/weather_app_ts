import axios from "axios"
import { RootState } from "../store"

export const getSearchSuggestionsThunk = async (_: void, thunkAPI: any) => {
    const state = thunkAPI.getState() as RootState
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
            throw thunkAPI.rejectWithValue(err)
        } else if (err instanceof Error) {
            throw thunkAPI.rejectWithValue(err.message)
        }
    }
}
