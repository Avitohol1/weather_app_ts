type DetailKey_1 =
	| "windspeed"
	| "apparent_temperature_max"
	| "apparent_temperature_min"
	| "sunrise"
	| "sunset"

type DetailsObj_1 = {
	[key in DetailKey_1]: {
		text: string
		key: DetailKey_1
		unit?: string
		uv_code?: number
	}
}

type DetailKey_2 =
	| "precipitation_probability_mean"
	| "rain_sum"
	| "snowfall_sum"
	| "uv_index_max"
	| "winddirection"

type DetailsObj_2 =
	| {
			[key in DetailKey_2]: {
				text: string
				key: DetailKey_2
				unit?: string
				uv_code?: number
			}
	  }

export type { DetailsObj_1, DetailsObj_2 }
