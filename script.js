
//01-stringCompare.js

var stringA = "Coach Gaming";
var stringB = "Coach Gaming";

if (stringA = stringB)
{
  console.log('The strings are the same!');
  alert('The strings are the same!');
}
else
{
  console.log('The strings are not the same!');
  alert('The strings are not the same!');
}

//02-numberCompare.js

var num = rand(0,16);

if (num = 2)
{
  console.log('You have the correct number!');
  alert('You have the correct number!');
}
else if (num > 15)
{
  console.log('Your number is too big!');
  alert('Your number is too big!');
}
else
{
  console.log('Pick another number!');
  alert('Pick another number!');
}

//03-functionCombine.js

var firstName = ("Big");
var space = (" Chungus ");
var lastName = ("Gaming");

console.log(firstName + space + lastName);
alert(firstName + space + lastName);

//04-functionConditions.js

var num = rand(1,6);

function door(num)
{
   if (num == 1)
   {
     return "Spooky Zone 1";
     alert ("Spooky Zone 1");
   }
   else if (num == 2){
     return "Spooky Zone 2";
     alert ("Spooky Zone 2");
   }
   else if (num == 3){
     return "Spooky Zone 3";
     alert ("Spooky Zone 3");
   }
   else if (num == 4){
     return "Spooky Zone 4";
     alert ("Spooky Zone 4");
   }
   else if (num == 5){
     return "Spooky Zone 5";
     alert ("Spooky Zone 5");
   }
   else if (num == 6){
     return "Spooky Zone 6";
     alert ("Spooky Zone 6");
   }
   else
   {
     return "There are only 6 doors!";
     alert ("There are only 6 doors!");
   }
 }

//05-randomWords.js

var firstArray = ["Lil", "Big", "DJ", "Dr.", "Dark", "Mx.", "Chungus"];

console.log(firstArray[rand(0,6)]);
