import { useAppSelector } from "../../../store/store"
import { useState, useEffect } from "react"
import weatherCodes from "../../../utils/weatherCodes"

const WeatherIcon = () => {
    const { weatherData } = useAppSelector((store) => store.weather)
    const [code, setCode] = useState<number>(100)
    const [icon, setIcon] = useState<JSX.Element>(<></>)

    useEffect(() => {
        if (
            weatherData.current_weather?.weathercode ||
            weatherData.current_weather?.weathercode === 0
        ) {
            setCode(weatherData.current_weather?.weathercode)
        } else {
            // error code
            setCode(100)
        }
    }, [weatherData])

    useEffect(() => {
        console.log(code)
        setIcon(weatherCodes[code].icon)
    }, [code])

    return icon
}

export default WeatherIcon
