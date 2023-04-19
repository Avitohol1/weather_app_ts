import { useAppDispatch, useAppSelector } from "../../../store/store"
import { handleMainParams, setLocation } from "../../../store/weatherSlice"
import { Location } from "../../../types/Location"
import styles from "./SearchSuggestions.module.scss"
import Flag from "react-world-flags"

const SearchSuggestions = () => {
    const { searchSuggestions } = useAppSelector((store) => store.weather)
    const dispatch = useAppDispatch()

    const handleLocationClick = (id: number) => {
        const location: Location = searchSuggestions.find((el: Location) => el.id === id)!
        if (location) {
            dispatch(
                handleMainParams({
                    latitude: location.latitude,
                    longitude: location.longitude,
                })
            )
            dispatch(setLocation(location))
        }
    }

    return (
        <ul className={styles.container}>
            {searchSuggestions?.length > 0 ? (
                searchSuggestions.map((el: Location) => {
                    const { id } = el
                    return (
                        <li
                            className={styles.searchResult}
                            key={id}
                            onClick={() => handleLocationClick(id)}
                        >
                            <Flag code={el.country_code} width={18} />
                            <article className={styles.countryText}>
                                <span className={styles.city}>{el.name}</span>,
                                <span className={styles.country}> {el.country_code}</span>
                            </article>
                        </li>
                    )
                })
            ) : (
                <></>
            )}
        </ul>
    )
}

export default SearchSuggestions
