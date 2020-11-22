var answer1 
= "It's human nature to feel happy and sad at the same time!"
var answer2 
= "He is known by name as 'John Doe'."
var answer3 
= 'He is known by name as "Johnny Depp".'

document.getElementById("strings-answers").innerHTML 
= answer1 + "<br>" +
  answer2 + "<br>" +
  answer3

var x1 
= 34.00
var x2 
= 34
var x3 
= 3.14

document.getElementById("numbers-decimals").innerHTML
= x1 + "<br>" + x2 + "<br>" + x3

var cars = ["Saab", "Volvo", "Ferrari"]

document.getElementById("arrays-saab").innerHTML 
= cars[0]
document.getElementById("arrays-volvo").innerHTML 
= cars[1]
document.getElementById("arrays-ferrari").innerHTML
= cars[2]

var person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
};

document.getElementById("objects-identifications").innerHTML
= person.firstName + " is " + person.age + " years old.";
