import axios, { AxiosInstance } from "axios"
import urlParams from "../urlParams"

const url = new URL("https://api.open-meteo.com/v1/forecast")
urlParams.forEach((urlParam) => {
    const [key, value]: [k: string, v: string] = Object.entries(urlParam)[0]
    url.searchParams.set(key, value)
})

const customFetchWeather: AxiosInstance = axios.create({
    baseURL: url.toString(),
})

export default customFetchWeather
