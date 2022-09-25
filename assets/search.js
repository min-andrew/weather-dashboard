// provides value of search and saves the history in the search history section 
function search() {
    var comparison = historyArray.includes(searchResult.value)
    if (comparison === false) {

        localStorage.setItem('searchhistory', searchResult.value);
        var history = localStorage.getItem('searchhistory');
        historyArray.push(history);

        // creates the search history tabs
        var historyresults = document.createElement('button');
        historyresults.setAttribute("id", "historyResult " + searchResult.value);
        historyresults.textContent = history;
        searchHistory.append(historyresults);
        historyresults.addEventListener("click", research);

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
};
