// Add any custom javascript here.
opensdg.dataRounding = function(value) {
    return Math.round(value * 1000) / 1000;
}

var nowZoom = 1;
function zoomOut(){
    nowZoom = nowZoom - 0.1;
    if(nowZoom <= 0.7) nowZoom = 0.7;
    zooms();
}
function zoomIn(){
    nowZoom = nowZoom + 0.2;
    if(nowZoom >= 1.6) nowZoom = 1.6;
    zooms();
}
function zooms(){
    document.body.style.zoom = nowZoom;
    if(nowZoom <= 0.7) alert(" 더 이상 축소할 수 없습니다.")
    if(nowZoom >=1.6) alert(" 더 이상 확대할 수 없습니다.")
}
