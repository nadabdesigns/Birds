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
let channelSlug = 'typography-and-interaction-too' // The “slug” is just the end of the URL

let greetingPerson = (name) => {
console.log(`ello,${name}`)

}


// Now that we have said what we can do, go get the data:
fetch(`https://api.are.na/v2/channels/${channelSlug}?per=100`, { cache: 'no-store' })
	.then((response) => response.json()) // Return it as JSON data
	.then((data) => { // Do stuff with the data
		console.log(data) // Always good to check your response!
		// placeChannelInfo(data) // Pass the data to the first function

		// // Loop through the `contents` array (list), backwards. Are.na returns them in reverse!
		// data.contents.reverse().forEach((block) => {
		// 	// console.log(block) // The data for a single block
		// 	renderBlock(block) // Pass the single block data to the render function
		// })

		// // Also display the owner and collaborators:
		// let channelUsers = document.querySelector('#channel-users') // Show them together
		// data.collaborators.forEach((collaborator) => renderUser(collaborator, channelUsers))
		// renderUser(data.user, channelUsers)
	})
