import Tab from "../../atoms/Tab/Tab"
import styles from "./Tabs.module.scss"

const Tabs = () => {
    return (
        <div className={styles.tabs}>
            <Tab val={"hourly"} />
            <Tab val={"daily"} />
        </div>
    )
}

export default Tabs
