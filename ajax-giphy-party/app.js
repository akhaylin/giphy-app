"use strict";

/**
 * This asynchronus function uses user input from DOM to search for a gif
 * uses fetch to interact with Giphy API and returns the JSON Data
 * calls displayGif to handle data and show on page
 */
async function getGif(evt) {
  evt.preventDefault();

  const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';//TODO: make api key a global variable
  const gifName = $('#gif-input').val(); //more accurate variable would be searchName

  const params = new URLSearchParams({ q: gifName, api_key: apiKey });

  let response = await fetch(`https://api.giphy.com/v1/gifs/search?${params}`);
  let jsonText = await response.json();//change variable to gifData

  displayGif(jsonText);
}

/** displayGif takes an object with Giphy response data
 * locates the url of the searched Gif
 * creates an IMG element using found Gif URL
 * appends the IMG element to the gif area of the dom
 */
//TODO:Get a different gif after searching for the same one look for random endpoint in documents
function displayGif(obj) {//change obj variable to something more descriptive
  //TODO:Make obj.data[0].images.original.url a jquery object here
  //$('<img>',{src:obj.data[0].images.original.url})
  let t = `<img src=${obj.data[0].images.original.url}>`;
  $('#gif-area').append($(t));
}

/**
 * Clears all Gif's from the DOM
 */
function removeGifs() {
  const $gifArea = $('#gif-area'); //TODO:Make this a global variable

  $gifArea.empty();
}

$('#submit-button').on("click", getGif);
$('#delete-button').on("click", removeGifs);


