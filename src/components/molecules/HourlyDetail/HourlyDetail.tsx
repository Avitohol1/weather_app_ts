import { useAppSelector } from "../../../store/store"
import weatherCodes from "../../../utils/weatherCodes"
import { CarouselProvider, Slider, Slide } from "pure-react-carousel"
import "pure-react-carousel/dist/react-carousel.es.css"

const HourlyDetail = () => {
    const { hourlyDetails } = useAppSelector((store) => store.weather)

    return <></>
}

export default HourlyDetail
