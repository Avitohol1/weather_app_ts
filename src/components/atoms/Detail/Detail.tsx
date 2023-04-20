import { useAppSelector } from "../../../store/store"
import uvIndex from "../../../utils/uvIndex"
import icons from "../../../utils/weatherDetailIcons"
import styles from "./Detail.module.scss"

type PropType = {
    detail: {
        text: string
        key: string
        unit?: string
        uv_code?: number
    }
}

const Detail = ({ detail }: PropType) => {
    const { details } = useAppSelector((store) => store.weather)
    const { text, key, unit } = detail
    const icon: JSX.Element = icons[key]
    const uvIndexText: string = detail.uv_code ? uvIndex(Math.round(detail.uv_code)) : ""

    return (
        <li className={styles.detail}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.text}>{text}</span>
            <span className={styles.value}>
                {details[key]} {uvIndexText}
                {unit}
            </span>
        </li>
    )
}

export default Detail
