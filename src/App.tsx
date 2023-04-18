import { useAppDispatch, useAppSelector } from "./store/store"
import { useEffect } from "react"
import { getWeather, getSearchSuggestions, toggleDropdown } from "./store/weatherSlice"
import Search from "./components/organisms/Search/Search"

const App = (): JSX.Element => {
    const { mainParams, searchQuery } = useAppSelector((store) => store.weather)
    const dispatch = useAppDispatch()

    useEffect(() => {
        const checkClickLocation = (e: any) => {
            console.log(e.composedPath())
            const arr = [...e.composedPath()]
            const isSearch: boolean = arr.some((el) =>
                el.id ? el.id.includes("search") : false
            )
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
        </main>
    )
}

export default App
