// import { quotes } from "quoteArray.js";

/***
 * `getRandomQuote` function
***/

function getRandomQuote(quoteArray) {
    let randomIndex = Math.floor(Math.random() * quoteArray.length);
    let returnQuote = quoteArray[randomIndex];
    return returnQuote;
   
  }
  
   
  
  /***
   * `printQuote` function
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
  console.log(printQuote());
  
  
  
  /***
   * click event listener for the print quote button
   * DO NOT CHANGE THE CODE BELOW!!
  ***/
  
  document.getElementById('load-quote').addEventListener("click", printQuote, false);