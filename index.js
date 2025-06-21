var table = document.querySelector("table")
const numCollumn = table.querySelector("tr").querySelectorAll("th").length

var collumns = table.querySelectorAll("th")
for (var i = 0; i < collumns.length; i++) {
  collumns[i].style.width = 100 / numCollumn + "px"
}

var mouseX, mouseY

function coordinate(event) {
  mouseX = event.clientX
  mouseY = event.clientY
}

var windows = document.querySelectorAll(".window")

function newDraggable(element) {
  var pos1, pos2, pos3, pos4

  element.querySelector("#win-header").onmousedown = drag

  function drag(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX; pos4 = e.clientY

    document.onmouseup = closeDrag
    document.onmousemove = move
    element.style.zIndex += 1
  }

  function move(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX; pos4 = e.clientY

    element.style.top = (element.offsetTop - pos2) + "px"
    element.style.left = (element.offsetLeft - pos1) + "px"
    if (element.offsetTop - pos2 < 0) element.style.top = "0px"
  }

  function closeDrag() {
    document.onmouseup = null
    document.onmousemove = null
  }
}

for (var i = 0; i < windows.length; i++) {
  newDraggable(windows[i])
}

// setInterval(function() {
//   // Your code to be executed repeatedly goes here
//   if (windows[0].style.zIndex == 1) {windows[1].style.zIndex = 0}
  
//   if (windows[1].style.zIndex == 1) {windows[0].style.zIndex = 0}
// }, 100); // 2000 milliseconds = 2 seconds

function openGithub() {
  window.open("https://github.com/vitor-luis3301")
}

function openItch() {
  window.open("https://vitor-min-js.itch.io")
}

function tools() {
  var toolsWin = document.getElementById("toolsWin")
  if (toolsWin.style.visibility === "hidden") {toolsWin.style.visibility = "visible"}
  else {toolsWin.style.visibility = "hidden"}
}

document.getElementById("close").addEventListener("click", function () {
  var toolsWin = document.getElementById("toolsWin")
  toolsWin.style.visibility = "hidden"
})