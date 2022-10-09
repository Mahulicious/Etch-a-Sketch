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

// Make grid lighter everytime this function is called
let x1 = 255;
let x2 = 255;
let x3 = 255;
function generateDarktoLight() {
 
   x1 = x1 - ((x1/100) * 10);
   x2 = x2 - (x2/100 * 10);
   x3 = x3 - (x3/100 * 10);
  
  let generateBlackColor = "rgb(" + x1 + "," + x2 + "," + x3 + ")";
  console.log(generateBlackColor);
  return generateBlackColor;
  

}
// Makes squares black if mouse passes through them 10 times
function generateBlackColor() {
  this.style.backgroundColor = "gray";
  let Opa = +this.style.opacity;
  if (Opa < 1) Opa += 0.1;
  this.style.opacity = Opa;
}


//Selects a radiobutton, returns value of selected button
//Assigns event listener based on selected value.

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
           
    if(selectedBtn === "Rainbow Mode") {
      sketchClear()
      const rainbow = document.querySelectorAll('.grids');
      for (i=0; i < rainbow.length; i++) {
      rainbow[i].addEventListener('mouseenter', function() {
      this.style.backgroundColor = generateRandomColor();
});
}
   } else if (selectedBtn === "Standard Mode") {
    sketchClear();
    const standard = document.querySelectorAll('.grids');
      for (i=0; i < standard.length; i++) {
      standard[i].addEventListener('mouseenter', generateBlackColor);
        
        
          
        
       
        
        
        

    

   }
 





  }
})
