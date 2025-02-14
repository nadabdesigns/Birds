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
	console.log('THIS IS DATA', data)
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


// Then our big function for specific-block-type rendering:
let renderBlock = (block) => {
	// To start, a shared `ul` where we’ll insert all our blocks
	let channelBlocks = document.querySelector('#channel-blocks')

	// console.log("block",block);

	// Links!
	if (block.class == 'Link') {
		// console.log(block)
		let linkItem =
			`
			<li class="block block--link">
				<p><em>Link</em></p>
				<picture>
					<source media="(max-width: 428px)" srcset="${block.image.thumb.url}">
					<source media="(max-width: 640px)" srcset="${block.image.large.url}">
					<img src="${block.image.original.url}">
				</picture>
				<h3>${block.title}</h3>
				<p class="date">${block.created_at}<p>
				<p><a href="${block.source.url}">See the original ↗</a></p>
			</li>
			`
		channelBlocks.insertAdjacentHTML('beforeend', linkItem)
	}

	// Images!
	// cecking block to see if it's an image
	else if (block.class == 'Image') {
		
		// create image
		let imageItem =
		
			`
			<img src="${block.image.large.url}" alt="${block.title} by ${block.user.full_name}">
			<figcaption> ${block.title}</figcaption>

			`
			channelBlocks.insertAdjacentHTML('beforeend', imageItem)
	}

	// Text!

	else if (block.class == 'Text') {
		console.log(block)
		console.log("i'm a block")
		let textItem =
		`<p class="block block--text">
		${block.content_html}
		
		</p>
		`
		// inserting text block above html
		channelBlocks.insertAdjacentHTML('beforeend', textItem)
		// …up to you!
	}

	// Uploaded (not linked) media…
	else if (block.class == 'Attachment') {
		let attachment = block.attachment.content_type // Save us some repetition

		// Uploaded videos!
		if (attachment.includes('video')) {
			// …still up to you, but we’ll give you the `video` element:
			let videoItem =
				`
				<li>
					<p><em>Video</em></p>
					<video controls src="${block.attachment.url}"></video>
				</li>
				`
			channelBlocks.insertAdjacentHTML('beforeend', videoItem)
			// More on video, like the `autoplay` attribute:
			// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
		}

		// Uploaded PDFs!
		else if (attachment.includes('pdf')) {
			console.log('pdf',block)
			let PDFItem =

				`
				
					<p>${block.generated_title}></p>
				
				`
			// …up to you!
		}

		// Uploaded audio!
		else if (attachment.includes('audio')) {
			// …still up to you, but here’s an `audio` element:
			console.log('audio',block)
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
		console.log('Media',block)
		let embed = block.embed.type

		// Linked video!
		if (embed.includes('video')) {
			// …still up to you, but here’s an example `iframe` element:
			let linkedVideoItem =
				`
				<li>
					<p><em>Linked Video</em></p>
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






// Now that we have said what we can do, go get the data:
fetch(`https://api.are.na/v2/channels/${channelSlug}?per=100`, { cache: 'no-store' })
	.then((response) => response.json()) // Return it as JSON data
	.then((data) => { // Do stuff with the data
		console.log("data",data) // Always good to check your response!
		placeChannelInfo(data) // Pass the data to the first function



		// Loop through the `contents` array (list), backwards. Are.na returns them in reverse!
		data.contents.reverse().forEach((block) => {
			// console.log(block) // The data for a single block
			renderBlock(block) // Pass the single block data to the render function
		})

		// Also display the owner and collaborators:
		// let channelUsers = document.querySelector('#channel-users') // Show them together
		// data.collaborators.forEach((collaborator) => renderUser(collaborator, channelUsers))
		// renderUser(data.user, channelUsers)
	})



