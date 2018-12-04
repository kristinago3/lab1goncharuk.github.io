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
var n = 10;
var width = document.documentElement.clientWidth; 
var height = document.documentElement.clientHeight; 
var imgWidth = 50; 
var imgHeight = 50; 
var m1 = document.getElementById("m1");

function move() {
  m1.style.left = (curPosX += n) + "px";
  m1.style.top = (curPosY += n) + "px";
  if ((curPosX == (width - imgWidth)) || (curPosY == (height - imgHeight))) {
    clearInterval(interval);
  }
}
interval = setInterval(move, 100);
