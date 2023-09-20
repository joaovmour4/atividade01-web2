import { areaRetangulo } from "./modules/areaRetangulo.js"
import { calculateAge } from "./modules/datas.js"
import { maiorNt, mediaNt, menorNt } from "./modules/notas.js"

// QUESTÃO 1
console.log(areaRetangulo(5, 5), '\n')

// QUESTÃO 3
console.log(calculateAge(10, 6, 2000), '\n')

// QUESTÃO 4
const notas = [7, 5, 10]

console.log(menorNt(notas))
console.log(maiorNt(notas))
console.log(mediaNt(notas), '\n')