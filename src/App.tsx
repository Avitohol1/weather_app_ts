import { useAppDispatch, useAppSelector } from "./store/store"
import { useState, useEffect } from "react"
import { toggleDropdown } from "./store/weatherSlice"
import Search from "./components/organisms/Search/Search"
import Forecast from "./components/organisms/Forecast/Forecast"
import Loader from "./components/atoms/Loader/Loader"
import MainWeather from "./components/molecules/MainWeather/MainWeather"
import { setSlides } from "./store/carouselWidthSlice"

const App = (): JSX.Element => {
    const { isLoading, daily } = useAppSelector((store) => store.weather)
    const [screenWidth, setScreenWidth] = useState<number>(0)
    const dispatch = useAppDispatch()

    useEffect(() => {
        // Check where user clicks
        const checkClickLocation = (e: any) => {
            const arr = [...e.composedPath()] // returns objects in the event path
            const isSearch: boolean = arr.some((el) => {
                if (el.id) {
                    // if user clicks on the input field or a search result do not close dropdown
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
        // Setting the number of forecast slides dynamically
        // based on screen size
        const updateScreenWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener("resize", updateScreenWidth)

        updateScreenWidth()

        if (screenWidth <= 468) {
            dispatch(setSlides(3))
        } else if (screenWidth > 468 && screenWidth <= 768) {
            dispatch(setSlides(4))
        } else if (screenWidth > 768 && screenWidth <= 900) {
            dispatch(setSlides(5))
        } else if (screenWidth > 900) {
            dispatch(setSlides(6))
        }

        return () => {
            window.removeEventListener("resize", updateScreenWidth)
        }
    }, [screenWidth])

    return (
        <main>
            <Search />
            {isLoading ? (
                <section className="weather-container">
                    <Loader />
                </section>
            ) : Object.keys(daily).length !== 0 ? (
                <section className="weather-container">
                    <MainWeather />
                    <Forecast />
                </section>
            ) : (
                <></>
            )}
        </main>
    )
}

export default App
