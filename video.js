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





	// Images!



	// cecking block to see if it's an image





	if (block.class == 'Media') {
		// console.log('Media', block)
		let embed = block.embed.type

		// Linked video!
		console.log('hello')
		if (embed.includes('video')) {
			// …still up to you, but here’s an example `iframe` element:
			let linkedVideoItem =
				`
				
				<div class="VideoBlock">
					<p><${block.title || block.generated_title}</p>
					${block.embed.html}
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', linkedVideoItem)
			// More on iframe: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
		}



	}
}
// from lume
let ineraction = () => {
	console.log()
	let imageBlocks = document.querySelectorAll('.image-bloc')
	imageBlocks.forEach((block) => {
		let openButton = block.querySelector('button')
		let modal = document.querySelector('#dialog') // Now one for our `dialog`.
		let modalImage = document.querySelector('#dialogImage');
		let closeButton = modal.querySelector('.close')



		// lisen for button click
		openButton.onclick = () => {
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