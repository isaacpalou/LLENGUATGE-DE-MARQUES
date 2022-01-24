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