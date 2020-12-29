// Do Not Remove !
/* w3s-jvscrpt-brwsr-index.html
https://kjrm209.github.io/w3schools/w3s-jvscrpt-brwsr-index.html

JS Examples ~ JS Browser
https://www.w3schools.com/js/js_ex_browser.asp
*/

/*  JS Browser ~ Timing ~ A clock created with a timing event
https://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock
*/

function startTime() {
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
    m = checkTime(m)
    s = checkTime(s)

    document.getElementById('hrs-mins-secs').innerHTML = h + ":" + m + ":" + s
    var t = setTimeout(startTime, 500)
}

function checkTime(i) {
    if (i<10) {i = "0" + i}
    return i
}



/*  JS Browser ~ History Object ~ Create a back button on a page
https://www.w3schools.com/js/tryit.asp?filename=tryjs_history_back
*/

function previousPage() {
    window.history.back()
}



/*JS Browser ~ History Object ~ Create a back button on a page
https://www.w3schools.com/js/tryit.asp?filename=tryjs_history_forward 
*/

function nextPage() {
    windows.history.forward()
}
