// See https://open-meteo.com/en/docs for more info on the url parameters

const urlParams: { [k: string]: string }[] = [
    {
        hourly: "temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weathercode,surface_pressure,visibility,windspeed_10m,winddirection_10m,windgusts_10m,uv_index,is_day",
    },
    {
        daily: "weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_mean,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum",
    },
    {
        current_weather: "true",
    },
    {
        timezone: "auto",
    },
]

export default urlParams
