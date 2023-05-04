import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux"
import weatherSlice from "./weatherSlice"
import carouselWidthSlice from "./carouselWidthSlice"

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        carouselWidth: carouselWidthSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> =
    useSelector
