


//  
let button = document.querySelector(`#${block.title}`); // Select element by ID
let modal = document.querySelector('#dialog'); // Select the modal
let sunDiv = document.querySelector('#sunDiv'); // Select sunDiv




if (button) { 
    button.onclick = () => { 
        modal.showModal(); // Open the modal
        sunDiv.style.display = "none"; // Hide sunDiv
    };
}
