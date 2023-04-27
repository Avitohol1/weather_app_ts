import { useAppSelector } from "../../../store/store"
import weatherCodes from "../../../utils/weatherCodes"
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

import styles from "./HourlyForecast.module.scss"
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon"
import Temperature from "../../atoms/Temperature/Temperature"
import dayjs from "dayjs"

export const HourlyForecast = () => {
    const { hourlyDetails } = useAppSelector((store) => store.weather)

    return (
        <CarouselProvider
            naturalSlideHeight={300}
            naturalSlideWidth={250}
            totalSlides={36}
            visibleSlides={6}
            className={styles.carousel}
        >
            <ButtonBack className={styles.btnBack}>
                <span>&lt;</span>
            </ButtonBack>
            <Slider className={styles.slider}>
                {Object.keys(hourlyDetails).map((hour, index) => {
                    const temp: number = hourlyDetails[hour]["temperature_2m"]
                    const prec_prob: number =
                        hourlyDetails[hour]["precipitation_probability"]
                    const weathercode: number = hourlyDetails[hour]["weathercode"]
                    return (
                        <Slide key={index} index={index}>
                            <div className={styles.container}>
                                <WeatherIcon icon={weatherCodes[weathercode].icon.xs} />
                                <span className={styles.hour}>
                                    {dayjs(hour).format("HH:mm")}
                                </span>
                                <Temperature fontSize={"16px"} temp={temp} />
                            </div>
                        </Slide>
                    )
                })}
            </Slider>

            <ButtonNext className={styles.btnNext}>
                <span>&gt;</span>
            </ButtonNext>
        </CarouselProvider>
    )
}
