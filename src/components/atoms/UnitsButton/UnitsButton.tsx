import { useAppDispatch, useAppSelector } from "../../../store/store"
import { handleMainParams } from "../../../store/weatherSlice"
import styles from "./UnitsButton.module.scss"

const UnitsButton = () => {
    const { mainParams } = useAppSelector((store) => store.weather)
    const activeTempUnit = mainParams.tempUnit
    const dispatch = useAppDispatch()

    return (
        <div className={styles.container}>
            <span
                className={`${styles.tempUnit} ${
                    activeTempUnit === "celsius" ? styles.active : ""
                }`}
                onClick={() =>
                    dispatch(
                        handleMainParams({
                            tempUnit: "celsius",
                        })
                    )
                }
            >
                C°
            </span>
            |
            <span
                className={`${styles.tempUnit} ${
                    activeTempUnit === "fahrenheit" ? styles.active : ""
                }`}
                onClick={() =>
                    dispatch(
                        handleMainParams({
                            tempUnit: "fahrenheit",
                        })
                    )
                }
            >
                F°
            </span>
        </div>
    )
}

export default UnitsButton
