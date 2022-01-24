function funcion1(){
    alert ("Aquest és el meu script")
    document.write("Aquest és el meu script")
}

function funcion2(){
    var home = prompt ("Nombre de Hombre")
    var dona = prompt ("Nombre de Mujer")

    alert(home + " & " + dona)
}

function funcion3(){
    var home = prompt ("Escribe tu nombre")
    document.write("Hola, el teu nom és: " + home)
}

function funcion4(){
    var numero1 = parseInt(prompt("Escribe un número"))
    var numero2 = parseInt(prompt("Escribe otro número"))

    if (numero1 < numero2) {
        document.write("El número mas grande és: " + numero2)
    }
    else{
        document.write("El número mas grande és: " + numero1)
    }
}
function funcion5(){
    var numero1 = parseInt(prompt("Escribe un número"))
    var numero2 = parseInt(prompt("Escribe otro número"))
    var suma = (numero1 + numero2)

    document.write("EL RESULTADO DE LA SUMA ÉS: " + suma)
}

function funcion6(){
    var nom_usuari = prompt("Escriu el teu nom")
    var edat_usuari = parseInt(prompt("Escriu la teva edat"))
    var estatura_usuari = prompt("Escriu la teva estatura en CM")
    var estat_civil = prompt("Escriu el teu estat civil: solter/casat")

    if (estat_civil == "solter") {
        document.write(nom_usuari + "<br>" + edat_usuari + "<br>" + estatura_usuari + " cm" +  "<br>" + estat_civil)
    }

    if (estat_civil == "casat") {
        document.write(nom_usuari + " " + edat_usuari + " " + estatura_usuari + " cm " + estat_civil)
    }
}

function funcion7(){
    var palabra = prompt("Escribe algo:")

    var longitud_palabra = palabra.length

    var texto = '"' + palabra + '" contiene ' + longitud_palabra + " carácter"

    if (longitud_palabra == 0) {
        texto = "No has escrito nada"
    }
    if (longitud_palabra > 1) {
        texto += "es"
    }

    document.write(texto)
}

function funcion8(){
    meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
    ]
    
    meses.forEach(mes => {
        document.write("<h3>" + mes + "</h3>")
    });
}

function funcion9() {
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
function funcion10() {
    while(true) {
        input_usuario = prompt('Escribe un numero cualquiera, si quieres parar escribe "stop"');
    
        var texto = "El numero " + input_usuario + " es ";
    
        if (input_usuario.toLowerCase() == "stop") {
            break;
        };
    
        switch (true) {    
            case input_usuario == "":
            default:
                texto = '"' + input_usuario + '" no es valido';
                break;
                
            case input_usuario % 2 == 0:
                texto += "par";
                break;
                
            case input_usuario % 2 >= 0:
            case input_usuario % 2 <= 0:
                texto += "impar";
                break;
        }
    
        document.write(texto)
        document.write(".<br>")
    }
}