import { useAppDispatch, useAppSelector } from "./store/store"
import { useEffect } from "react"
import { getSearchSuggestions, toggleDropdown } from "./store/weatherSlice"
import Search from "./components/organisms/Search/Search"
import CurrentWeather from "./components/organisms/CurrentWeather/CurrentWeather"
import Forecast from "./components/organisms/Forecast/Forecast"
import Loader from "./components/atoms/Loader/Loader"

const App = (): JSX.Element => {
    const { searchQuery, isLoading, weatherData } = useAppSelector(
        (store) => store.weather
    )
    const dispatch = useAppDispatch()

    useEffect(() => {
        const checkClickLocation = (e: any) => {
            const arr = [...e.composedPath()]
            const isSearch: boolean = arr.some((el) => {
                if (el.id) {
                    if (el.id.includes("search") || el.id.includes("searchResult")) {
                        return false
                    }
                }
            })
            dispatch(toggleDropdown(isSearch))
        }

        document.body.addEventListener("click", checkClickLocation)
        return () => {
            document.body.removeEventListener("click", checkClickLocation)
        }
    }, [])

    useEffect(() => {
        dispatch(getSearchSuggestions())
    }, [searchQuery])

    return (
        <main>
            <Search />
            {isLoading ? (
                <section className="weather-container">
                    <Loader />
                </section>
            ) : (
                <section className="weather-container">
                    {Object.keys(weatherData).length !== 0 ? <CurrentWeather /> : <></>}
                    {Object.keys(weatherData).length !== 0 ? <Forecast /> : <></>}
                </section>
            )}
        </main>
    )
}

export default App
