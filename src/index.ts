
const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;

const buttonSoma = document.getElementById('buttonSomar') as HTMLElement;
const buttonSubtrair = document.getElementById('buttonSubtrair') as HTMLElement;


type Operacoes = "SOMAR" | "SUBTRAIR";

interface Valores{
  tipo: Operacoes;
  a: number;
  b: number;
}

function operacao({tipo, a, b}: Valores):number{
 if(tipo === "SOMAR"){
  return a + b;
 }else{
  return a - b
 }
}

/* function somar({a,b}:Valores): number{
  return a + b;
}

function subtrair({a,b}:Valores): number{
  return a - b;
} */

buttonSoma.addEventListener('click', function(){
  const resultado = operacao({
    tipo: "SOMAR",
    a: Number(input1.value),
    b: Number(input2.value),
  });

  console.log(resultado)
})

buttonSubtrair.addEventListener('click',function(){
  const resultado = operacao({
    tipo: "SUBTRAIR",
    a: Number(input1.value),
    b: Number(input2.value),
  });
  console.log(resultado)
})