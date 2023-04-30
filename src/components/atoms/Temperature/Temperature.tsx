import styles from "./Temperature.module.scss"

type Props = {
    temperature: number
    units: string
    fontSize: string
}

const Temperature = ({ temperature, units, fontSize }: Props) => {
    return (
        <p className={styles.temperature} style={{ fontSize: fontSize }}>
            {temperature ? `${Math.round(temperature)}${units}` : ""}
        </p>
    )
}

export default Temperature
