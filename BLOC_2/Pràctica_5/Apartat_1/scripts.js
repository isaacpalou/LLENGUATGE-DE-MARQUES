function dias(){
    dias_semana = [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo"
    ];
    const reversed_days = dias_semana.reverse();
    reversed_days.forEach(mes => {
        alert(mes)
    });
}

function conversion_a_dollar(euro){
    dollar = parseFloat(1.12);
    resultado = dollar * parseFloat(euro);
    document.getElementById("total").innerHTML = euro + " euros son: " + resultado.toFixed(2) + " dollares";
}

function conversion_a_euro(dollar){
    euro = parseFloat(0.90);
    resultado = euro * parseFloat(dollar)
    document.getElementById("total").innerHTML = dollar + " dollares son: " + resultado.toFixed(2) + "euros"
}