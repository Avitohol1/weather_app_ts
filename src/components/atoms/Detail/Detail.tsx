import { useAppSelector } from "../../../store/store"
import icons from "../../../utils/weatherDetailIcons"
import styles from "./Detail.module.scss"

type PropType = {
    detail: {
        text: string
        key: string
    }
}

const Detail = ({ detail }: PropType) => {
    const { details } = useAppSelector((store) => store.weather)
    const { text, key } = detail
    const icon = icons[key]
    return (
        <li className={styles.detail}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.text}>{text}</span>
            <span className={styles.value}>{details[key]}</span>
        </li>
    )
}

export default Detail
