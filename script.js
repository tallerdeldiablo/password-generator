// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

var array = [];
function writePassword() {
  const upperA = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const lowerA = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const numberA = [1,2,3,4,5,6,7,8,9];
  const specialA = [33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,91,92,93,94,95,96,123,124,125,126];// 33!"#$%&'()*+,-./47 -- :;<=>?@ 91[\]^_`96 123{|}~126

  /*   PROmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmMSS */
var ifupper ;
var iflower;
var ifcaracter ;
var ifnumbers;
var combinations = 0 ;



var longe = prompt("How Long between 8 and 128");
// If is not a number or between 8-128
if (longe <8 || longe >128 ||  isNaN(longe))  {
  alert("ERROR number is not between 8 and 128");
  return
}
/* if is a good number ---->>  */
 else  {
     ifupper = confirm("Do you want to use Uppercase?");

       if (ifupper == true) {              //true condition in the prompt        
        ifupper= true;         
            combinations++;
      

            console.log("array"+ array);

        console.log("yes  upper"+ifupper+combinations);
      }     
      else{
        ifupper = false;
      console.log("NO upper"+ifupper+combinations);
      
     }
     iflower = confirm("Do you want to use Lowercase?");
      
     if (iflower == true) {        //true condition in the prompt
             combinations++; 

       console.log("Yes caracter"+iflower+combinations);
     }
        else{
          iflower = false;
                                 
        console.log("NO iflower"+iflower+combinations);
     }
     ifnumbers = confirm("Do you want to use Numbers?");
     if (ifnumbers == true) {                     //true condition in the prompt
      combinations++;                 
         

     console.log("Yes ifnumbers"+ifnumbers+combinations);
    }
       else{
        ifnumbers = false;

       console.log("NO ifnumbers"+ifnumbers+combinations);
    }
    ifcaracter = confirm("Do you want to use Special Characters?");
    if (ifcaracter == true) {              //true condition in the prompt
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
console.log(combinations);

// Filling the password with every true condition

for (let i = 0; i < longe; i++) {
   
  if (ifupper==true){
    array.push(upperA[Math.floor(Math.random() * 25)]);           //chose a random index to put

    }
    if (iflower==true){
      array.push(lowerA[Math.floor(Math.random() * 25)]);
 
      }
      if(ifnumbers==true)
       {
        array.push(numberA[Math.floor(Math.random() * 9)]);
      
        }
      if(ifcaracter==true){
              
         let transformado = specialA[Math.floor(Math.random() * 25)];
         console.log(transformado);
         let text = String.fromCharCode(transformado);   //converts numbers to special characters
         array.push(text);
          console.log(array[i]);
      
        }
         
    
    
}
console.log("PAssword"+array);


generatePassword(array);

 /*end prommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm*/ 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

 function  generatePassword(){

return array.slice(0,longe).join('');
 //return array.join('');

  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
