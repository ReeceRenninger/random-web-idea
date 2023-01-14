// in HTML to grab functions use <script>userInput()</script> that will put the output where i call the function on HTMl
// Need to check the user input as part of lab 7
//had to set userName to a variable for it to be called OUTSIDE of original function. must use return statment to store userName in starting function 
// user prompt on webpage open
// Could call the function in itself to reprompt over and over until null or false is no longer present, but cant return information

// possibly try a while loop below to keep prompt appearing 
// while (userInput == false){ recall the prompt}


// function userInput() {
//   let userName = prompt("If you love Pizza, tell me your name traveler?");

//   while (userName == false) {
//     userName = prompt("You wouldn't want to be known as stranger, right?");
  
//   } if (userName == false){
//     document.write("Stranger Danger, refresh and try again!")

//   }else {
//     document.write("Welcome to ZAAAAALAANNNDDD " + userName.toUpperCase() + "!");
//   }

//   // alert("You put your name right?")1
//   // alert("If not... you're going to be a stranger.....")
//   return userName;
// }

// // need for loop displaying an image the number issued by user


// let userAmount = prompt ("How many slices do you want? Pick 1 to 5, save some for the rest of us!");
// function repeatImage(){
//   // userAmount = parseFloat();              // adding logic to prevent breaks/ or trying to
//   // while(typeof userAmount !== 'number'){
//   //   userAmount = prompt ("Please enter a number between 1 and 5!")
//   // }

// for (let i=0; i < userAmount; i++){
// document.write('<img src="pizzaSlice.jpg">')}
// }

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