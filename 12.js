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

function f(x) 
{var x=document.getElementById('In').value;
 var a = '1234567890';
 fff=1;
   for (var i = 0; i < x.length; i++)
   {
      b=x.charAt(i);
    alert(b);
    if(a.indexOf(b)<0)
     fff=0;
   }
 if(fff)
      {return 'Okay';}
   else
      {return 'Fail';}
 

}
