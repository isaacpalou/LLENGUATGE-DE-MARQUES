function ejercici10() {
    var nota = prompt("Escribe la nota que has sacado:[0/10]");

    var texto = "???";
    switch (nota) {
        case "0":
            texto = "Te has comido un rosco chavalin/a";
            break;

        case "1":
            texto = "Al menos lo has intentado";
            break;

        case "2":
            texto = "Menuda mierda de nota";
            break;

        case "3":
            texto = "nisiquiera haces media pringao xd";
            break;

        case "4":
            texto = "Haces media por poco pero no te confies";
            break;

        case "5":
            texto = "Bastante justito eh";
            break;

        case "6":
            texto = "meh, simplemente, meh";
            break;

        case "7":
            texto = "Esto ya empieza a ser una nota aceptable";
            break;

        case "8":
            texto = "Illo, has estudiao eh";
            break;

        case "9":
            texto = "Es una notaza pero te va a dar rabia porque no has sacado el 10";
            break;

        case "10":
            texto = "Bro las chuletas no eh";
            break;

        default:
            texto = "Haz introducido un valor erróneo, vuelva a intentarlo.";
            break;
    }

    document.write("Has sacado un " + nota);
    document.write("<br>");
    document.write(texto);
}