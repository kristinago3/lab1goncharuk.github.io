/*function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; } 
*/
var curPosX = 0;
var curPosY = 0;
var interval;
var n = 10; // На сколько двигать за раз
var width = document.documentElement.clientWidth; // Ширина экрана
var height = document.documentElement.clientHeight; // Высота экрана
var imgWidth = 100; // Ширина картинки
var imgHeight = 100; // Высота картинки
var img1 = document.getElementById("img1");

function move() {
  img1.style.left = (curPosX += n) + "px";
  img1.style.top = (curPosY += n) + "px";
  if ((curPosX == (width - imgWidth)) || (curPosY == (height - imgHeight))) {
    clearInterval(interval);
  }
}
interval = setInterval(move, 100);
#img1 {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100px;
  height: 100px;
  background-color: #000000;
}
