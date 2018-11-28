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
function leftArrowPressed() {
            var element = document.getElementById("img1");
            element.style.left = parseInt(element.style.left) - 5 + 'px';
            }

            function rightArrowPressed() {
            var element = document.getElementById("img1");
            element.style.left = parseInt(element.style.left) + 5 + 'px';

            }

            function upArrowPressed() {
            var element = document.getElementById("img1");
            element.style.top = parseInt(element.style.top) - 5 + 'px';
            }

            function downArrowPressed() {
            var element = document.getElementById("img1");
            element.style.top = parseInt(element.style.top) + 5 + 'px';
            }

            function moveSelection() {
                evt = evt || window.event; 
                switch (evt.keyCode) {
                    case 37:
                    leftArrowPressed();
                    break;
                    case 39:
                    rightArrowPressed();
                    break;
                    case 38:
                    upArrowPressed();
                    break;
                    case 40:
                    downArrowPressed();
                    break;
                    }
                };

        function gameLoop()
        {
          // change position based on speed
          moveSelection();
          setTimeout("gameLoop()",10);
        }
