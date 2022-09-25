// for the search buttons in the history section to re-search a city 
function research() {
    var x = this.innerHTML;
    city = x;
    if (city === undefined){
        city = searchResult.value;
    };
    currentJumbo();
    weatherCards();
};