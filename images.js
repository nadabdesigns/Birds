// This allows us to process/render the descriptions, which are in Markdown!
// More about Markdown: https://en.wikipedia.org/wiki/Markdown
let markdownIt = document.createElement('script')
markdownIt.src = 'https://cdn.jsdelivr.net/npm/markdown-it@14.0.0/dist/markdown-it.min.js' //render markdown
document.head.appendChild(markdownIt)



// Okay, Are.na stuff!
// Declaring a vrible
// varible name is channelSlug it's assigned it to typogrphy-and-ineraction-too
// signle quates are a string
// channel slug is refericeing arena channel
// this is my channel ideifyer 
let channelSlug = 'project-4-birds' // The “slug” is just the end of the URL


// First, let’s lay out some *functions*, starting with our basic metadata:
let placeChannelInfo = (data) => {
	// data is everything 
	// console.log('THIS IS DATA', data)
	// Target some elements in your HTML:
	let channelTitle = document.querySelector('#channel-title')
	let channelDescription = document.querySelector('#channel-description')
	// let channelCount = document.querySelector('#channel-count')
	// let channelLink = document.querySelector('#channel-link')

	// Then set their content/attributes to our data:
	channelTitle.innerHTML = data.title
	channelDescription.innerHTML = window.markdownit().render(data.metadata.description) // Converts Markdown → HTML
	// channelCount.innerHTML = data.length
	// channelLink.href = `https://www.are.na/channel/${channelSlug}`
}

// let channelBlocks = document.querySelector('#birds-top-left')

// channelBlocks.addEventListener(image)



//  document.getElementById (birds-top-left)

// Then our big function for specific-block-type rendering:
let renderBlock = (block) => {
	
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.querySelector('#all-blocks');


	// console.log("block", block);

	// Links!
	if (block.class == 'Link') {
		// console.log(block)
		// all pictures that are links
		let linkItem =
		`<div class="image-bloc">
		<button class ="buttonClass">
		<picture class="grid-picture">
					<source media="(max-width: 428px)" srcset="${block.image.thumb.url}"><br>
					<source media="(max-width: 640px)" srcset="${block.image.large.url}"><br>
					<img src="${block.image.original.url}">

				</picture>
				<p class="date">${block.created_at}<p>
				<p><a href="${block.source.url}">See the original ↗</a></p>
		</button>
		<dialogue></dialogue>
		</div>

		`
		// <h3>${block.title}</h3>
		channelBlocks.insertAdjacentHTML('beforeend', linkItem)
	}



	// Images!



	// cecking block to see if it's an image
	// else if (block.class == 'Image') {
	// 	let imageItem =
	
	// 	`<div class="image-bloc">
	// 	<button class ="buttonClass">
	// 	<img src="${block.image.large.url}" alt="${block.title} by ${block.user.full_name}">
	// 	 <figcaption> ${block.title}</figcaption>
	// 	</button>
	// 	<dialogue></dialogue>
	// 	</div>

	// 	`
	// 	channelBlocks.insertAdjacentHTML('beforeend', imageItem)
		// style stuff here
		// How to target a specif image...
		// went to the learning center the showed me this...
		// when you come across and image let it be a class of it's own (grid item)
		// we have to add the src ( where is the image being fetched)

		// declaring a varible called dots
		
		// sorce is where you would place the url
		// alt is the alt if the image doesnt display 
		// if the image has a title it will use block.title and if not it will be Bird image
		// opinging a caption and closing it with the name
		// let imageItem =
		// 	`
		//   <div class="grid-item">
		//     <img src="${block.image.large.url}
		// 	" alt="${block.title || 'Bird image'}">
		//    ${block.title ? `<figcaption>${block.title}</figcaption>` : ''} 
		//   </div>
		//   `
		// channelBlocks.insertAdjacentHTML('beforeend', imageItem)
		//  went to tutoring and they showed me how to do this
		// we are declaring a varible callled imageItem
		// we are placing inside of a div clAA GIRD-ITEM
		// a onclick event that displays the block title or untitled 
		//  on click go to the console and print the name of the image 
		// send and alert with block title or untilted 
		//   \\n - this means make it a new line
		// the block has a property called created_at (this is the date it was created at )
		// .to LocaleDateString - fomating the date for when we see it as 
		// on a different linke we displayed the full name of the block 
		// arena displays the name of the user who created the image originally
		// all titles 
		



		// create and image 
		// if the block title is not equal to  donts.svg then run the following fuction 
		let button = document.querySelector('#example')
		
	
		
		
	
		
		
	}
	

// from lume
let ineraction = () =>{
	console.log()
	let imageBlocks = document.querySelectorAll ('.image-bloc')
	imageBlocks.forEach((block)=> {
		let openButton = block.querySelector('button')
		let modal = document.querySelector('#dialog') // Now one for our `dialog`.
		let modalImage = document.querySelector('#dialogImage');
		let closeButton = modal.querySelector('.close')



// lisen for button click
openButton.onclick = () =>{
	// dialog.showModal()
	console.log(modalImage.src)
	modal.show() // This opens it up.
	// switch out the sorce with image that was clicked
	modalImage.src = block.querySelector("img").src;

	console.log("clicked")
	bigSun.classList.add("white-background");//make other circle witw

	



}
closeButton.onclick = () => {
	modal.close() // this closes it!
	bigSun.classList.remove("white-background")
	
}
modal.addEventListener("close", () => {
	bigSun.style.backgroundColor = ""; // Reset to original background
});

modal.onclick = (event) => { // Listen on our `modal` also…
	if (event.target == modal) { // Only if clicks are to itself (the background).
		modal.close() // Close it then too.
	}
}


	})
}




// Now that we have said what we can do, go get the data:
fetch(`https://api.are.na/v2/channels/${channelSlug}?per=100`, { cache: 'no-store' })
	.then((response) => response.json()) // Return it as JSON data
	.then((data) => { // Do stuff with the data
		// console.log("data", data) // Always good to check your response!
		placeChannelInfo(data) // Pass the data to the first function



		// Loop through the `contents` array (list), backwards. Are.na returns them in reverse!
		data.contents.reverse().forEach((block) => {
			// console.log(block) // The data for a single block
			renderBlock(block) // Pass the single block data to the render function
		})
		// from lume
		ineraction()

		// Also display the owner and collaborators:
		// let channelUsers = document.querySelector('#channel-users') // Show them together
		// data.collaborators.forEach((collaborator) => renderUser(collaborator, channelUsers))
		// renderUser(data.user, channelUsers)
	})