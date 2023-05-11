import { rest } from "msw"
import urlParams from "../utils/urlParams"
import { response } from "./response"
import { geoResponse } from "./geoResponse"

const url = new URL("https://api.open-meteo.com/v1/forecast")
urlParams.forEach((urlParam) => {
    const [key, value]: [k: string, v: string] = Object.entries(urlParam)[0]
    url.searchParams.set(key, value)
})

const getSearchSuggestions = () => {
    const url =
        "https://geocoding-api.open-meteo.com/v1/search?&count=5&language=en&format=json"
    return rest.get(url, (req, res, ctx) => {
        return res(ctx.json(geoResponse))
    })
}

const getWeather = () => {
    return rest.get(url.toString(), (req, res, ctx) => {
        return res(ctx.json(response))
    })
}

export const handlers = [getWeather(), getSearchSuggestions()]
