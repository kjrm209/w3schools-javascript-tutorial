// Do Not Remove !
/* w3s-jvscrpt-brwsr-index.html
https://kjrm209.github.io/w3schools/w3s-jvscrpt-brwsr-index.html

W3Schools ~ JavaScript 
JS Examples ~ JS Browser
https://www.w3schools.com/js/js_ex_browser.asp
*/
//
//
//
/*  JS Browser ~ Timing ~ Simple Timing
https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing1
*/

function myGreetings() {
    alert("Hello!")
}
//
//
//
/*  JS Browser ~ Timing ~ Another Simple Timing
https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing2
*/

function timedText() {
    setTimeout(myTimeout1, 2000)
    setTimeout(myTimeout2, 4000)
    setTimeout(myTimeout3, 6000)
}

function myTimeout1() {
    document.getElementById('text-variable').innerHTML = "2 seconds have passed."
}

function myTimeout2() {
    document.getElementById('text-variable').innerHTML = "4 seconds have passed."
}

function myTimeout3() {
    document.getElementById('text-variable').innerHTML = "6 seconds have passed."
}
//
//
//
