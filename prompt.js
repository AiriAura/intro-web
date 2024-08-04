alert("Bienvenido al número secreto")
let userChoice = prompt("Elige un número entre 1 y 10")
alert ("Tu elección fue:" + userChoice)
let secretNumber =Math.floor(Math.random()*10)

if(userChoice == secretNumber){
    alert("Ganaste jj te debo un besito")
   }   else {
       alert("¡Perdiste! me debes un besito" )
}