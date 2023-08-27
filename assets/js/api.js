'use strict';

const api_key = 'ac7f497ade7b29767a4f214c2f2587da';
const imageBaseURL = 'https://image.tmdb.org/t/p/';

//fetch data from a server using the 'url' and pass the result in JSON data to a 'callback' function, along with an optional parameter if has 'optionalParameter'


const fetchDataFromServer = function(url, callback, optionalParam) {
    fetch(url)
        .then(response => response.json())
        .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer};