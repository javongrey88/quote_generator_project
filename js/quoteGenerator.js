

/**
 * Generates a random quote from the quotes array in quoteArray.js.
 * 
 * @param {array} quoteArray - an array of objects.
 * @var {number} randomeIndex - retrieves a randome numerical value within the total length of the array.
 * @var {number} randomeQuote - stores the numerical value as an index value for the quoteArray.
 * returns the value of the quoteArray index
**/

function getRandomQuote(quoteArray) {
    let randomIndex = Math.floor(Math.random() * quoteArray.length);
    let returnQuote = quoteArray[randomIndex];
    return returnQuote;
   
  }
  
   
  
  /**
   * prints the contents of the quoteArray index to the browser.
   * 
   * @var {array} printRandomQuote - holds the value of the getRandomQuote function
   * @var {string} html - reserves a spot in memory to hold the html that will be printed to the browser.
   * The function has a condition that checks for a citation and year object. Different string literals are-
   * printed to the browser if the conditins are met.
   * returns the string literal stored in the html variable to the 'quote-box' button.
  ***/
  function printQuote() {
    let printRandomQuote = getRandomQuote(quotes);
    let html = ' ';
    // let generateQuote = document.querySelector('quote-box');
    if(printRandomQuote.citation && printRandomQuote.year) {
      html = `
      <p class='quote'>${printRandomQuote.quote}</p>
      <p class='source'>${printRandomQuote.character}
      <span class='citation'>${printRandomQuote.citation}</span>
      <span class='year'>${printRandomQuote.year}</span>
      <img class='quoteImage' src='${printRandomQuote.image}'>
      </p>
      `
    } else {
      html = `
      <p class='quote'>${printRandomQuote.quote}</p>
      <p class='source'>${printRandomQuote.character}
      <img class='quoteImage' src='${printRandomQuote.image}'>
      </p>
      `
    }
    return document.getElementById('quote-box').innerHTML = html; 
    // return main.innerHTML = html;
  }

  
  
  
  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW! 
  ***/
  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);