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

/*function f1()
{N=parseInt(document.getElementById('tx1').value);

 while(N>0)
 {P=N;
  N=N-2;
  P=P*N;
 }
 document.getElementById('tx3').value=P;
}*/
function f1()
{N=parseInt(document.getElementById('tx1').value);
fac = 1 ;
i = 0 ;
 while(N>i)
 {i += 1
     fac = fac*fac * i }
 document.getElementById('tx3').value=fac}

 
 
