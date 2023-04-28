import { useAppDispatch, useAppSelector } from "../../../store/store"
import { changeTab } from "../../../store/weatherSlice"
import styles from "./Tab.module.scss"

type PropType = {
    val: "daily" | "hourly"
}

const Tab = ({ val }: PropType) => {
    const dispatch = useAppDispatch()
    const { activeTab } = useAppSelector((store) => store.weather)
    const isActive = val === activeTab
    const classes = `${styles.tab} ${isActive ? styles.active : ""}`

    const handleTabChange = () => {
        dispatch(changeTab(val))
    }

    return (
        <button className={classes} onClick={handleTabChange}>
            {val}
        </button>
    )
}

export default Tab
