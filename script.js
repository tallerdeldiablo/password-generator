// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input




function writePassword() {


/*   PROmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmMSS */
var capital ;
var caracter ;
var longe = prompt("How Long betweeb 8 and 128");
// If is not a number or between 8-128
if (longe <9 || longe >128 ||  isNaN(longe))  {
  alert("ERROR 8128 number is not correct 8128");

}
/* if is a good number ---->>  */
 else  {
     capital = confirm("Capital or NOn");

       if (capital == true) {
        capital=true;                        //true value capital
        console.log("yes  Capital"+capital);
      }     
      else{
        capital = false;
      console.log("NO capital"+capital);
      
     }
     caracter = confirm("Caracter or Non");
      
     if (caracter == true) {
       caracter=true;                       //true value caracter
     
      console.log("Yes caracter"+caracter);
     }
        else{
        caracter = false;
        console.log("NO caracter"+caracter);
     }
 }
 /*end prommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/ 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 function  generatePassword(){





  
/*
butt load of code

*/

/* test
console.log("dos"+caracter+capital);
*/

  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
