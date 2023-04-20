import axios from "axios"
import urlParams from "../../utils/urlParams"
import { RootState } from "../store"

export const getWeatherThunk = async (_: void, thunkAPI: any) => {
    const state = thunkAPI.getState() as RootState
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
            throw thunkAPI.rejectWithValue(err)
        } else if (err instanceof Error) {
            throw thunkAPI.rejectWithValue(err.message)
        }
    }
}
