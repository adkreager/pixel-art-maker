let selectedColor = 'White';

let colorOptions = ['DarkRed', 'Red', 'Salmon', 'DarkOrange', 'Orange', 'LightSalmon',
 'Khaki', 'Yellow', 'LightGoldrenrodYellow', 'LimeGreen', 'MediumSpringGreen', 'PaleGreen',
  'DarkBlue', 'Blue', 'CornFlowerBlue', 'Indigo', 'BlueViolet', 'MediumPurple', 'DarkViolet',
   'DarkMagenta', 'MediumOrchid', 'Black', 'DimGray', 'Gray', 'Silver', 'LightGray', 'White',
    '#39322F', '#554B46', '#71635C', '#7F7068', '#8D7C74'];

document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < colorOptions.length; i++) {
        let newButton = document.createElement('button');
        newButton.class="color-option";
        newButton.style.backgroundColor = colorOptions[i];
        document.querySelector('#palette').appendChild(newButton);
    }
});