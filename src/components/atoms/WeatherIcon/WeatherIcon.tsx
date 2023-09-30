import styles from "./WeatherIcon.module.scss"

type Props = {
	icon: JSX.Element
	className: string
}

const WeatherIcon = ({ icon, className }: Props) => {
	return <div className={`${styles.container} ${className}`}>{icon}</div>
}

export default WeatherIcon
