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
/*  JS Browser ~ Location Object ~ Return the path name of the current URL
https://www.w3schools.com/js/tryit.asp?filename=tryjs_loc_href
*/
//
document.getElementById("full-url").innerHTML = 
" <b> Please find appended below this statement is <br> the full-length <i> Uniform Resource Locator </i><br> ('URL') of this <i> Hyper Text Markup Language </i><br> ('HTML') document:- </b><br>" + window.location.href
//
//
//
/*  JS Browser ~ Timing ~ Simple Timing
https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing1
*/
//
function myGreetings() {
    alert("Hello!")
}
//
//
//
/*  JS Browser ~ Timing ~ Another Simple Timing
https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing2
*/
//
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
    document.getElementById('text-variable').innerHTML
    = "6 seconds have passed. You may now reload the <br> page to - once more - apply this paragraph's test."
}
//
//
//
/*  JS Browser ~ Timing ~ Timing event in an infinite loop
https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_infinite
*/
//
var c = 0

function myCounter() {
    document.getElementById("infinite-counter").innerHTML = ++c
}
//
//
//
