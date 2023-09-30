import { WeatherState } from "../types/WeatherState"

export const initialState: WeatherState = {
	searchQuery: "",
	isDropDownOpen: false,
	searchSuggestions: [],
	date: "",
	mainParams: {
		latitude: "",
		longitude: "",
		tempUnit: "celsius",
	},
	location: {
		id: 0,
		name: "",
		country: "",
		country_code: "",
		latitude: "",
		longitude: "",
		admin1: "",
	},
	hourly: {
		"": {
			weathercode: 0,
			temperature_2m: 0,
			precipitation_probability: 0,
		},
	},
	daily: {},
	activeTab: "hourly",
	selectedDay: 0,
	isLoading: false,
	msg: { text: "" },
}
