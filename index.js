function changeColour() {
  var red = Math.floor(Math.random() * 255) + 1;
  var green = Math.floor(Math.random() * 255) + 1;
  var blue = Math.floor(Math.random() * 255) + 1;
  var rgbaValue = 'rgba(' + red + ',' + green + ',' + blue + ')';

  document.querySelector('#colorFlipper').style.backgroundColor = rgbaValue;

  console.log(rgbaValue);
}
