function clitt(x, y) {
    var xe = document.getElementById(x);
    var ye = document.getElementById(y);
    ye.onclick = function () { xe.style.display = 'none'; };
}

window.onload = clitt;