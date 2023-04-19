import { BsSunrise, BsSunset, BsSnow, BsCloudRain } from "react-icons/bs"
import { BiDroplet } from "react-icons/bi"
import { FaTemperatureLow, FaTemperatureHigh } from "react-icons/fa"
import { WiWindDeg } from "react-icons/wi"
import { TbWind } from "react-icons/tb"
import { GiRadiations } from "react-icons/gi"

const icons = {
    sunrise: <BsSunrise />,
    sunset: <BsSunset />,
    apparent_temperature_min: <FaTemperatureLow />,
    apparent_temperature_max: <FaTemperatureHigh />,
    windspeed: <TbWind />,
    winddirection: <WiWindDeg />,
    precipitation_probability: <BsCloudRain />,
    rain_sum: <BiDroplet />,
    snowfall_sum: <BsSnow />,
    uv_index: <GiRadiations />,
}

export default icons
