import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { getWeather } from "../../../store/weatherSlice"
import UnitsButton from "../../atoms/UnitsButton/UnitsButton"
import SearchArea from "../../molecules/SearchArea/SearchArea"
import styles from "./Search.module.scss"

const Search = () => {
    const { searchQuery, mainParams } = useAppSelector((store) => store.weather)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (searchQuery.length > 2) {
            dispatch(getWeather())
        }
    }, [mainParams])

    return (
        <section className={styles.container} id="search">
            <SearchArea />
            <UnitsButton />
        </section>
    )
}

export default Search
