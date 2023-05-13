import styles from "./Error.module.scss"

type PropType = {
    text: string
}

const Error = ({ text }: PropType) => {
    return <h2 className={styles.error}>{text}</h2>
}

export default Error
