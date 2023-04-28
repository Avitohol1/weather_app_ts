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
    const { hourly } = useAppSelector((store) => store.weather)

    return (
        <CarouselProvider
            naturalSlideHeight={300}
            naturalSlideWidth={250}
            totalSlides={36}
            visibleSlides={6}
            isPlaying={true}
            step={2}
            className={styles.carousel}
        >
            <ButtonBack className={styles.btnBack}>
                <span>&lt;</span>
            </ButtonBack>
            <Slider className={styles.slider}>
                {Object.keys(hourly).map((hour, index) => {
                    const temp: number = hourly[hour]["temperature_2m"]
                    const prec_prob: number = hourly[hour]["precipitation_probability"]
                    const weathercode: number = hourly[hour]["weathercode"]
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
