function showDiv(Div) {
    var x = document.getElementById(Div);
    if(x.style.display=="none") {
        x.style.display = "flex";
        x.style.width = "100%";
        x.style.gap = "20px";
        x.style.scrollSnapType = "x mandatory";
        x.style.overflowX = "auto";
    } else {
        x.style.display = "none";
    }
}