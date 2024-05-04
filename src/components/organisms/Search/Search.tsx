import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { getWeather } from "../../../store/weatherSlice"
import UnitsButton from "../../atoms/UnitsButton/UnitsButton"
import SearchArea from "../../molecules/SearchArea/SearchArea"
import styles from "./Search.module.scss"

const Search = () => {
	const { searchQuery, mainParams, location } = useAppSelector((store) => store.weather)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (searchQuery.length > 2) {
			dispatch(getWeather())
		}
	}, [mainParams])

	return (
		<section className={styles.container} id="search">
			<SearchArea />
			{/* Hide units button on first render (when location.name is empty) */}
			{location.name ? <UnitsButton /> : <></>}
		</section>
	)
}

export default Search
