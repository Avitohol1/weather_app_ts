import UnitsButton from "../../atoms/UnitsButton/UnitsButton"
import SearchArea from "../../molecules/SearchArea/SearchArea"
import styles from "./Search.module.scss"

const Search = () => {
    return (
        <section className={styles.container} id="search">
            <SearchArea />
            <UnitsButton />
        </section>
    )
}

export default Search
