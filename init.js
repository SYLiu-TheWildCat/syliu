function init(x, y) {
    var xe = document.getElementById(x);
    var ye = document.getElementById(y);
    ye.onmouseover = function () { xe.style.display = ''; };
    ye.onmouseout = function () { xe.style.display = 'none'; }
}

window.onload = init;  