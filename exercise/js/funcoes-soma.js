/*  CÓDIGO PARA SOMA DE NÚMEROS 
import entradaDados from 'readline-sync';

let num1 = parseFloat(entradaDados.question("Digite o primeiro número: "));
let num2 = parseFloat(entradaDados.question("Digite o segundo número: "));

let soma = num1 + num2
console.log(soma)
*/

/*  FUNÇÃO PARA REALIZAR UMA SOMA
function soma(numero_1 , numero_2){
    return numero_1 + numero_2;
    }

    let resultado = soma(10, 5)

    console.log(resultado);
*/
 

  /*CÓDIGO PARA MÉDIA DE NOTAS*/
import entradaDados from 'readline-sync';

const nota1 = parseFloat(entradaDados.question("Digite a primeira nota: ")); 
const nota2 = parseFloat(entradaDados.question("Digite a segunda nota: ")); 
const nota3 = parseFloat(entradaDados.question("Digite a terceira nota: "));

const media = (nota1 + nota2 + nota3) / 3
if (media >= 6){
    console.log(`Parabéns!\nSua média foi ${media.toFixed(1)} e você foi Aprovado.`)
} else {
    console.log(`Resultado final: ${media.toFixed(1)}\nAluno Reprovado!`)
}

