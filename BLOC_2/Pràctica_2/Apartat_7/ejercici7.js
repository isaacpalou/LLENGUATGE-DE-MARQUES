// Valores usuario.

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