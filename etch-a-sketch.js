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
    this.style.backgroundColor = "gray"
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
    this.style.backgroundColor = "gray"
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
  





