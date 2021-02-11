var numero = 1 //Escopo global e tem escopo de função
{
    let numero = 2 //Escopo global, função e escopo de bloco
    console.log("Dentro", numero)
}
console.log("Fora", numero)