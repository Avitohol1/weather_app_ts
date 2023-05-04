import { RootState } from "../store"
import customFetchWeather from "../../utils/axios/customFetchWeather"
import { HourlyWeatherType } from "../../types/HourlyWeatherType"
import dayjs from "dayjs"
import { DailyWeatherType } from "../../types/DailyWeatherType"

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
        const { hourly, daily } = data

        let hourlyDetails: HourlyWeatherType = {}
        let dailyDetails: DailyWeatherType = {}
        let weatherData: {
            hourlyDetails: HourlyWeatherType
            dailyDetails: DailyWeatherType
        } = {
            hourlyDetails,
            dailyDetails,
        }

        // get current hour info as index of 'hourly' array
        const startIndex = parseInt(dayjs().format("HH"))
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

        for (let i: number = 0; i < 7; i++) {
            const timeKey = daily.time[i]
            const weathercode = daily.weathercode[i]
            const sunset = dayjs(daily.sunset[i]).format("HH:mm")
            const sunrise = dayjs(daily.sunrise[i]).format("HH:mm")
            const apparent_temperature_min = daily.apparent_temperature_min[i]
            const apparent_temperature_max = daily.apparent_temperature_max[i]
            const windspeed = daily.windspeed_10m_max[i]
            const winddirection = daily.winddirection_10m_dominant[i]
            const precipitation_probability_mean = daily.precipitation_probability_mean[i]
            const rain_sum = daily.rain_sum[i]
            const snowfall_sum = daily.snowfall_sum[i]
            const uv_index_max = daily.uv_index_max[i]
            const temperature =
                (daily.temperature_2m_max[i] + daily.temperature_2m_min[i]) / 2
            dailyDetails[timeKey] = {
                weathercode,
                sunset,
                sunrise,
                apparent_temperature_max,
                apparent_temperature_min,
                windspeed,
                winddirection,
                precipitation_probability_mean,
                rain_sum,
                snowfall_sum,
                uv_index_max,
                temperature,
            }
        }

        weatherData = {
            hourlyDetails,
            dailyDetails,
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
