export const getSuggestions = (inputValue, locations) => {
    if (inputValue.length >= 2) {
        const filteredSuggestions = locations.filter((location) => 
            location.toLowerCase().includes(inputValue.toLowerCase())
        )
        return filteredSuggestions
    } else {
        return []
    }
}