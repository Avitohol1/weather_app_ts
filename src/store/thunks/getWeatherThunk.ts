import { RootState } from "../store"
import customFetchWeather from "../../utils/axios/customFetchWeather"

export const getWeatherThunk = async (_: void, thunkAPI: any) => {
    const state = thunkAPI.getState() as RootState
    const { latitude, longitude, tempUnit } = state.weather.mainParams
    const params = {
        latitude: latitude,
        longitude: longitude,
        temperature_unit: tempUnit,
    }

    try {
        const res = await customFetchWeather.get("", { params: { ...params } })
        return res.data
    } catch (err) {
        if (typeof err === "string") {
            throw thunkAPI.rejectWithValue(err)
        } else if (err instanceof Error) {
            throw thunkAPI.rejectWithValue(err.message)
        }
    }
}
