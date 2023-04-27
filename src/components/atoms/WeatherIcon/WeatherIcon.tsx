import styles from "./WeatherIcon.module.scss"

type Props = {
    icon: JSX.Element
}

const WeatherIcon = ({ icon }: Props) => {
    return <div className={styles.container}>{icon}</div>
}

export default WeatherIcon
