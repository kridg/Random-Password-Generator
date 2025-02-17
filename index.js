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

    if(length<=4){
        return`(password should be atleast 4 digits long)`;
    }
    if(allowedChars.length===0){
        return"Select at least one character type";
    }
    for(let i=0; i<length;i++){
        const randomIndex=Math.floor(Math.random()*allowedChars.length)
        password+=allowedChars[randomIndex];
    }
    return password;
}

const passwordLength=8;
const upperCase=true;
const lowerCase=true;
const numbers=true;
const symbols=true ;

const password= passwordGenerator(passwordLength, upperCase, lowerCase, numbers, symbols);

console.log(`Password: ${password}`);