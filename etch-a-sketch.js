// Creating 256 divs to use as 16x16 divs


for (let i = 0; i < 256; i++ ) {
    let gridDiv = document.createElement('div');
    gridDiv.className = "grids";
    let containerDiv = document.querySelector('.container');
    containerDiv.append(gridDiv);
}





//Set up the hover effect 
const draws = document.querySelectorAll('.grids');
for (i=0; i < draws.length; i++) {
    draws[i].addEventListener('mouseenter', function() {
    this.style.backgroundColor = "gray"
});
}



const promptBox = document.querySelector('.promptBtn');
promptBox.addEventListener('click', newGrid );

//Creates new grid of squares depending on users input
function newGrid () {
const promptbtn = prompt("Please enter numbers of square you want for sketch pad.");
 for(i=0; i < promptbtn; i++) {
   let newGridDiv = document.createElement('div');
   newGridDiv.className = "grids";
   let newContainerDiv = document.querySelector('.container');
   newContainerDiv.append(newGridDiv);

 }
 //Note to my futre self, this code will add however many
 //divs to the already existing divs grid. 

}



