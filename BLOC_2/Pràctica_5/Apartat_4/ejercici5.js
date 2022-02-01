function color_change(color){
    var elements = document.getElementsByTagName("a")
    for (var i = 0; i < elements.length; i++){
        elements[i].style.color = color
    }
}