import Flag from "react-world-flags"
import styles from "./Location.module.scss"

type PropType = {
    name: string
    country_code: string
    admin1: string
}

const Location = ({ name, country_code, admin1 }: PropType) => {
    return (
        <section className={styles.location}>
            <Flag code={country_code} width={30} className={styles.flag} />
            <div className={styles.titleContainer}>
                <span className={styles.cityName}>{name},</span> {country_code} ({admin1})
            </div>{" "}
        </section>
    )
}

export default Location
