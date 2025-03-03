
// Want to click on item and then have it appear in the div when it's an image
// set the class div for the images 
// assign div with a class link 
// create div logic
// Set up our variables.

// example from class
console.log("Script is running!");
let highlightClass = 'highlight' // “Strings” (like a class name) are wrapped in quotes.
let textBlock = document.querySelector('#bigSun') // Any selector.
let switchButton = document.querySelector('#bigSun') // change this if you want somthing elese to trigger it 

switchButton.onclick = () => { // “Listen” for clicks.
	textBlock.classList.toggle(highlightClass) // Toggle the class!
}

// how do i get it to click acording to the API



//  let imagelisten 
//  if imageName is clicked then display the same name of that imgage in the div

// first let see if we can get image inside the div