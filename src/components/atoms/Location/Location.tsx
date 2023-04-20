import { useAppSelector } from "../../../store/store"
import styles from "./Location.module.scss"

const Location = () => {
    const { location } = useAppSelector((store) => store.weather)

    return (
        <h1 className={styles.h1}>
            {location.name} {location.country_code} - Mainly Clear
        </h1>
    )
}

export default Location
