export const getSuggestions = (inputValue, locations) => {
    if (inputValue.length >= 2) {
        const filteredSuggestions = locations.filter((location) => 
            location.name.toLowerCase().includes(inputValue.toLowerCase())
        )
        return filteredSuggestions.map((location) => location.name)
    } else {
        return []
    }
}