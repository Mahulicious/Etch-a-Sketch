// Creating 256 divs to use as 16x16 divs


for (let i = 0; i < 256; i++ ) {
    let gridDiv = document.createElement('div');
    gridDiv.className = "grids";
    let containerDiv = document.querySelector('.container');
    containerDiv.classList.add('makeGrid');
    containerDiv.append(gridDiv);
}

//Set up the hover effect 
const draws = document.querySelectorAll('.grids');
for (i=0; i < draws.length; i++) {
    draws[i].addEventListener('mouseenter', function() {
    this.style.backgroundColor = "black"
});
}






// Ask users for their input on how much grid to create

const promptBox = document.querySelector('.promptBtn');
promptBox.addEventListener('click', newGrid );

//Creates new grid of squares depending on users input
function newGrid () {

  // limit user input to 100 or less.
let promptbtn = prompt("Please enter numbers of square you want for sketch pad.");
while(promptbtn > 100 ) {
  alert("Too many squres! Please enter 100 or less squares per side.");
  promptbtn = prompt("Please enter numbers of square you want for sketch pad.");
}

const size = (100/promptbtn);
var div = document.querySelector('.container');   

  while(div.firstChild) {
     div.removeChild(div.firstChild);
   }

 for(i=0; i < promptbtn * promptbtn; i++) {
    
   let newGridDiv = document.createElement('div');
   newGridDiv.className = "grids";
   newGridDiv.style.width= size + '%';
   newGridDiv.style.height= size + '%';
   let newContainerDiv = document.querySelector('.container');
   newContainerDiv.classList.remove('makeGrid');
   newContainerDiv.append(newGridDiv);

 }

//Set up the hover effect for user's generated grid
const draws = document.querySelectorAll('.grids');
for (i=0; i < draws.length; i++) {
    draws[i].addEventListener('mouseenter', function() {
    this.style.backgroundColor = "black"
});
}

}

//clear the sketch pad

const clear = document.querySelector('.clearBtn');
clear.addEventListener('click', sketchClear);

function sketchClear() {
  const grid = document.querySelectorAll('.grids');
  for (i=0; i < grid.length; i++) {
  grid[i].style.backgroundColor = "transparent";
}
}
  
// Generate random background color

function generateRandomColor() {
  let x1 = Math.floor(Math.random() * 256);
  let x2 = Math.floor(Math.random() * 256);
  let x3 = Math.floor(Math.random() * 256);
  let generateColor = "rgb(" + x1 + "," + x2 + "," + x3 + ")";
  return generateColor;

}



const applyBtns = document.querySelector('#applyBtn');        
    const radioButtons = document.querySelectorAll('input[name="colors"]');
       applyBtns.addEventListener("click", () => {
         let selectedBtn;
         for (const radioButton of radioButtons) {
             if (radioButton.checked) {
                selectedBtn = radioButton.value;
                 break;
                }
            }
           console.log(selectedBtn);
    if(selectedBtn = "Rainbow Mode") {
      const rainbow = document.querySelectorAll('.grids');
      for (i=0; i < rainbow.length; i++) {
      rainbow[i].addEventListener('mouseenter', function() {
        console.log(generateRandomColor());
      this.style.backgroundColor = generateRandomColor();
});
}

           }
           
        });






