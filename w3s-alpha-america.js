/* Javascript in <body>
https://www.w3schools.com/js/tryit.asp?filename=tryjs_whereto_body

https://kjrm209.github.io/w3schools/w3s-alpha-whereto.html
*/

function mysecondFunction() {
    document.getElementById("script-body-change-paragraph").innerHTML = "The Secondary Paragraph Is Changed."
}



/* Semcolons ;
https://www.w3schools.com/js/tryit.asp?filename=tryjs_statements_semicolon1

https://kjrm209.github.io/w3schools/w3s-alpha-statements.html
*/

var x, y, z
x = 5
y = 6
z = x + y

function algebraicFunction() {
    document.getElementById('algebra-arithmetic-addition').innerHTML = "The value of Z is " + z + "."
}



/*  Semicolons ;
https://www.w3schools.com/js/tryit.asp?filename=tryjs_statements_semicolon2

https://kjrm209.github.io/w3schools/w3s-alpha-statements.html
*/

var a, b, c
a = 5; b = 6; c = a + b;
document.getElementById('charlie').innerHTML = c;



/* JavaScript Code Blocks
https://www.w3schools.com/js/tryit.asp?filename=tryjs_statements_blocks 

https://kjrm209.github.io/w3schools/w3s-alpha-statements.html
*/

function myGreetingFunction() {
    document.getElementById("first-greeting").innerHTML = "Hello Dolly!"
    document.getElementById("second-greeting").innerHTML = "How are you?"
}



/* JavaScript Arrays
https://www.w3schools.com/js/tryit.asp?filename=tryjs_array

https://kjrm209.github.io/w3schools/w3s-alpha-arrays.html
*/
var cars = ["Saab", "Volvo", "BMW"];
document.getElementById('car-names').innerHTML = cars;
