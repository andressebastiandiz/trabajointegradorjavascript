const valorTicket=200

function calcularTotal() {
    let cant=document.getElementById("cant").value

    let categ=document.getElementById("categ").value

    let descuento;
    if (categ==1) {
        descuento=80

    } else if (categ==2) {
        descuento=50
        
    } else {
        descuento=15
        
    }
        
    let total=cant*valorTicket

    total -= total*descuento/100

    document.getElementById("total").innerHTML=total

}

function resalta() {
    document.getElementById("button1").style.color="yellow"
}

function opaca() {
    document.getElementById("button1").style.color="white"
}

function resaltar() {
    document.getElementById("button2").style.color="yellow"
}

function opacar() {
    document.getElementById("button2").style.color="white"
}