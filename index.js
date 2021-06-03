var title = document.getElementById('title').innerHTML;
var maximize = document.getElementById("maximize")

document.getElementById('titleShown').innerHTML = title;
maximize.addEventListener("click", Maximize)

if (window.innerWidth == screen.width) {
    document.getElementById("circle").innerHTML = "&triangledown;"
}

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