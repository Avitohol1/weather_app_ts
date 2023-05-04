import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../store/store"
import { getSearchSuggestions } from "../../../store/weatherSlice"
import InputField from "../../atoms/InputField/InputField"
import SearchSuggestions from "../../atoms/SearchSuggestions/SearchSuggestions"
import Time from "../../atoms/Time/Time"
import styles from "./SearchArea.module.scss"

const SearchArea = () => {
    const { isDropDownOpen, searchQuery } = useAppSelector((store) => store.weather)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getSearchSuggestions())
    }, [searchQuery])

    return (
        <div className={styles.container}>
            <InputField />
            {isDropDownOpen && <SearchSuggestions />}
            <Time />
        </div>
    )
}

export default SearchArea
