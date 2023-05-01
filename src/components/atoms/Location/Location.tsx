import styles from "./Location.module.scss"

type PropType = {
    name: string
    country_code: string
    description: string
}

const Location = ({ name, country_code, description }: PropType) => {
    return (
        <h1 className={styles.h1}>
            {name} {country_code} -{" "}
            <span className={styles.description}>{description}</span>
        </h1>
    )
}

export default Location
