import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type InitialState = {
    slides: number
}

const initialState: InitialState = {
    slides: 0,
}

const carouselWidthSlice = createSlice({
    name: "carouselWidth",
    initialState,
    reducers: {
        setSlides: (state, action: PayloadAction<number>) => {
            state.slides = action.payload
        },
    },
})

export default carouselWidthSlice.reducer
export const { setSlides } = carouselWidthSlice.actions
