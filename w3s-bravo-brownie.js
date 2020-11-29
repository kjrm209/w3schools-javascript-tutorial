/* 
// Javascript Examples ~ Javascript Arrays ~ Access An Array Element
https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_element

// Javascript Examples ~ Javascript Arrays ~ Access A Full Array

https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_length

https://kjrm209.github.io/w3schools/w3s-bravo-arrays.html
*/

var cars = ["Saab", "Volvo", "BMW", "Volkswagen"]
document.getElementById("cars-indexes").innerHTML = cars[0]
document.getElementById("index-maximum").innerHTML = cars.length



/* 
// Javascript Examples ~ Javascript Arrays ~ Change An Array Element
https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_change

https://kjrm209.github.io/w3schools/w3s-bravo-arrays.html
*/
var fruits = ["Banana", " " + "Orange", " " + "Apple", " " + "Mango"]
document.getElementById("fruits-original").innerHTML = fruits
fruits [0] = "Kiwi"
fruits [2] = " " + "Pear"
document.getElementById("fruits-changed").innerHTML = fruits

