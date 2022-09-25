var APIKey = "039a6b45ccd3001c8a73a24f6fa09a96";

var city = "";

var searchSection = document.querySelector("#search");
var searchHistory = document.querySelector(".search-history");
var searchbtn = document.querySelector("#searchbtn");
var searchResult = document.querySelector("#search-form");
var historyArray = [];

var currentName = document.querySelector("#current-city");
var currentTemp = document.querySelector("#temp");
var currentWind = document.querySelector("#wind");
var currentHumidity = document.querySelector("#humidity");
var icon = document.querySelector("#icon");

var cardsContainer = document.querySelector("#cards-container");
var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");
var card4 = document.querySelector(".card4");
var card5 = document.querySelector(".card5");

// Gets the searchbtn to work with input
searchbtn.addEventListener("click", search);