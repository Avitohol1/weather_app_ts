import Temperature from "../../atoms/Temperature/Temperature"
import WeatherIcon from "../../atoms/WeatherIcon/WeatherIcon"
import styles from "./ForecastDetail.module.scss"

type PropType = {
	icon: JSX.Element
	time: string
	temp: number
	units: string
}

const ForecastDetail = ({ icon, time, temp, units }: PropType) => {
	return (
		<div className={styles.container}>
			<WeatherIcon icon={icon} />
			<span className={styles.time}>{time}</span>
			<Temperature fontSize={"16px"} temperature={temp} units={units} />
		</div>
	)
}

export default ForecastDetail
