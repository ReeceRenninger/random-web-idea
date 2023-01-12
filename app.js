// in HTML to grab functions use <script>userInput()</script> that will put the output where i call the function on HTMl
// Need to check the user input as part of lab 7
//had to set userName to a variable for it to be called OUTSIDE of original function. must use return statment to store userName in starting function 
// user prompt on webpage open

function userInput() {
  let userName = prompt("If you love Pizza, tell me your name traveler?");

  if (userName == false) {
    userName = prompt("I must know your name for your journey to continue.");

  } if (userName == false){
    document.write("Stranger Danger, refresh and try again!")
  }
  else {
    document.write("Welcome to ZAAAAALAANNNDDD " + userName.toUpperCase() + "!");
  }
  alert("You put your name right?")
  alert("If not... you're going to be a stranger.....")
  return userName;
}



// above best toppings
function goodToppings() {
  if (userName == false) {
    document.write("Strangers aren't allowed good toppings, shoo")
  } else {
    document.write(userName.toUpperCase() + ", you love pepperoni right?")
  }
}


// above block of worst toppings
function badToppings() {
  if (userName == false) {
    document.write("Strangers get all the worst toppings")
  } else {
    document.write(userName.toUpperCase() + ", if you like pineapple, I might have to ask you to leave.")
  }
}


// above block of dance party pizza
function dancePizza() {
  if (userName == false) {
    document.write("Strangers can't attend the dance party!")
  } else {
    document.write(userName.toUpperCase() + ", it's time to dance those delicious calories away.")
  }
}