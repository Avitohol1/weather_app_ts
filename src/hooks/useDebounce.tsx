import { useState, useEffect } from "react"

const useDebounce = <T,>(value: T, delay: number = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<T>()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [value, delay])

    return debouncedValue
}

export default useDebounce
