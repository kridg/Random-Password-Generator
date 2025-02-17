function randomPass(length, allowLowerCase, allowUpperCase, allowSymbols, allowNumbers){
    const LowerCase='abcdefghijklmnopqrstuvwxyz';
    const UpperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const Numbers='1234567890';
    const Symbols='!@#$%^&*_-+=';

    let pass='';
    let charactersEligible='';

    charactersEligible+=allowLowerCase?LowerCase:"";
    charactersEligible+=allowUpperCase?UpperCase:"";
    charactersEligible+=allowSymbols?Symbols:"";
    charactersEligible+=allowNumbers?Numbers:"";

    if(length<=4){
        return`Less than 4 not allowed`;
    }
    if(charactersEligible.length===0){
        return`Select atleast one data type`;
    }
    for(let i=0;i<length;i++){
        const indexRandomizer=Math.floor(Math.random()*charactersEligible.length);
        pass+=charactersEligible[indexRandomizer];
    }
    return pass;
}

const passLength=16;
const allowLowerCase=true;
const allowUpperCase=true;
const allowSymbols=true;
const allowNumbers=true;

const pass=randomPass(passLength,allowLowerCase,allowUpperCase,allowNumbers,allowSymbols);
console.log(`Password: ${pass}`);
