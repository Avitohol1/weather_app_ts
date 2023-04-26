import { RootState } from "../store"
import customFetchWeather from "../../utils/axios/customFetchWeather"
import { HourlyWeatherType } from "../../types/HourlyWeatherType"

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

        const timeKey = hourly.time[0]
        let hourlyDetails: HourlyWeatherType = {
            [timeKey]: {
                weathercode: 0,
                temperature_2m: 0,
                precipitation_probability: 0,
            },
        }

        for (let i: number = 0; i < 35; i++) {
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
