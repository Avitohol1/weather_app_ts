import { useAppDispatch, useAppSelector } from "./store/store"
import { useEffect } from "react"
import { getWeather, getSearchSuggestions, toggleDropdown } from "./store/weatherSlice"
import Search from "./components/organisms/Search/Search"
import CurrentWeather from "./components/organisms/CurrentWeather/CurrentWeather"

const App = (): JSX.Element => {
    const { mainParams, searchQuery } = useAppSelector((store) => store.weather)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const checkClickLocation = (e: any) => {
            // console.log(e.composedPath())
            const arr = [...e.composedPath()]
            console.log(arr)
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

    useEffect(() => {
        if (searchQuery.length > 2) {
            dispatch(getWeather())
        }
        // if (weatherData) {
        // }
    }, [mainParams])

    return (
        <main>
            <Search />
            <CurrentWeather />
            <div className="current-weather"></div>
        </main>
    )
}

export default App
