// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function(){
   let userChoice =  $("#input").val()
   $("#userChoice").html(userChoice)
   let randomVar = Math.random()
   let x = computerChoice(randomVar)
   $("#computerChoice").html(x)



   if ( userChoice == x ){
       $("").html()
   }
});


function computerChoice(number){
  if (number > 0.66){
    return "rock"
  }
  if (number < 0.66 && number > 0.33 ){
    return "paper"
  }
  else if (number < 0.33){
    return "scissors"
  }
  
}



