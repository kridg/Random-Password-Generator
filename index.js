function passwordGenerator(length, upperCase, lowerCase, numbers, symbols){
    const upperChar='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerChar='abcdefghijklmnopqrstuvwxyz';
    const numberChar='1234567890';
    const symbolChar='!@#$%^&*_+';

    let allowedChars="";
    let password="";

    allowedChars += upperCase ? upperChar: "";
    allowedChars += lowerCase ? lowerChar: "";
    allowedChars += numbers ? numberChar: "";
    allowedChars += symbols ? symbolChar: "";

    if(length<=6){
        return`(password should be atleast 6 digits long)`;
    }
    if(allowedChars.length===0){
        return"Select at least one character type";
    }
    for(let i=0; i<length;i++){
        
    }
}

const passwordLength=10;
const upperCase=true;
const lowerCase=false;
const numbers=false;
const symbols=false;

const password= passwordGenerator(passwordLength, upperCase, lowerCase, numbers, symbols);

console.log(`Password: ${password}`);