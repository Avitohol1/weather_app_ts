import {
    BsSun,
    BsCloudSun,
    BsClouds,
    BsCloudFog2,
    BsCloudDrizzle,
    BsCloudRain,
    BsCloudRainHeavy,
    BsSnow,
    BsCloudHail,
    BsCloudLightning,
    BsCloudLightningRain,
} from "react-icons/bs"
import { BiDroplet } from "react-icons/bi"
import { WiDayRainMix, WiDayRain, WiDaySnow } from "react-icons/wi"
import { WeatherCodes } from "../types/WeatherCodes"

const size = 64

const weatherCodes: WeatherCodes = {
    0: {
        description: "clear sky",
        icon: <BsSun size={size} color="#fadb5f" />,
    },
    1: {
        description: "mainly clear",
        icon: <BsSun size={size} color="#fadb5f" />,
    },
    2: {
        description: "partly cloudy",
        icon: <BsCloudSun size={size} color="#9fb3c8" />,
    },
    3: {
        description: "overcast",
        icon: <BsClouds size={size} color="#aaa" />,
    },
    45: {
        description: "fog",
        icon: <BsCloudFog2 size={size} color="#aaa" />,
    },
    48: {
        description: "rime fog",
        icon: <BsCloudFog2 size={size} color="#aaa" />,
    },
    51: {
        description: "light drizzle",
        icon: <BiDroplet size={size} color="#4098d7" />,
    },
    53: {
        description: "drizzle",
        icon: <BsCloudDrizzle size={size} color="#4098d7" />,
    },
    55: {
        description: "rain",
        icon: <BsCloudDrizzle size={size} color="#4098d7" />,
    },
    56: {
        description: "light freezing drizzle",
        icon: <BsCloudDrizzle size={size} color="#62b0e8" />,
    },
    57: {
        description: "freezing drizzle",
        icon: <BsCloudDrizzle size={size} color="#62b0e8" />,
    },
    61: {
        description: "slight rain",
        icon: <BsCloudRain size={size} color="#4098d7" />,
    },
    63: {
        description: "rain",
        icon: <BsCloudRain size={size} color="#4098d7" />,
    },
    65: {
        description: "heavy rain",
        icon: <BsCloudRainHeavy size={size} color="#4098d7" />,
    },
    66: {
        description: "freezing rain",
        icon: <BsCloudRain size={size} color="#62b0e8" />,
    },
    67: {
        description: "freezing rain",
        icon: <BsCloudRain size={size} color="#62b0e8" />,
    },
    71: {
        description: "light snow",
        icon: <BsSnow size={size} color="#dceefb" />,
    },
    73: {
        description: "snow",
        icon: <BsSnow size={size} color="#dceefb" />,
    },
    75: {
        description: "heavy snow",
        icon: <BsSnow size={size} color="#dceefb" />,
    },
    77: {
        description: "hail",
        icon: <BsCloudHail size={size} color="#dceefb" />,
    },
    80: {
        description: "slight rain showers",
        icon: <WiDayRainMix size={size} color="#4098d7" />,
    },
    81: {
        description: "rain showers",
        icon: <WiDayRainMix size={size} color="#4098d7" />,
    },
    82: {
        description: "violent rain showers",
        icon: <WiDayRain size={size} color="#4098d7" />,
    },
    85: {
        description: "slight snow showers",
        icon: <WiDaySnow size={size} color="#dceefb" />,
    },
    86: {
        description: "snow showers",
        icon: <WiDaySnow size={size} color="#dceefb" />,
    },
    95: {
        description: "thunderstorm",
        icon: <BsCloudLightning size={size} color="#6c30c5" />,
    },
    96: {
        description: "thunderstorm with slight hail",
        icon: <BsCloudLightningRain size={size} color="#6c30c5" />,
    },
    99: {
        description: "thunderstorm with heavy hail",
        icon: <BsCloudLightningRain size={size} color="#6c30c5" />,
    },
    100: {
        description: "error",
        icon: <p>error</p>,
    },
}

export default weatherCodes
