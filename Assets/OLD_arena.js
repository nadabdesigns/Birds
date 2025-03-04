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
			`
			<li class="grid-item block block--link">
				<p><em>Link</em></p>
				// giving a class to my grid pictures 
				<picture class="grid-picture">
					<source media="(max-width: 428px)" srcset="${block.image.thumb.url}"><br>
					<source media="(max-width: 640px)" srcset="${block.image.large.url}"><br>
					<img src="${block.image.original.url}">
				</picture>
			
				<p class="date">${block.created_at}<p>
				<p><a href="${block.source.url}">See the original ↗</a></p>
			</li>
			
			`
		// <h3>${block.title}</h3>
		channelBlocks.insertAdjacentHTML('beforeend', linkItem)
	}

	// Images!



	// cecking block to see if it's an image
	else if (block.class == 'Image') {
		let imageItem =
	
		`
		<button>
		<img src="${block.image.large.url}" alt="${block.title} by ${block.user.full_name}">
		 <figcaption> ${block.title}</figcaption>
		</button>
		<dialogue></dialogue>

		`
		channelBlocks.insertAdjacentHTML('beforeend', imageItem)
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
		let modal = document.querySelector('#dialog') // Now one for our `dialog`.
		let modalImage = document.querySelector('#dialogImage');
		let closeButton = modal.querySelector('.close')
	
		button.onclick = () => { // “Listen” for clicks.
			modal.show() // This opens it up.
			modalImage.src = block.image.large.url;
			console.log("clicked")
			bigSun.classList.add("white-background");//make other circle witw
			
		}
		
	
		closeButton.onclick = () => {
			modal.close() // And this closes it!
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
		
	}
	// Make a button for images from Lume
	else if (block.class == 'Image') {

		// 	// create image
		console.log('imageeeeee')
		
	
		}
		
		

	// time to use this on a specific SVG but using a different varable
	// else if (block.class == 'Image') {

		
	// 	let imageItem =

	// 		`
	// 		<img src="${block.image.large.url}" alt="${block.title} by ${block.user.full_name}">
	// 		 <figcaption> ${block.title}</figcaption>

	// 		`
	// 		channelBlocks.insertAdjacentHTML('beforeend', imageItem)
	// 	}


	// Text!

	else if (block.class == 'Text') {
		// console.log(block)
		// console.log("i'm a block")
		let textItem =
			`
			<div class="textblock">
		<p class="firstText">${block.title}</p>
		<p>${block.content_html}</p>
		</div>
		
	
		`
		// inserting text block above html
		channelBlocks.insertAdjacentHTML('beforeend', textItem)
		// …up to you!
		// got his from MDN it's for a clicking action so i can get my pop up menues

		channelBlocks.addEventListener("click", (event) => {
			console.log('heehehhehe')


		});

		onclick = (event) => { };

	}

	// Uploaded (not linked) media…
	else if (block.class == 'Attachment') {
		// console.log(block)
		let attachment = block.attachment.content_type // Save us some repetition

		// Uploaded videos!
		console.log('im special')
		if (attachment.includes('video')) {
			// …still up to you, but we’ll give you the `video` element:

			let videoItem =
				`
				<p>${block.title || block.generated_title}></p>
				<div class='UploadedVideoBlock'>

					
					<video controls src="${block.attachment.url}"></video>
				</li>
				`
			// <p><em>${block.title || block.generated_title}</em></p>
			channelBlocks.insertAdjacentHTML('beforeend', videoItem)
			// More on video, like the `autoplay` attribute:
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
		}

		// Uploaded PDFs!

		else if (attachment.includes('pdf')) {
			// console.log('pdf', block)

			let PDFItem =

				`
		
		
					<p>${block.title || block.generated_title}></p>
				
				`
			// …up to you!
		}

		// Uploaded audio!
		else if (attachment.includes('audio')) {
			// …still up to you, but here’s an `audio` element:
			// console.log('audio', block)
			let audioItem =
				`
				<li>
					<audio controls src="${block.attachment.url}"></audio>
					<p>${block.title}</p>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', audioItem)
			// More on audio: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
		}
	}

	// Linked media…

	else if (block.class == 'Media') {
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


		// Linked audio!
		else if (embed.includes('rich')) {
			// …up to you!
		}
	}
}
// from lume
let ineraction = () =>{
	console.log()
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