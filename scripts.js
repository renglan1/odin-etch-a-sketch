createGrid(4);
document.getElementById("adj-dimensions").addEventListener('click', () => {
  const newDimension = prompt('Please enter new dimension (max 100)');
  
  if(newDimension <= 100) {
    createGrid(newDimension);
  }
  else {
    alert('ERROR: New dimension exceeds 100');
  }
});

function createGrid(dimensions) {
  const gridDiv = document.getElementById("grid");
  gridDiv.innerHTML = '';

  for (let i = 0; i < dimensions; i++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("grid-row");
    rowDiv.style.height = `${100 / dimensions}%`;

    for (let j = 0; j < dimensions; j++) {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("grid-item");
      itemDiv.style.width = `${100 / dimensions}%`;
      itemDiv.addEventListener('mouseover', () => {
        itemDiv.style.backgroundColor = colorGen();
      })
      rowDiv.appendChild(itemDiv);
    }

    gridDiv.appendChild(rowDiv);
  }
}

function colorGen() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
