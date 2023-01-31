function showDiv(Div) {
    let x = document.getElementById(Div);
    if(x.style.display=="flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
        x.style.width = "100%";
        x.style.height = "400px";
        x.style.gap = "30px";
        x.style.scrollSnapType = "x mandatory";
        x.style.overflowX = "auto";
        x.style.marginTop = "-100px";
        x.style.backgroundColor = "none";
        x.style.paddingBottom = "30px";
    }
}