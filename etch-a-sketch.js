// Creating 256 divs to use as 16x16 divs


for (let i = 0; i < 256; i++ ) {
    let gridDiv = document.createElement('div');
    gridDiv.className = "grids"
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





