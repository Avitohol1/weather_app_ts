export type WeatherCodes = {
    [code: number]: {
        description: string
        icon: {
            [key: string]: JSX.Element
        }
    }
}
