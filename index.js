

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

function changeDivBG(e){
    e.target.style.backgroundColor = 'blue';
}

const clearBtn = document.querySelector('.clearBtn');
clearBtn.addEventListener('click', newGridSize);

function newGridSize(e){
    var newGridSize = prompt("Please select number of squares per side", "64");
    if (newGridSize > 100){
        newGridSize = prompt("Maximum of 100 squares per side");
    }
    if (newGridSize != null){
        const canvasDiv = document.querySelector('.canvasDiv');
        // clear grid --there is an issue with it--
        for (i < 0; i < canvasDiv.children.length; i++) {
            canvasDiv.removeChild(canvasDiv.firstChild);
        }
        // set new grid
        const newTotalGrid = newGridSize * newGridSize;
        setGridSize(newTotalGrid);
        canvasDiv.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
    }
}

setGridSize(256);