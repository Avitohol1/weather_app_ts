import { RootState } from "../store"
import customFetchWeather from "../../utils/axios/customFetchWeather"
import { HourlyWeatherType } from "../../types/HourlyWeatherType"
import dayjs from "dayjs"

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
        const { data } = res
        const { hourly } = data

        let hourlyDetails: HourlyWeatherType = {}

        // get current hour info as index of 'hourly' array
        const startIndex = parseInt(dayjs().format("HH"))
        console.log(startIndex)
        // get 24 hours info
        const endIndex = startIndex + 23

        for (let i: number = startIndex; i < endIndex; i++) {
            const timeKey = hourly.time[i]
            const weathercode = hourly.weathercode[i]
            const temperature_2m = hourly.temperature_2m[i]
            const precipitation_probability = hourly.precipitation_probability[i]
            hourlyDetails[timeKey] = {
                weathercode,
                temperature_2m,
                precipitation_probability,
            }
        }

        const weatherData: any = {
            data,
            hourlyDetails,
        }

        return weatherData
    } catch (err) {
        if (typeof err === "string") {
            throw thunkAPI.rejectWithValue(err)
        } else if (err instanceof Error) {
            throw thunkAPI.rejectWithValue(err.message)
        }
    }
}
