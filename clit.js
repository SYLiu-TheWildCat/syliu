function clit(x, y) {
    var xe = document.getElementById(x);
    var ye = document.getElementById(y);
    ye.onclick = function () { xe.style.display = ''; };
}

window.onload = clit;