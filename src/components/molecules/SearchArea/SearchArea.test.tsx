import { screen, render, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect } from "vitest"
import SearchArea from "./SearchArea"
import { Provider } from "react-redux"
import { store } from "../../../store/store"

describe("fetches search suggestions", () => {
    it("should type in input field", async () => {
        const user = userEvent.setup()
        render(
            <Provider store={store}>
                <SearchArea />
            </Provider>
        )
        const inputField = await screen.findByPlaceholderText(/search here/i)
        await user.type(inputField, "sofia")
        const inputVal = await waitFor(() => screen.findByDisplayValue("sofia"))
        expect(inputVal).toBeDefined()
    })
    it("should render search suggestions", async () => {
        render(
            <Provider store={store}>
                <SearchArea />
            </Provider>
        )
        const searchSuggestions = await waitFor(() =>
            screen.findByRole("search-suggestions")
        )
        expect(searchSuggestions).toBeDefined()
    })
})
