import { useAppSelector } from "../../../store/store"
import weatherCodes from "../../../utils/weatherCodes"
import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import styles from "./HourlyForecast.module.scss"

export const HourlyForecast = () => {
    const { hourlyDetails } = useAppSelector((store) => store.weather)

    return (
        <CarouselProvider
            naturalSlideHeight={400}
            naturalSlideWidth={900}
            totalSlides={36}
        >
            <Slider>
                {Object.keys(hourlyDetails).map((hour, index) => {
                    const temp: number = hourlyDetails[hour]["temperature_2m"]
                    const prec_prob: number =
                        hourlyDetails[hour]["precipitation_probability"]
                    const weathercode: number = hourlyDetails[hour]["weathercode"]
                    return (
                        <Slide key={index} index={index}>
                            <span>{weatherCodes[weathercode].icon}</span>
                        </Slide>
                    )
                })}
            </Slider>
        </CarouselProvider>
    )
}
