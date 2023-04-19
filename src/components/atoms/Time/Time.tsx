import dayjs from "dayjs"
import styles from "./Time.module.scss"

const Time = () => {
    const currTime: string = dayjs(new Date()).format("ddd, MMM D YYYY | H:mm")

    return <h3 className={styles.time}>{currTime}</h3>
}

export default Time
