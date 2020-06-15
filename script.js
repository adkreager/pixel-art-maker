let selectedColor = 'White';

let colorOptions = ['DarkRed', 'Red', 'Salmon', 'DarkOrange', 'Orange', 'LightSalmon',
 'Khaki', 'Yellow', 'LimeGreen', 'MediumSpringGreen', 'PaleGreen',
  'DarkBlue', 'Blue', 'CornFlowerBlue', 'Indigo', 'BlueViolet', 'MediumPurple', 'DarkViolet',
   'DarkMagenta', 'MediumOrchid', 'Black', 'DimGray', 'Gray', 'Silver', 'LightGray', 'White',
    '#39322F', '#554B46', '#71635C', '#7F7068', '#8D7C74'];

document.addEventListener('DOMContentLoaded', function () {
    // creates color buttons based on colors in colorOptions array
    for (let i = 0; i < colorOptions.length; i++) {
        let newButton = document.createElement('button');
        newButton.class="color-option";
        newButton.style.backgroundColor = colorOptions[i];
        document.querySelector('#palette').appendChild(newButton);
    }

    let grid = document.getElementById('grid');
    for (let i = 0; i < 30; i++) {
        // let newPixel = document.createElement('div');
        // newPixel.className = 'pixel';
        let newRow = document.createElement('div');
        newRow.className = 'row';
        for (let j = 0; j < 30; j++) {
            let newPixel = document.createElement('div');
            newPixel.className = 'pixel';
            newPixel.id = 'pixel' + i + "-" + j;
            newPixel.onclick(function())
            newRow.appendChild(newPixel);
        }
        grid.appendChild(newRow);
    }
});

document.addEventListener('click', function () {
    let clickedPixel = 
})