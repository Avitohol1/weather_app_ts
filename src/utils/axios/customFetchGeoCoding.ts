import axios, { AxiosInstance } from "axios"

const customFetchGeoCoding: AxiosInstance = axios.create({
    baseURL:
        "https://geocoding-api.open-meteo.com/v1/search?&count=5&language=en&format=json",
})

export default customFetchGeoCoding
