import { useAppDispatch, useAppSelector } from "../../../store/store"
import {
    CarouselProvider,
    Slider,
    Slide,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel"
import dayjs from "dayjs"
import weatherCodes from "../../../utils/weatherCodes"
import styles from "./DailyForecast.module.scss"
import { changeDate } from "../../../store/weatherSlice"
import ForecastDetail from "../../molecules/ForecastDetail/ForecastDetail"

const DailyForecast = () => {
    const { daily, date, mainParams } = useAppSelector((store) => store.weather)
    const { slides } = useAppSelector((store) => store.carouselWidth)
    const dispatch = useAppDispatch()

    const units = mainParams.tempUnit === "celsius" ? "°C" : "°F"

    const handleDayChange = (day: string) => {
        dispatch(changeDate(day))
    }

    return (
        <CarouselProvider
            naturalSlideHeight={300}
            naturalSlideWidth={250}
            totalSlides={7}
            visibleSlides={slides}
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
                    const weathercode: number = daily[day]["weathercode"]
                    const isActive = day === date
                    return (
                        <Slide
                            key={index}
                            index={index}
                            onClick={() => handleDayChange(day)}
                            className={`${styles.slide} ${
                                isActive ? styles.isActive : ""
                            }`}
                        >
                            <ForecastDetail
                                icon={weatherCodes[weathercode].icon.xs}
                                time={dayjs(day).format("DD.MM")}
                                temp={temp}
                                units={units}
                            />
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
