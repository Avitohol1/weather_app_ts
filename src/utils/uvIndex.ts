const uvIndex = (code: number): string => {
    if (code === 1 || code === 2) {
        return "low"
    }
    if (code > 2 && code < 6) {
        return "moderate"
    }
    if (code === 6 || code === 7) {
        return "high"
    }
    if (code > 7 && code < 11) {
        return "very high"
    }
    if (code >= 11) {
        return "extreme"
    }
    return "no valid code"
}

export default uvIndex
