export type DailyWeatherType = {
    [key: string]: {
        [key: string]: number | string
        weathercode: number
        sunset: string
        sunrise: string
        apparent_temperature_max: number
        apparent_temperature_min: number
        windspeed: number
        winddirection: number
        precipitation_probability_mean: number
        rain_sum: number
        snowfall_sum: number
        uv_index_max: number
        temperature: number
    }
}
