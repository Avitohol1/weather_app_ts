import { useAppSelector } from "../../../store/store"
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel"
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon"
import Temperature from "../../atoms/Temperature/Temperature"
import dayjs from "dayjs"
import weatherCodes from "../../../utils/weatherCodes"
import styles from "./DailyForecast.module.scss"

const DailyForecast = () => {
    const { daily } = useAppSelector((store) => store.weather)
    return (
        <CarouselProvider
            naturalSlideHeight={300}
            naturalSlideWidth={250}
            totalSlides={7}
            visibleSlides={5}
            isPlaying={true}
            step={1}
            className={styles.carousel}
        >
            <ButtonBack className={styles.btnBack}>
                <span>&lt;</span>
            </ButtonBack>
            <Slider className={styles.slider}>
                {Object.keys(daily).map((day, index) => {
                    const temp: number = daily[day]["temperature"]
                    // const prec_prob: number = daily[day]["precipitation_probability"]
                    const weathercode: number = daily[day]["weathercode"]
                    return (
                        <Slide key={index} index={index}>
                            <div className={styles.container}>
                                <WeatherIcon icon={weatherCodes[weathercode].icon.xs} />
                                <span className={styles.day}>
                                    {dayjs(day).format("DD.MM")}
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

export default DailyForecast
