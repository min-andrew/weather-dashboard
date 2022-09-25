// provides value of search and saves the history in the search history section 
function search(event) {
    if (!searchResult.value) {
        alert("Please enter a city!");
        return;
    };
    var comparison = historyArray.includes(searchResult.value)
    
    // if statement prevents repeats in the history section 
    if (comparison === false) {

        // saves the search result in local storage 
        localStorage.setItem('searchhistory', searchResult.value);
        var history = localStorage.getItem('searchhistory');
        historyArray.push(history);

        // creates the search history tabs
        var historyresults = document.createElement('button');
        historyresults.setAttribute("id", "historyResult " + searchResult.value);
        historyresults.textContent = history;
        searchHistory.append(historyresults);
        historyresults.addEventListener("click", research);
        
        // keeps the search history to 10 
        if (historyArray.length === 10) {
            historyArray.shift();
            if (searchHistory.firstElementChild.innerHTML = history) {
                searchHistory.firstElementChild.remove();
            }
        };

        city = searchResult.value;
        currentJumbo();
        weatherCards();
    } else if (comparison === true) {
        research();
    };
    event.preventDefault;
};

// Gets the searchbtn to work with input
searchbtn.addEventListener("click", search);