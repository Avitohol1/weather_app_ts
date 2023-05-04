import { useAppDispatch, useAppSelector } from "../../../store/store"
import { handleSearchQueryChange } from "../../../store/weatherSlice"
import { ChangeEvent } from "react"
import styles from "./InputField.module.scss"

const InputField = () => {
    const { searchQuery } = useAppSelector((store) => store.weather)
    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputStr: string = e.target.value
        dispatch(handleSearchQueryChange(inputStr))
    }

    return (
        <form className={styles.container} onSubmit={(e) => e.preventDefault()}>
            <input
                className={styles.input}
                type="text"
                placeholder="search here..."
                value={searchQuery}
                onChange={handleChange}
            />
        </form>
    )
}

export default InputField
