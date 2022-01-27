function ejercicio1() {
    const title = document.getElementsByTagName("h2");
    const paragraph = document.getElementsByTagName("p");

    for (index = 0; index < title.length; index++) {
        window.alert(title[index].innerHTML)
    }
    for(index = 0; index < paragraph.length; index++){
        window.alert(paragraph[index].innerHTML)
    }
}