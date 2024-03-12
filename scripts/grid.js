const gridDiv = document.getElementById('grid');
let dimensions = 4;

for(let i = 0; i < dimensions ; i++) {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add('grid-row');
  rowDiv.style.height = `${100/dimensions}%`;

  for(let j = 0; j < dimensions; j++) {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('grid-item');
    itemDiv.style.width = `${100/dimensions}%`;
    rowDiv.appendChild(itemDiv);
  }

  gridDiv.appendChild(rowDiv);
}