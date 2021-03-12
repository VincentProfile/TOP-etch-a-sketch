

function setGridSize(totalGrid){
    const canvasDiv = document.querySelector('.canvasDiv');
    for (i=0; i<totalGrid; i++){
        const squareDiv = document.createElement('div');
        squareDiv.className = 'squareDiv';
        squareDiv.style.textAlign = 'center';
        squareDiv.addEventListener('mouseenter', changeDivBG);
        canvasDiv.appendChild(squareDiv);
    }
}

function randomRGB(){
    // random number between 0-255
    r = Math.floor(Math.random()*255);
    g = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    return [r,g,b];
}
function changeDivBG(e){
    // add random color to square div

    // const randomColor = randomRGB();
    // e.target.style.backgroundColor = `rgba(${randomColor[0]},${randomColor[1]},
    //         ${randomColor[2]})`;

    // add 10% black to current randomed color (by adjusting the opacity)
    const currentDivOpacity = Number(e.target.style.opacity);
    if (currentDivOpacity < 1){
        e.target.style.backgroundColor = `rgba(0, 0, 0)`;
        e.target.style.opacity = currentDivOpacity + 0.1;
    }

}

const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', newGridSize);

function newGridSize(e){
    var newGridSize = prompt("Please select number of squares per side", "64");
    if (newGridSize > 100){
        newGridSize = prompt("Maximum of 100 squares per side");
    }
    // check if input is valid
    if (newGridSize != null && newGridSize > 0){
        const canvasDiv = document.querySelector('.canvasDiv');
        // clear grid
        canvasDiv.innerHTML = '';
        // set grid
        const newTotalGrid = newGridSize * newGridSize;
        setGridSize(newTotalGrid);
        canvasDiv.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
    }
}

setGridSize(256);