var costoProducto = 50
var descProducto = 0.2
const ISV = 0.15
var otros = 10

var total = 
            costoProducto-
            (costoProducto*descProducto) +
            (costoProducto*ISV)+
            otros

        console.log ("El total a apagar es: " + total)

function obtenerDisponibleInventario(cantRequerida){
    let cantDisponible
    console.log('cant Inicial' + totalDisponible)
    if(cantDisponible>= cantRequerida){
        cantDisponible = cantRequerida
    cantDisponible = totalDisponible - cantRequerida
    }else{
        cantDisponible = totalDisponible
        totalDisponible = 0
    }
    console.log ('cantidad a entregar: ${cantDisponible}')
    console.log ('Pedido pendiente de entregar a bodega: ${cantRequerida}')
}

obtenerDisponibleInventario(120)
console.log(cantDisponible)