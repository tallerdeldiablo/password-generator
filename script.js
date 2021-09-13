// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function writePassword() {
  const upperA = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const lowerA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numberA = [1,2,3,4,5,6,7,8,9];
  const specialA = [40,41,42,43,44,45,46,47,48];

  /*   PROmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmMSS */
var ifupper ;
var iflower;
var ifcaracter ;
var ifnumbers;
var combinations = 0 ;
var array = ["","","","","","","",""];


var longe = prompt("How Long between 8 and 128");
// If is not a number or between 8-128
if (longe <8 || longe >128 ||  isNaN(longe))  {
  alert("ERROR number is not between 8 and 128");
  return
}
/* if is a good number ---->>  */
 else  {
     ifupper = confirm("Do you want to use Uppercase?");

       if (ifupper == true) {
          ifupper=true;                        //true value upper
            combinations++;

            var index = Math.floor(Math.random() * lowerA.length);
            array [0] = upperA [index];
            array [1] = upperA [index];

            console.log("array"+ array);

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

          //   array [2] = lowerA [index];
           // array [3] = lowerA [index];

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
        numberA [0];          //empty array
       console.log("NO ifnumbers"+ifnumbers+combinations);
    }
    ifcaracter = confirm("Do you want to use Special Characters?");
    if (ifcaracter == true) {
      ifcaracter=true;                          //true value caracter
        combinations++;  

     console.log("Yes caracter"+ifcaracter+combinations);
    }
       else{
       ifcaracter = false;
            console.log("NO character"+ifcaracter+combinations);
    }
 }
 /*ERROR*/ 
if (combinations == 0 ){
  alert("Φ╙ERROR NO COMBINATIONS SELECTED╘╒");
  return
}

// Filling the password with every true condition

for (let i = 0; i < longe; i++) {
  
  if (ifupper){
  array[i]= upperA[Math.floor(Math.random() * 25)];
  i++;
    }
     if (iflower==true){
      array[i]= lowerA[Math.floor(Math.random() * 25)];
      i++;
      }
       if (iflower==true)
       {
      array[i]= numberA[Math.floor(Math.random() * 10)];
      i++;
        }
         if (ifcaracter){
         array[i]= numberA[Math.floor(Math.random() * 10)];
         i++;
        }

}
console.log("PAssword"+array);

generatePassword(array);

 /*end prommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/ 



  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

 function  generatePassword(){


return array.join('');



  
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
