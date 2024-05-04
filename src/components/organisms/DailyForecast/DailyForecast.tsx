import { useAppDispatch, useAppSelector } from "../../../store/store"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel"
import dayjs from "dayjs"
import weatherCodes from "../../../utils/weatherCodes"
import styles from "./DailyForecast.module.scss"
import { changeDate } from "../../../store/weatherSlice"
import ForecastDetail from "../../molecules/ForecastDetail/ForecastDetail"
import useMouse from "../../../hooks/useMouse"

const DailyForecast = () => {
	const { daily, date, mainParams } = useAppSelector((store) => store.weather)
	const { slides } = useAppSelector((store) => store.carouselWidth)
	const dispatch = useAppDispatch()

	const units = mainParams.tempUnit === "celsius" ? "°C" : "°F"

	const handleDayChange = (day: string) => {
		dispatch(changeDate(day))
	}

	// Get mouse position
	// This is used to stop the carousel from playing on mouse hover
	// Ref is attached to a div inside the CarouselProvider
	const [_, ref, isIntersecting] = useMouse()

	return (
		<CarouselProvider
			naturalSlideHeight={300}
			naturalSlideWidth={250}
			totalSlides={7}
			visibleSlides={slides}
			isPlaying={!isIntersecting}
			step={1}
			className={styles.carousel}
		>
			<div ref={ref}>
				<ButtonBack className={styles.btnBack}>
					<span>&lt;</span>
				</ButtonBack>
				<Slider className={styles.slider}>
					{Object.keys(daily).map((day, index) => {
						const temp: number = daily[day]["temperature"]
						const weathercode: number = daily[day]["weathercode"]
						const isActive = day === date
						let forecastDay: string = dayjs(day).format("DD.MM")
						if (index === 0) {
							// first item is today's forecast
							forecastDay = "today"
						} else if (index === 1) {
							// second item is tomorrow's forecast
							forecastDay = "tomorrow"
						}
						return (
							<Slide
								key={day}
								index={index}
								onClick={() => handleDayChange(day)}
								className={`${styles.slide} ${isActive ? styles.isActive : ""}`}
							>
								<ForecastDetail
									icon={weatherCodes[weathercode].icon.xs}
									time={forecastDay}
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
			</div>
		</CarouselProvider>
	)
}

export default DailyForecast
