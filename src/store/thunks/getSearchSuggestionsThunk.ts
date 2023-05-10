import { RootState } from "../store"
import customFetchGeoCoding from "../../utils/axios/customFetchGeoCoding"

export const getSearchSuggestionsThunk = async (_: void, thunkAPI: any) => {
    const state = thunkAPI.getState() as RootState
    const { searchQuery } = state.weather
    const urlParams = {
        name: searchQuery,
    }
    try {
        const res = await customFetchGeoCoding.get("", {
            params: { ...urlParams },
        })
        console.log(JSON.stringify(res.data.results))
        return res.data.results
    } catch (err) {
        if (typeof err === "string") {
            throw thunkAPI.rejectWithValue(err)
        } else if (err instanceof Error) {
            throw thunkAPI.rejectWithValue(err.message)
        }
    }
}
