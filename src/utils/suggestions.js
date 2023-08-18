export const getSuggestions = (inputValue, locations) => {

    function removeAccents(str) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    if (inputValue.length >= 2) {
        const filteredSuggestions = locations.filter((location) => 
            removeAccents(location.name.toLowerCase()).includes(removeAccents(inputValue.toLowerCase()))
        );
        
        return filteredSuggestions.map((location) => location.name);
    } else {
        return [];
    }
}