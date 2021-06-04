const consoleBtn = document.getElementById('run')

var maximize = document.getElementById("maximize")

maximize.addEventListener("click", Maximize)

function Maximize() {
    if (window.innerWidth == screen.width) {
        window.resizeTo(1280, 720);
        document.getElementById("circle").innerHTML = "&triangle;"
    }
    else {
        window.moveTo(0, 0);
        window.resizeTo(screen.width, screen.height);
        document.getElementById("circle").innerHTML = "&triangledown;"
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth == screen.width) {
        document.getElementById("circle").innerHTML = "&triangledown;"
    }
    else {
        document.getElementById("circle").innerHTML = "&triangle;"
    }
  });