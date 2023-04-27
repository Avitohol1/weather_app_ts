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

const size_xs = 30
const size_s = 42
const size_m = 60
const size_l = 90

const weatherCodes: WeatherCodes = {
    0: {
        description: "clear sky",
        icon: {
            xs: <BsSun size={size_xs} color="#fadb5f" />,
            s: <BsSun size={size_s} color="#fadb5f" />,
            m: <BsSun size={size_m} color="#fadb5f" />,
            l: <BsSun size={size_l} color="#fadb5f" />,
        },
    },
    1: {
        description: "mainly clear",
        icon: {
            xs: <BsSun size={size_xs} color="#fadb5f" />,
            s: <BsSun size={size_s} color="#fadb5f" />,
            m: <BsSun size={size_m} color="#fadb5f" />,
            l: <BsSun size={size_l} color="#fadb5f" />,
        },
    },
    2: {
        description: "partly cloudy",
        icon: {
            xs: <BsCloudSun size={size_xs} color="#9fb3c8" />,
            s: <BsCloudSun size={size_s} color="#9fb3c8" />,
            m: <BsCloudSun size={size_m} color="#9fb3c8" />,
            l: <BsCloudSun size={size_l} color="#9fb3c8" />,
        },
    },
    3: {
        description: "overcast",
        icon: {
            xs: <BsClouds size={size_xs} color="#aaa" />,
            s: <BsClouds size={size_s} color="#aaa" />,
            m: <BsClouds size={size_m} color="#aaa" />,
            l: <BsClouds size={size_l} color="#aaa" />,
        },
    },
    45: {
        description: "fog",
        icon: {
            xs: <BsCloudFog2 size={size_xs} color="#aaa" />,
            s: <BsCloudFog2 size={size_s} color="#aaa" />,
            m: <BsCloudFog2 size={size_m} color="#aaa" />,
            l: <BsCloudFog2 size={size_l} color="#aaa" />,
        },
    },
    48: {
        description: "rime fog",
        icon: {
            xs: <BsCloudFog2 size={size_xs} color="#aaa" />,
            s: <BsCloudFog2 size={size_s} color="#aaa" />,
            m: <BsCloudFog2 size={size_m} color="#aaa" />,
            l: <BsCloudFog2 size={size_l} color="#aaa" />,
        },
    },
    51: {
        description: "light drizzle",
        icon: {
            xs: <BiDroplet size={size_xs} color="#4098d7" />,
            s: <BiDroplet size={size_s} color="#4098d7" />,
            m: <BiDroplet size={size_m} color="#4098d7" />,
            l: <BiDroplet size={size_l} color="#4098d7" />,
        },
    },
    53: {
        description: "drizzle",
        icon: {
            xs: <BsCloudDrizzle size={size_xs} color="#4098d7" />,
            s: <BsCloudDrizzle size={size_s} color="#4098d7" />,
            m: <BsCloudDrizzle size={size_m} color="#4098d7" />,
            l: <BsCloudDrizzle size={size_l} color="#4098d7" />,
        },
    },
    55: {
        description: "rain",
        icon: {
            xs: <BsCloudDrizzle size={size_xs} color="#4098d7" />,
            s: <BsCloudDrizzle size={size_s} color="#4098d7" />,
            m: <BsCloudDrizzle size={size_m} color="#4098d7" />,
            l: <BsCloudDrizzle size={size_l} color="#4098d7" />,
        },
    },
    56: {
        description: "light freezing drizzle",
        icon: {
            xs: <BsCloudDrizzle size={size_xs} color="#62b0e8" />,
            s: <BsCloudDrizzle size={size_s} color="#62b0e8" />,
            m: <BsCloudDrizzle size={size_m} color="#62b0e8" />,
            l: <BsCloudDrizzle size={size_l} color="#62b0e8" />,
        },
    },
    57: {
        description: "freezing drizzle",
        icon: {
            xs: <BsCloudDrizzle size={size_xs} color="#62b0e8" />,
            s: <BsCloudDrizzle size={size_s} color="#62b0e8" />,
            m: <BsCloudDrizzle size={size_m} color="#62b0e8" />,
            l: <BsCloudDrizzle size={size_l} color="#62b0e8" />,
        },
    },
    61: {
        description: "slight rain",
        icon: {
            xs: <BsCloudRain size={size_xs} color="#4098d7" />,
            s: <BsCloudRain size={size_s} color="#4098d7" />,
            m: <BsCloudRain size={size_m} color="#4098d7" />,
            l: <BsCloudRain size={size_l} color="#4098d7" />,
        },
    },
    63: {
        description: "rain",
        icon: {
            xs: <BsCloudRain size={size_xs} color="#4098d7" />,
            s: <BsCloudRain size={size_s} color="#4098d7" />,
            m: <BsCloudRain size={size_m} color="#4098d7" />,
            l: <BsCloudRain size={size_l} color="#4098d7" />,
        },
    },
    65: {
        description: "heavy rain",
        icon: {
            xs: <BsCloudRainHeavy size={size_xs} color="#4098d7" />,
            s: <BsCloudRainHeavy size={size_s} color="#4098d7" />,
            m: <BsCloudRainHeavy size={size_m} color="#4098d7" />,
            l: <BsCloudRainHeavy size={size_l} color="#4098d7" />,
        },
    },
    66: {
        description: "freezing rain",
        icon: {
            xs: <BsCloudRain size={size_xs} color="#62b0e8" />,
            s: <BsCloudRain size={size_s} color="#62b0e8" />,
            m: <BsCloudRain size={size_m} color="#62b0e8" />,
            l: <BsCloudRain size={size_l} color="#62b0e8" />,
        },
    },
    67: {
        description: "freezing rain",
        icon: {
            xs: <BsCloudRain size={size_xs} color="#62b0e8" />,
            s: <BsCloudRain size={size_s} color="#62b0e8" />,
            m: <BsCloudRain size={size_m} color="#62b0e8" />,
            l: <BsCloudRain size={size_l} color="#62b0e8" />,
        },
    },
    71: {
        description: "light snow",
        icon: {
            xs: <BsSnow size={size_xs} color="#dceefb" />,
            s: <BsSnow size={size_s} color="#dceefb" />,
            m: <BsSnow size={size_m} color="#dceefb" />,
            l: <BsSnow size={size_l} color="#dceefb" />,
        },
    },
    73: {
        description: "snow",
        icon: {
            xs: <BsSnow size={size_xs} color="#dceefb" />,
            s: <BsSnow size={size_s} color="#dceefb" />,
            m: <BsSnow size={size_m} color="#dceefb" />,
            l: <BsSnow size={size_l} color="#dceefb" />,
        },
    },
    75: {
        description: "heavy snow",
        icon: {
            xs: <BsSnow size={size_xs} color="#dceefb" />,
            s: <BsSnow size={size_s} color="#dceefb" />,
            m: <BsSnow size={size_m} color="#dceefb" />,
            l: <BsSnow size={size_l} color="#dceefb" />,
        },
    },
    77: {
        description: "hail",
        icon: {
            xs: <BsCloudHail size={size_xs} color="#dceefb" />,
            s: <BsCloudHail size={size_s} color="#dceefb" />,
            m: <BsCloudHail size={size_m} color="#dceefb" />,
            l: <BsCloudHail size={size_l} color="#dceefb" />,
        },
    },
    80: {
        description: "slight rain showers",
        icon: {
            xs: <WiDayRainMix size={size_xs} color="#4098d7" />,
            s: <WiDayRainMix size={size_s} color="#4098d7" />,
            m: <WiDayRainMix size={size_m} color="#4098d7" />,
            l: <WiDayRainMix size={size_l} color="#4098d7" />,
        },
    },
    81: {
        description: "rain showers",
        icon: {
            xs: <WiDayRainMix size={size_xs} color="#4098d7" />,
            s: <WiDayRainMix size={size_s} color="#4098d7" />,
            m: <WiDayRainMix size={size_m} color="#4098d7" />,
            l: <WiDayRainMix size={size_l} color="#4098d7" />,
        },
    },
    82: {
        description: "violent rain showers",
        icon: {
            xs: <WiDayRain size={size_xs} color="#4098d7" />,
            s: <WiDayRain size={size_s} color="#4098d7" />,
            m: <WiDayRain size={size_m} color="#4098d7" />,
            l: <WiDayRain size={size_l} color="#4098d7" />,
        },
    },
    85: {
        description: "slight snow showers",
        icon: {
            xs: <WiDaySnow size={size_xs} color="#dceefb" />,
            s: <WiDaySnow size={size_s} color="#dceefb" />,
            m: <WiDaySnow size={size_m} color="#dceefb" />,
            l: <WiDaySnow size={size_l} color="#dceefb" />,
        },
    },
    86: {
        description: "snow showers",
        icon: {
            xs: <WiDaySnow size={size_xs} color="#dceefb" />,
            s: <WiDaySnow size={size_s} color="#dceefb" />,
            m: <WiDaySnow size={size_m} color="#dceefb" />,
            l: <WiDaySnow size={size_l} color="#dceefb" />,
        },
    },
    95: {
        description: "thunderstorm",
        icon: {
            xs: <BsCloudLightning size={size_xs} color="#6c30c5" />,
            s: <BsCloudLightning size={size_s} color="#6c30c5" />,
            m: <BsCloudLightning size={size_m} color="#6c30c5" />,
            l: <BsCloudLightning size={size_l} color="#6c30c5" />,
        },
    },
    96: {
        description: "thunderstorm with slight hail",
        icon: {
            xs: <BsCloudLightningRain size={size_xs} color="#6c30c5" />,
            s: <BsCloudLightningRain size={size_s} color="#6c30c5" />,
            m: <BsCloudLightningRain size={size_m} color="#6c30c5" />,
            l: <BsCloudLightningRain size={size_l} color="#6c30c5" />,
        },
    },
    99: {
        description: "thunderstorm with heavy hail",
        icon: {
            xs: <BsCloudLightningRain size={size_xs} color="#6c30c5" />,
            s: <BsCloudLightningRain size={size_s} color="#6c30c5" />,
            m: <BsCloudLightningRain size={size_m} color="#6c30c5" />,
            l: <BsCloudLightningRain size={size_l} color="#6c30c5" />,
        },
    },
    100: {
        description: "error",
        icon: {},
    },
}

export default weatherCodes
