alert("Bienvenido al número secreto")
let userChoice = prompt("Elige un número entre 1 y 10")
alert ("Tu elección fue:" + userChoice)
let secretNumber = Math.random()*10

if(userChoice == secretNumber){
    alert("Ganaste!")
    else ("¡Perdiste! el número secreto era:" + secretNumber )
}