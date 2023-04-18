import { useAppDispatch, useAppSelector } from "../../../store/store"
import { handleSearchQueryChange } from "../../../store/weatherSlice"
import { ChangeEvent } from "react"
import { BiSearch } from "react-icons/bi"
import styles from "./InputField.module.scss"

const InputField = () => {
    const { searchQuery } = useAppSelector((store) => store.weather)
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (typeof e.target.value === "string") {
            dispatch(handleSearchQueryChange(e.target.value))
        }
        return
    }
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                placeholder="search here..."
                value={searchQuery}
                onChange={handleChange}
            />
            <div className={styles.searchBtnContainer}>
                <BiSearch className={styles.searchBtn} />
            </div>
        </div>
    )
}

export default InputField
