import { useAppDispatch, useAppSelector } from "./store/store"
import { useState, useEffect } from "react"
import { toggleDropdown } from "./store/weatherSlice"
import Search from "./components/organisms/Search/Search"
import Forecast from "./components/organisms/Forecast/Forecast"
import Loader from "./components/atoms/Loader/Loader"
import MainWeather from "./components/molecules/MainWeather/MainWeather"
import { setSlides } from "./store/carouselWidthSlice"
import Error from "./components/atoms/Error/Error"

const App = (): JSX.Element => {
	const { isLoading, daily, msg } = useAppSelector((store) => store.weather)
	const [screenWidth, setScreenWidth] = useState<number>(0)
	const dispatch = useAppDispatch()
	const isError = msg.type === "error"
	let content: JSX.Element = <></>

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

		// Cleanup function
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

	if (isError) {
		content = <Error text={msg.text} />
	}

	if (isLoading) {
		content = (
			<section className="weather-container">
				<Loader />
			</section>
		)
	}

	if (Object.keys(daily).length !== 0 && !isError) {
		content = (
			<section className="weather-container">
				<MainWeather />
				<Forecast />
			</section>
		)
	}

	return (
		<main>
			<h1>Weather App</h1>
			<Search />
			{content}
		</main>
	)
}

export default App
