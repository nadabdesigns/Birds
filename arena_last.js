
// Want to click on item and then have it appear in the div when it's an image
// set the class div for the images 
// assign div with a class link 
// create div logic
// Set up our variables.

// example from class---------!
// console.log("Script is running!");
// let highlightClass = 'highlight' // “Strings” (like a class name) are wrapped in quotes.
// let textBlock = document.querySelector('#bigSun') // Any selector.
// let switchButton = document.querySelector('#bigSun') // change this if you want somthing elese to trigger it 

// switchButton.onclick = () => { // “Listen” for clicks.
// 	textBlock.classList.toggle(highlightClass) // Toggle the class!
// }

// how do i get it to click acording to the API



//  let imagelisten 
//  if imageName is clicked then display the same name of that imgage in the div

// first let see if we can get image inside the div


// 


// varbile for block title and link it to a varible

// This is the same as before, setting up variables.

// This is the same as before, setting up variables.



// set up for if block title was clicked
// Convert block.title into a valid ID format
let safeTitle = block.title.replace(/\s+/g, '-').toLowerCase(); 

// Select the element using the sanitized title
let button = document.querySelector(`#${safeTitle}`); 
let modal = document.querySelector('#dialog'); // Select the modal

// Ensure the button exists before adding an event listener
if (button) { 
    button.onclick = () => { 
        modal.showModal(); // Open the modal
    };
}
// This is the same as before, setting up variables.
let query = document.querySelector('#example')
let modal = document.querySelector('#dialog') // Now one for our `dialog`.
let closeButton = modal.querySelector('.close') // Only looking within `modal`.



button.onclick = () => { // “Listen” for clicks.
	modal.showModal() // This opens it up.
}

closeButton.onclick = () => {
	modal.close() // And this closes it!
}

modal.onclick = (event) => { // Listen on our `modal` also…
	if (event.target == modal) { // Only if clicks are to itself (the background).
		modal.close() // Close it then too.
	}
}