export type HourlyWeatherType = {
    [key: string]: {
        [key: string]: number | string
        temperature_2m: number
        precipitation_probability: number
        weathercode: number
    }
}
