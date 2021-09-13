// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {

/*   PROmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmMSS */
var ifupper ;
var iflower;
var caracter ;
var ifnumbers;
var combinations = 0 ;


var longe = prompt("How Long between 8 and 128");
// If is not a number or between 8-128
if (longe <9 || longe >128 ||  isNaN(longe))  {
  alert("ERROR number is not between 8 and 128");
  return
}
/* if is a good number ---->>  */
 else  {
     ifupper = confirm("Do you want to use Uppercase?");

       if (ifupper == true) {
          ifupper=true;                        //true value upper
            combinations++;
        console.log("yes  upper"+ifupper+combinations);
      }     
      else{
        ifupper = false;
      console.log("NO upper"+ifupper+combinations);
      
     }
     iflower = confirm("Do you want to use Lowercase?");
      
     if (iflower == true) {
          iflower=true;                       //true value caracter
             combinations++;
      console.log("Yes caracter"+iflower+combinations);
     }
        else{
          iflower = false;
        console.log("NO iflower"+iflower+combinations);
     }
     ifnumbers = confirm("Do you want to use Numbers?");
     if (ifnumbers == true) {
      ifnumbers=true;                       //true value caracter
        combinations++;
     console.log("Yes ifnumbers"+ifnumbers+combinations);
    }
       else{
        ifnumbers = false;
       console.log("NO ifnumbers"+ifnumbers+combinations);
    }
    caracter = confirm("Do you want to use Special Caracters?");
    if (caracter == true) {
      caracter=true;                       //true value caracter
        combinations++;
     console.log("Yes caracter"+caracter+combinations);
    }
       else{
       caracter = false;
       console.log("NO caracter"+caracter+combinations);
    }
 }
 /*ERROR*/ 
if (combinations == 0 ){
  alert("Φ╙ERROR NO COMBINATIONS SELECTED╘╒");
  return
}





 /*end prommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/ 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

 function  generatePassword(){




  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
