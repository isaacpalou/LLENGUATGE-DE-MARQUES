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

function ejercicio2(){
    //Le Pides un nuevo subtítulo en una pestaña emergente.
    const newsubtitle = prompt("Inserte el nuevo h3");
    //Asignas a la variable subtitle todos los elementos con la ID "e2"
    const subtitle = document.getElementById("e2");
    //Ahora cambias el valor de esos elementos por el valor pedido.
    subtitle.innerHTML = newsubtitle
}

function ejercicio3(){
    var p = document.getElementsByTagName("div");
    var fill = p[0].firstChild;
    p[0].removeChild(fill);
}

function ejercicio4(){
    var x = parseInt(
        prompt("Indica valor del tamaño")
    );
    document.getElementById("link").style.fontSize = x + "em";
}

function ejercicio5(){
    for (let i = 0; i < 2; i++) {
        var text_color = prompt("Color del texto del párrafo" + (i + 1) + ": ");
        var background_color = prompt("Color del fondo del párrafo" + (i + 1) + ": ");
        document.getElementsByTagName("p")[i].style.color = text_color;
        document.getElementsByTagName("p")[i].style.background = background_color;
    }
}

function ejercicio6(){
    
}