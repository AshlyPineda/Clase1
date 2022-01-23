let objetoPersona1 = {
    id:"78785327",
    nombre: 'Ashly Pineda',
    ciudad: 'SPS'

}

let objetoPersona2 = {
    id:"473746327",
    nombre: 'Mario Pineda',
    ciudad: 'SPS'

}

let arraynumeros = [1,25,34,56]
let arrayPersona = {
      id: '1877438', nombre: 'Sergio', ciudad: 'Puerto Cortes'

}

arrayPersona.push(objetoPersona2)
arrayPersona.push(50)

let resultadoFiltro = arrayPersona.find(persona => persona.ciudad == 'SPS')

console.log(resultadoFiltro)