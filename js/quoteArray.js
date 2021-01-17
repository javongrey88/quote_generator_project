/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

//This array holds multiple objects for the quote generator. Objects include quotes and associated information
const quotes = [
{quote: 'We all make choices in life, but in the end our choices make us.',
character: 'Andrew Ryan',
citation: 'Bioshock',
year: 'August 21, 2007',
image: 'character_images/andrew_ryan.png'
},
{quote: 'What is better? To be born good or to overcome your evil nature through great effort?',
character: 'Paarthurnax',
citation :'Elders Scrolls V',
year: 'November 11, 2011',
image: 'character_images/paarthunax.png'
},
{quote: 'The right man in the wrong place can make all the difference in the world.',
character: 'G-Man',
citation: 'Half-Life 2',
year: 'November 16, 2004',
image: 'character_images/gMan.png'
},
{quote: 'Wanting something does not give you the right to have it.',
character: 'Ezio Auditore',
citation: 'Assasins Creed 2',
year: 'November 17, 2009',
image: 'character_images/ezio_auditore.png'
},
{quote: 'Even in dark times, we cannot relinquish the things that make us human.',
character: 'Khan',
citation: 'Metro 2033',
year: 'March 16, 2010',
image: 'character_images/khan.png'
},
{quote: `It's a funny thing, ambition. It can take one to sublime heights or harrowing depths. 
        And sometimes they are one and the same.`,
character: 'Emily Kaldwin',
citation: 'Dishonored',
year: 'October 9, 2012',
image: 'character_images/emily_kaldwin.png'
},
{quote: 'A hero need not speak. When they are gone, the world will speak for them.',
character: 'anonymous',
image: 'character_images/masterchief.png'
},
{quote: `Some trees flourish, others die. Some cattle grow strong, others are taken by the wolves.
          Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair.`,
character: 'John Marston',
citation: 'Red Dead Redemption',
year: 'May 18, 2010',
image: 'character_images/john_marston.png'
},
{quote: `Life is cruel. Of this I have no doubt. One can only hope that one leaves behind
          a lasting legacy. But so often, the legacies we leave behind...are not the ones
          we intended.`,
character: 'Queen Myrrah',
citation: 'Gears of War 2',
year: 'November 7, 2008',
image: 'character_images/queen_myrrah.png'
},
{quote: 'If our lives are already written, it would take a courageous man to change the script.',
character: 'Alan Wake',
image: 'character_images/alan_wake.png'
},
{quote: `Don't wish that it were easier, wish you were better.`,
character: 'chief',
citation: 'Animal Crossing',
year: '2001',
image: 'character_images/chief.png'
},
{quote: `It is only when you fall that you learn whether you can fly.`,
character: 'Flemeth',
citation: 'Dragon Age 2',
year: 'March 8, 2011',
image: 'character_images/flemeth.png'
},
{quote: `NOTHING IS MORE BADA$$ THAN TREATING A WOMAN WITH RESPECT!`,
character: 'Mr. Torgue',
citation:'Borderlands 2',
year: 'September 18, 2012',
image: 'character_images/mr_torgue.png'
},
{quote: `Good people mean well. We just don't always end up doing well.`,
character: 'Isaac Clarke',
citation:'Dead space 3',
year: 'February 5, 2013',
image: 'character_images/isaac_clarke.png'
},
{quote: `Often when we guess at others' motivations, we reveal only our own.`,
character: 'Mara Sov',
citation:'Destiny',
year: 'September 9, 2014',
image: 'character_images/mara_sov.png'
},
{quote: 'Life is all about resolve. Outcome is secondary.',
character: 'Waka',
image: 'character_images/Waka.png'
},
{quote: 'Steel wins battles. Gold wins wars.',
character: 'Davion the Dragon Knight',
citation:'DOTA 2',
year: 'July 9, 2013',
image: 'character_images/davion_the_dragon_knight.png'
},
{quote: `Science isn't about why! It's about why not!`,
character: 'Cave Johnson',
citation:'Portal 2',
year: 'April 18, 2011',
image: 'character_images/cave_johnson.png'
},
{quote: 'Does this unit have a soul?',
character: 'Legion',
citation:'Mass Effect 3',
year: 'March 6, 2012',
image: 'character_images/legion.png'
},
{quote: `It's more important to master the cards you're holding than to complain about
          the ones your opponents were dealt.`,
character: 'Grimsley',
image: 'character_images/grimsley.png'
}
];





