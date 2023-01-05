function showDiv(Div) {
    var x = document.getElementById(Div);
    if(x.style.display=="none") {
        x.style.display = "flex";
        x.style.width = "100%";
        x.style.gap = "30px";
        x.style.scrollSnapType = "x mandatory";
        x.style.overflowX = "auto";
        x.style.marginTop = "80px";
        x.style.backgroundColor = "rgb(20, 20, 25)";
        x.style.paddingTop = "40px";
        x.style.paddingBottom = "40px";
    } else {
        x.style.display = "none";
    }
}