const valores = [7.1, 6.2, 3.0, 5.0]
console.log(valores[0])

valores[4] = 5
console.log(valores)

valores.push({ id: 3 }, false, null, "teste") //push adiciona pro array
console.log(valores)

console.log(valores.pop())    //retira valor do array
delete valores[0]
console.log(valores)

console.log(typeof valores)